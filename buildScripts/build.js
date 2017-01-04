/* eslint-disable no-console */
import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) return jsonStats.errors.map(e => console.log(chalk.red(e)));
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(w => console.log(chalk.yellow(w)));
  }
  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.green('Your app has been built for production and written to /dist!'));
  return 0;
});
