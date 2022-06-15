const { projects, clients } = require('../sampleData');

const { GraphQlObjectType } = require('graphql');


const ClientType = new GraphQlObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

// When we will be querying from client side, we will get the result.
const RootQuery = new GraphQlObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
        }
    }
})