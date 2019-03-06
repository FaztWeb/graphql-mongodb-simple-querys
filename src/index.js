import express from 'express';
const app = express();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphql-mongo',{useNewUrlParser: true})
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err));
import Car from './models/Car';

import { ApolloServer } from 'apollo-server-express';


import typeDefs from './schema';
import resolvers from './resolvers';


// settings
app.set('port', process.env.PORT || 3000);

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
      Car
  },
  introspection: true,
  playground: true,
  playground: {
      endpoint: `http://localhost:3000/graphql`,
      settings: {
          'editor.theme': 'dark'
      }
  }
})

SERVER.applyMiddleware({
  app
})

// start the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
