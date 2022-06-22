const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const nebla = express();

// Connection to DB
connectDB();

nebla.use(cors());

nebla.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development'
    }))

nebla.listen(port, console.log(`Server running on port ${port}`));

