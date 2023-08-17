// Import Models
const {
  NormalUser,
  Currency,
  Flight,
} = require("../models");

const { signToken, removeNullishFields } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const { isObjectIdOrHexString, trusted } = require("mongoose");

const resolvers = {
  Query: {

    // USERS
    // Get all users
    normalUsers: async () => {
      return await NormalUser.find();
    },
    // Get single user by ID
    normalUser: async (parent, { userId }) => {
      return NormalUser.findOne({ _id: userId });
    },

    // CURRENCY
    // Get all currencies
    currencys: async () => {
      return await Currency.find();
    },
    // Get single currency by ID
    currency: async (parent, { currencyId }) => {
      return Currency.findOne({ _id: currencyId });
    },

    // FLIGHTS
    // Get all flights
    flights: async () => {
      return await Flight.find();
    },
    // Get single flight by ID
    flight: async (parent, { flightId }) => {
      return Flight.findOne({ _id: flightId })
    }
  },

  Mutation: {
    // USERS
    // Create a new user
    normalUser: async (
      parent,
      { firstName, lastName, email, password }
    ) => {
      const user = await NormalUser.create({
        firstName,
        lastName,
        email,
        password,
      });
      return user;
    },
    // Edit user
    editNormalUser: async (
      parent,
      { userId, ...userInfo }
    ) => {
      const cleanedInfo = removeNullishFields(userInfo);
      const user = await NormalUser.findByIdAndUpdate(
        userId,
        { $set: cleanedInfo },
        { new: true }
      );
      return user;
    },

    // CURRENCY
    // Create a new currency
    addCurrency: async (
      parent,
      { yen, usd, date }
    ) => {
      const currency = await Currency.create({
        yen,
        usd,
        date,
      });
      return currency;
    },

    // FLIGHTS
    // Create a new flight
    addFlight: async (
      parent,
      { flightNumber, airline, departureLocation, arrivalLocation, dateDepature, dateArrival, timeDepart, price, returnDate, returnFlightTime, returnFlightAirline }
    ) => {
      const flight = await Flight.create({
        flightNumber,
        airline,
        departureLocation,
        arrivalLocation,
        dateDepature,
        dateArrival,
        timeDepart,
        price,
        returnDate,
        returnFlightTime,
        returnFlightAirline,
      });
      return flight;
    }
  },
}


// Export
module.exports = resolvers;
