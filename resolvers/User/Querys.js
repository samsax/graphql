const { User } = require('../../models');

// TODO: Pasar los parametros de graphql

const getAllUsers = async () => {
  const users = await User.find({}).exec();
  if (!users) throw new Error('Error en los usuarios');
  return users;
};

const getUserByEmail = async (root,args) => {
  const { email } = args;
  const user = await User.findOne({ email }).exec();
  if (!user) throw new Error('No existe el usuario');
  return user;
};

const getUserById = async (root,args) => {
  const { id } = args;
  const user = await User.findOne({ _id: id }).exec();
  if (!user) throw new Error('No existe el usuario');
  return user;
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
};
