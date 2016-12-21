/* eslint-disable */
module.exports = (wallaby) => {
  return {
    files: [
      {
        pattern:'src/**/*.js',
        load: true,
      }
    ],
    tests: [
      {
        pattern:'src/**/*.spec.js',
        load: true,
      }
    ],
    testFramework: 'mocha',
    debug: true,
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.spec.js': wallaby.compilers.babel(),
    },
  };
};
