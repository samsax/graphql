const { User,Store } = require('../../models');
const authenticate =  require('../../utils/authenticate');
const storage =  require('../../utils/storage');

// TODO: Pasar los parametros de graphql

const createUser = async (root, args, context, info) => {
  const { user } = args;

  if(user.photo_url){
	const { createReadStream } = await user.photo_url
	const stream = createReadStream();
	const { url } = await storage({ stream })
	user.photo_url = url;
  }
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

const login = async(root, args, context, info) => {
  // {emai:"email@email",password:"password"}
	const token = await authenticate(args).catch( e => { throw new Error(e) });
	return {
		token,
		message:"Ok"
	}
}

const updateUser = async(root, args, context) => {
	const { _id } = context.user
	const { data } = args
	const user =  await User.findById(_id);
	Object.keys(data).map( key => user[key] = data[key] )
	if(data.photo_url){
		const { createReadStream } = await data.photo_url
		const stream = createReadStream();
		const { url } = await storage({ stream })
		user.photo_url = url;
	}
	const updatedUser =  await user.save({new:true})
	return updatedUser;
}

const deleteUser =  async(root,args,context) => {
	const { _id } = context.user 
	await User.findByIdAndUpdate(_id,{is_active:false},{new:true});
	return "User deleted successfully"
}

// borrar usuario (Logico)

module.exports = {
  createUser,
  createStore,
	createUser,
	login,
	updateUser,
	deleteUser
};
