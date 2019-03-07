module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  env: {
    development: {
      ignore: [
        '**/*.test.js',
      ],
    },
  },
};
