import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.API_URL as string
const graphQLClient = new GraphQLClient(endpoint)

export default graphQLClient
