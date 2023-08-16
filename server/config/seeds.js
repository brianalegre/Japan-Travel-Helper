const db = require("./connection");
const { User, Currency, Flight } = require("../models");
const moment = require("moment");
const currentDate = moment(Date.now()).format("ll");

db.once("open", async () => {
  // USERS
  // Delete all users
  await User.deleteMany();

  // Log to backend console
  console.log("*** DELETED ALL USERS ***");

  // Create users
  const userOne = await User.create({
    firstName: "Brian",
    lastName: "Hart",
    email: "test1@gmail.com",
    password: "test1234"
  })

  const userTwo = await User.create({
    firstName: "John",
    lastName: "Doe",
    email: "test2@gmail.com",
    password: "test1234"
  })

  // Log to backend console
  console.log("*** SUCCESSFULLY SEEDED USERS ***");

  // LOG TO BACKEND CONSOLE
  console.log("*** SUCCESSFULLY SEEDED ***");


  process.exit();
});
