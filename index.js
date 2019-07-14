const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, my friends"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/gqlpractice", {
    useNewUrlParser: true
  });
};

const port = process.env.PORT || 5000;

connect()
  .then(connection => {
    server.listen(port).then(({ url }) => {
      console.log(`server ready at ${url}`);
    });
  })
  .catch(err => console.log(err));
