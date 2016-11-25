module.exports = {
  entry: './main.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/, loader: "awesome-typescript-loader",
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".ts"],
    modules: [
      "node_modules"
    ]
  }
}