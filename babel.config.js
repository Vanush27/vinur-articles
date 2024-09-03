module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env.dev',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    
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
          '@api': './src/api',
          '@assets': './src/assets',
          '@types/*': './src/types/*',
          '@assets/*': './src/assets/*',
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
