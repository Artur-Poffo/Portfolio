import { GraphQLClient } from "graphql-request";

const GRAPHQL_ENDPOINT =
  process.env.CMS_URL || "https://jsonplaceholder.ir/graphql";

export const hygraph = new GraphQLClient(GRAPHQL_ENDPOINT)
