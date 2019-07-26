const UserMutations = require('./User/Mutations');
const UserQueries = require('./User/Querys');

module.exports = {
	Mutation:{
		...UserMutations, //Split Objects
	},
	Query:{
		...UserQueries,
	}
}