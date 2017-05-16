var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source

  entry: {
    app: './app.js',
  },

  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: 'bundle.js'
  },

  //To run development server
  devServer: {
    contentBase: __dirname + '/src',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/, // Check for all fonts and images
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },

  devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = ""; // No sourcemap for production

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
