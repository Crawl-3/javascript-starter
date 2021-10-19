const { config } = require("dotenv");
const { join } = require("path");

config({ path: join(process.cwd(), ".env") });
