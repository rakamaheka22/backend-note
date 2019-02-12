import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./api/typeMerger";
import resolvers from "./api/resolverMerger";

import { CONFIGURATION } from "./config/env";

const graphQLServer = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

mongoose
  .connect(
    CONFIGURATION.DB,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

graphQLServer.use(cors());

graphQLServer.use('/graphql', 
    bodyParser.json(),
    graphqlExpress({ schema }));

graphQLServer.use('/graphiql',
    graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(CONFIGURATION.PORT, () => console.log(
    `GRAPHQL API berjalan di http://localhost:${CONFIGURATION.PORT}/graphiql`
));