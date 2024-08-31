module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@types/*': './src/types/*',
          '@assets/*': './src/assets/*',
          '@firebase/*': './src/firebase/*',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@navigators': './src/navigators',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@ui-modules': './src/ui-modules',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  overrides: [{
    "plugins": [
      ["@babel/plugin-transform-private-methods", {
      "loose": true
    }]
    ]
  }]
};
