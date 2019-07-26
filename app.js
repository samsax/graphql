const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./schema.graphql');

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://prueba2:prueba2@cluster0-vp6hz.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const mongo = mongoose.connection;
mongo.on('error', err => console.log(err)).once('open', () => console.log('Database connected succesfully'));

// let personas = [];

// const resolvers = {
// 	Query: {
// 		saludo: (root, args, context, info) => `Hola ${args.nombre}`,
// 		allPeople: (root,args) => personas,
// 		singlePerson: (root, args) => personas[args.position],
// 	},
// 	Mutation:{
// 	   addPeople: (root,args) => {
// 		   personas.push(args.data);
// 		   return args.data;
// 	   }
// 	}
// }
// root: Trae todo la información del servidor de Graphql object request, headers , etc
//args: Son los parametros que el cliente va a usar para poder mandar información
// context: Es un objeto global en el cual todos los resolvers se comunican  sirve para AUTH
//info: Es la forma 'textual' de como se envio el query o mutaion

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Works in port 4000'));
