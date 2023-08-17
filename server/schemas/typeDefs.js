const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type NormalUser {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }

    # type Auth {
    #     token: ID!
    #     user: NormalUser
    # }

    type Currency {
        _id: ID
        yen: String
        usd: String
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
        price: String
        returnDate: String
        returnFlightTime: String
        returnFlightAirline: String
        returnFlightNumber: String
    }

    type Query {
        # USER
        normalUser(_id: ID!): NormalUser
        normalUsers: [NormalUser]

        # CURRENCY
        currency(_id: ID!): Currency
        currencys: [Currency]

        # FLIGHT
        flight(_id: ID!): Flight
        flights: [Flight]
    }

    type Mutation {
        # USER
        addNormalUser(firstName: String!, lastName: String!, email: String!, password: String!): NormalUser
        editNormalUser(_id: ID!, firstName: String, lastName: String, email: String, password: String): NormalUser
        deleteNormalUser(_id: ID!): NormalUser
        loginNoramlUser(email: String!, password: String!): NormalUser

        # CURRENCY
        addCurrency(yen: String!, usd: String!, date: String!): Currency
        editCurrency(_id: ID!, yen: String, usd: String, date: String): Currency
        deleteCurrency(_id: ID!): Currency

        # FLIGHT
        addFlight(flightNumber: String!, airline: String!, departureLocation: String!, arrivalLocation: String!, dateDepature: String!, dateArrival: String!, timeDeparture: String!, price: String!, returnDate: String!, returnFlightTime: String!, returnFlightAirline: String!, returnFlightNumber: String!): Flight
        editFlight(_id: ID!, flightNumber: String, airline: String, departureLocation: String, arrivalLocation: String, dateDepature: String, dateArrival: String, timeDeparture: String, price: String, returnDate: String, returnFlightTime: String, returnFlightAirline: String, returnFlightNumber: String): Flight
        deleteFlight(_id: ID!): Flight
    }
`;

module.exports = typeDefs;