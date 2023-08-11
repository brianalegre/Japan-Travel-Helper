const db = require("./connection");
const { ModelNames } = require("../models");
const moment = require("moment");
const currentDate = moment(Date.now()).format("ll");

db.once("open", async () => {




  // LOG TO BACKEND CONSOLE
  console.log("*** SUCCESSFULLY SEEDED ***");



  process.exit();
});
