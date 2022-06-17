const { projects, clients } = require('../sampleData.js');

// Mongoose Models
const Project = require('../models/Project');
const Client = require('../models/Client');

const { GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = require("graphql");

// The Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return Client.findById(parent.clientId);
            }

        }
    })
});
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
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parents, args) {
                // return projects was used to return the array from
                // projects.
                // return projects;
        // ===================================================
            //  
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // higher order find function where basically it finds client id === args id.
                return Project.findById(args.id);
            },
        },
        // to get query result of all clients in a singl go!
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parents, args) {
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // higher order find function where basically it finds client id === args id.
                return Client.findById(args.id);
            },
        },
    },
});

// query field should always have the function name.
module.exports = new GraphQLSchema({
    query: RootQuery
})


