import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql"

// id firstname lastname email username password
export const UserType = new GraphQLObjectType({
  name: "User",
  description:"User type",
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email:{  type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

