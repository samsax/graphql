const UserMutations = require('./User/Mutations');
const UserQueries = require('./User/Querys');
const { EmailAddress } = require('graphql-scalars');


module.exports = {
	EmailAddress,
	Mutation:{
		...UserMutations, //Split Objects
	},
	Query:{
		...UserQueries,
	}
}