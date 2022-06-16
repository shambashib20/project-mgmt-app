const { projects, clients } = require('../sampleData.js');

const { GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = require("graphql");


// Querying the client type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});
// When we will be querying from client side, we will get the result.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // to get query result of all clients in a singl go!
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parents, args) {
                return clients;
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // higher order find function where basically it finds client id === args id.
                return clients.find((client) => client.id === args.id);
            },
        },
    },
});

// query field should always have the function name.
module.exports = new GraphQLSchema({
    query: RootQuery
})


