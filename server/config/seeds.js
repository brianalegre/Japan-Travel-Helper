const db = require("./connection");
const { NormalUser, Currency, Flight } = require("../models");
const moment = require("moment");
const currentDate = moment(Date.now()).format("ll");

db.once("open", async () => {
  // USERS
  // Delete all users
  await NormalUser.deleteMany();
  console.log("*** DELETED ALL USERS ***");

  // Create users
  const userOne = await NormalUser.create({
    firstName: "Brian",
    lastName: "Hart",
    email: "test1@gmail.com",
    password: "test1234"
  })

  const userTwo = await NormalUser.create({
    firstName: "John",
    lastName: "Doe",
    email: "test2@gmail.com",
    password: "test1234"
  })

  // Log to backend console
  console.log("*** SUCCESSFULLY SEEDED USERS ***");


  // CURRENCIES
  // Delete all currencies
  await Currency.deleteMany();
  console.log("*** DELETED ALL CURRENCIES ***");

  // Create currencies
  const currencyOne = await Currency.create({
    yen: "100",
    usd: "1",
    date: currentDate
  })

  // Log to backend console
  console.log("*** SUCCESSFULLY SEEDED CURRENCIES ***");


  // FLIGHTS
  // Delete all flights
  await Flight.deleteMany();
  console.log("*** DELETED ALL FLIGHTS ***");

  // Create flights
  const flightOne = await Flight.create({
    flightNumber: "AA123",
    airline: "ANA",
    departureLocation: "LAX",
    arrivalLocation: "HND",
    dateDepature: "2021-01-01",
    dateArrival: "2021-01-02",
    timeDeparture: "12:00",
    price: "1000",
    returnDate: "2021-01-03",
    returnFlightTime: "12:00",
    returnFlightAirline: "ANA",
    returnFlightNumber: "AA123",
  })

  // Log to backend console
  console.log("*** SUCCESSFULLY SEEDED FLIGHTS ***");

  // Log to backend console
  console.log("*** SUCCESSFULLY SEEDED ***");


  process.exit();
});
