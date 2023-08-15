// Import Models
const {
  User,
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
    users: async () => {
      return await User.find();
    },
    // Get single user by ID
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
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

  },
};

module.exports = resolvers;
