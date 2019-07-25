const { User } = require('../../models');

// TODO: Pasar los parametros de graphql

const createUser = async (user) => {
  const newUser = User(user);
  newUser.save((err, user) => {
    if (err) throw new Error(err);
    return user;
  });
};

// Login -> Juntos como hermanos

// Modificar usuario

// borrar usuario (Logico)

module.exports = {
  createUser,
};
