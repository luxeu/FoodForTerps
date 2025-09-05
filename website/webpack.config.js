const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  // ... other webpack config settings
  plugins: [
    new webpack.DefinePlugin({
      'process.env.MY_API_KEY': JSON.stringify(process.env.MY_API_KEY),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      // Add any other environment variables you need
    }),
  ],
};