const { User } = require('../../models');

// TODO: Pasar los parametros de graphql

const createUser = async (root, args, context, info) => {
  const { user } = args;
  const newUser = User(user);
  const myUser = await newUser.save();
  return myUser;
};

// Login -> Juntos como hermanos

// Modificar usuario

// borrar usuario (Logico)

module.exports = {
  createUser,
};
