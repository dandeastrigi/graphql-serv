const loki = require('lokijs');
var db = new loki('users.db');
var User = db.addCollection('users');

module.exports = {
    Query: {
        users: () => User.find()
    },
    Mutation: {
        createUser: (_, { name, zipCode, city, neighborhood, street, number, uf }) => User.insert({name, zipCode, city, neighborhood, street, number, uf}),
    }
}