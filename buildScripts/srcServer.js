import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackdev from 'webpack-dev-middleware';
import graphqlHTTP from 'express-graphql';
import config from '../webpack.config.dev';
import schema from '../mock/schema';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackdev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.set('port', process.env.PORT || port);
const server = app.listen(app.get('port'), () => console.log(`Express server listening on port ${server.address().port}`));
