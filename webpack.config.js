module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
