const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const user = require("./types/user.resolvers");
const User = require("./schema/userSchema");

const typeDefs = `

    type User {
        _id: ID!
        name: String!
    }

    type Query {
        getUsers: [User]
    }
`;

const resolvers = {
  Query: {
    getUsers: async () => await User.find({})
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    return { user: null };
  }
});

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/gqlpractice", {
    useNewUrlParser: true
  });
};

const port = process.env.PORT || 5000;
connect()
  .then(c => {
    server.listen(port).then(({ url }) => {
      console.log(`server ready at ${url}`);
    });
  })
  .catch(err => console.log(err));
