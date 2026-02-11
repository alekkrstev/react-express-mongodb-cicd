const env = process.env.NODE_ENV || "development";

// Only load config.json if environment variables are not already set
if (env === "development" || env === "test") {
  const config = require("./config.json");
  const envConfig = config[env];
  console.log(envConfig);
  
  // Only set if not already defined (prioritize environment variables)
  Object.keys(envConfig).forEach((key) => {
    if (!process.env[key]) {
      process.env[key] = envConfig[key];
    }
  });
}

// Log the actual values being used
console.log({
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI
});