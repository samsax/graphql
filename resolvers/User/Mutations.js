const { User,Store } = require('../../models');

// TODO: Pasar los parametros de graphql

const createUser = async (root, args, context, info) => {
  const { user } = args;
  const newUser = User(user);
  const myUser = await newUser.save();
  return myUser;
};

const createStore = async (root, args, context, info) => {
  const { store } = args;
  const newStore = Store(store);
  const myStore = await newStore.save();
  return myStore;
};

// Login -> Juntos como hermanos

// Modificar usuario

// borrar usuario (Logico)

module.exports = {
  createUser,
  createStore,
};
