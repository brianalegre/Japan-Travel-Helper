const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const dotenv = require('dotenv');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// External API Calls
const getCurrency = require('./externalAPI/getCurrency')
const getWeather = require('./externalAPI/getWeather')

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  // app.use(express.static('client/build'))
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// Call the function to getCurrency
async function japanCurrency() {
  const currencyResult = await getCurrency();
  console.log(currencyResult);
}

// Call the function to getCurrency
async function japanWeather() {
  const weatherResult = await getWeather();
  console.log(weatherResult);
}

// japanCurrency();
japanWeather();
