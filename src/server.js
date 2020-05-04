const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./app/resolvers/resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user', { useUnifiedTopology: true, useNewUrlParser: true });
const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname+'/app/schemas', 'schema.graphql'),
    resolvers
});

server.start();