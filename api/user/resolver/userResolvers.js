
const arrayUsers = [
    {
        nome: "ana",
        ativo: true
    },
    {
        nome: "Marcia",
        ativo: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0]
    }
}

module.exports = userResolvers