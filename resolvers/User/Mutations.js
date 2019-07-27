const { User } = require('../../models');
const authenticate =  require('../../utils/authenticate');

// TODO: Pasar los parametros de graphql

const createUser = async (root, args, context, info) => {
  const { user } = args;
  const newUser = User(user);
  const myUser = await newUser.save();
  return myUser;
};

const login = async(root, args, context, info) => {
  // {emai:"email@email",password:"password"}
	const token = await authenticate(args).catch( e => { throw new Error(e) });
	return {
		token,
		message:"Ok"
	}
}

// Modificar usuario

// borrar usuario (Logico)

module.exports = {
	createUser,
	login
};
