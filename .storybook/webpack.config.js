const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const paths = require('./paths');

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
module.exports = {
resolve: {
  alias: {
      /*--- Core ---*/
      content: path.resolve(__dirname, '../src/static'),
      interface: path.resolve(__dirname, '../src/interface'),
      wasm: path.resolve(__dirname, '../src/wasm'),

      /*--- Assets ---*/
      assets: path.resolve(__dirname, '../src/assets'),

      /*--- Higher-Order ---*/
      containers: path.resolve(__dirname, '../src/interface/containers'),
      foundry: path.resolve(__dirname, '../src/interface/foundry'),
      forms: path.resolve(__dirname, '../src/interface/forms'),
      templates: path.resolve(__dirname, '../src/interface/components/templates'),

      /*--- Interface ---*/
      components: path.resolve(__dirname, '../src/interface/components'),
      library: path.resolve(__dirname, '../src/interface/components/library'),
      providers: path.resolve(__dirname, '../src/interface/components/providers'),
      atomic: path.resolve(__dirname, '../src/interface/components/atomic'),
      blocks: path.resolve(__dirname, '../src/interface/components/blocks'),
      quarks: path.resolve(__dirname, '../src/interface/components/atomic/quarks'),
      particles: path.resolve(__dirname, '../src/interface/components/atomic/particles'),
      atoms: path.resolve(__dirname, '../src/interface/components/atomic/atoms'),
      molecules: path.resolve(__dirname, '../src/interface/components/atomic/molecules'),
      organisms: path.resolve(__dirname, '../src/interface/components/atomic/organisms'),
      fusion: path.resolve(__dirname, '../src/interface/components/fusion'),
      sentience: path.resolve(__dirname, '../src/interface/components/sentience'),

      /*--- Factory ---*/
      factory: path.resolve(__dirname, '../src/interface/factory'),
      workshop: path.resolve(__dirname, '../src/interface/workshop'),
      pages: path.resolve(__dirname, '../src/interface/workshop/pages'),
    
      /*--- Store ---*/
      store: path.resolve(__dirname, '../src/interface/store'),
      apollo: path.resolve(__dirname, '../src/store/apollo'),
      apolloQuery: path.resolve(__dirname, '../src/store/apollo/query'),

      /*--- Theme ---*/
      theme: path.resolve(__dirname, '../src/interface/theme'),
      layout: path.resolve(__dirname, '../src/interface/theme/layout'),

      /*--- Logic ---*/
      logic: path.resolve(__dirname, '../src/logic'),
      services: path.resolve(__dirname, '../src/logic/services'),

      /*--- Secrets ---*/
      secrets: path.resolve(__dirname, '../src/secrets'),

      'react-native': 'react-native-web',
      'mapbox-gl$': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    }
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        include: path.resolve(__dirname, '../')
      },
      
      {
        test: /\.scss$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        include: path.resolve(__dirname, '../')
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
      },
    ],
  },
};
