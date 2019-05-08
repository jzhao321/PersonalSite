module.exports = (env, argv) => {
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV === "production"){
        return require("./webpack/webpack.production.config.js");
    }
    else{
        return require("./webpack/webpack.development.config.js");
    }
}