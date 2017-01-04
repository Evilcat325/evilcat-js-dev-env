import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import fs from 'fs';
import UserType from './user';


const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    hello: {
      type: GraphQLString,
      description: 'The *mandatory* hello world example, Graphql Style',
      resolve: () => 'world',
    },
    allUser: {
      type: new GraphQLNonNull(new GraphQLList(UserType)),
      description: 'mock users',
      resolve: () => {
        const data = JSON.parse(fs.readFileSync(`${__dirname}/db.json`));
        return data.users;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQueryType,
});
