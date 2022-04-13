module.exports = {
  apps: [
    {
      script: "app.js",
      name: "express-shop-api",
      node_args: "-r dotenv/config"
    }
  ]
}
