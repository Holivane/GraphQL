const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        nome: "ana",
        ativo: true
    },
    {
        nome: "Marcia",
        ativo: false
    }
]

const typeDefs = gql `
type User {
    nome: String!
    ativo: Boolean!
    email: String
}
`

const server = new ApolloServer({typeDefs, resolvers});
