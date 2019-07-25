const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://user:prueba123@ds231568.mlab.com:31568/devfprueba';
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const mongo = mongoose.connection();
mongo.on('error', err => console.log(err)).once('open', () => console.log('Database connected succesfully'));

