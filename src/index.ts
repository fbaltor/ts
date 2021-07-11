import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const PORT = 4000;

const schema = buildSchema(`
                          type Query {
                            hello: String
                          }
                          `);

const root = {
  hello: () => 'Hello World!',
};

const app = express.default();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`GraphQL server listening on port ${PORT}!`)
);
