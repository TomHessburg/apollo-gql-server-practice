const User = require("../schema/userSchema");
const { AuthenicationError } = require("apollo-server");

const findUsers = (pv, args, context) => {
  let users = User.find({}).exec();

  return users;
};

const signup = (pv, args, context) => {
  let user = User.create(args.input);

  return user;
};

const updateUser = (pv, args, context) => {
  let user = User.findByIdAndUpdate(args, id, args.input, {
    new: true
  }).exec();

  return user;
};

module.exports = {
  Query: {
    findUsers
  },
  Mutation: {
    signup,
    updateUser
  }
};
