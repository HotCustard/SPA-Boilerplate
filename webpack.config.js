module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
