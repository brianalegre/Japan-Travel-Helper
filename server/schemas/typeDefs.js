const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    # type Auth {
    #     token: ID!
    #     user: User
    # }

    type Currency {
        _id: ID
        yen: Number
        usd: Number
        date: String
    }

    type Flight {
        _id: ID
        flightNumber: String
        airline: String
        departureLocation: String
        arrivalLocation: String
        dateDepature: String
        dateArrival: String
        timeDeparture: String
        price: Number
        returnDate: String
        returnFlightTime: String
        returnFlightAirline: String
        returnFlightNumber: String
    }

    type Query {
        # USER
        me(_id: ID!): User
        users: [User]

        # CURRENCY
        currency(_id: ID!): Currency
        currencies: [Currency]

        # FLIGHT
        flight(_id: ID!): Flight
        flights: [Flight]
    }

    type Mutation {
        # USER
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        editUser(_id: ID!, firstName: String, lastName: String, email: String, password: String): User
        deleteUser(_id: ID!): User
        login(email: String!, password: String!): User

        # CURRENCY
        addCurrency(yen: Number!, usd: Number!, date: String!): Currency
        editCurrency(_id: ID!, yen: Number, usd: Number, date: String): Currency
        deleteCurrency(_id: ID!): Currency

        # FLIGHT
        addFlight(flightNumber: String!, airline: String!, departureLocation: String!, arrivalLocation: String!, dateDepature: String!, dateArrival: String!, timeDeparture: String!, price: Number!, returnDate: String!, returnFlightTime: String!, returnFlightAirline: String!, returnFlightNumber: String!): Flight
        editFlight(_id: ID!, flightNumber: String, airline: String, departureLocation: String, arrivalLocation: String, dateDepature: String, dateArrival: String, timeDeparture: String, price: Number, returnDate: String, returnFlightTime: String, returnFlightAirline: String, returnFlightNumber: String): Flight
        deleteFlight(_id: ID!): Flight
    }
`;

module.exports = typeDefs;