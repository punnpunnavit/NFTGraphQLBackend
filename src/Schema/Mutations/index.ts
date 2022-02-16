import { createJWTToken } from "./../../Utils/auth";
import {} from "../Types/UserType";
import { User } from "../../Models";
import { GraphQLString } from "graphql";

export const register = {
  type: GraphQLString,
  args: {
    // id firstname lastname email username password
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { firstname, lastname, email, username, password } = args;
    const user = new User({ firstname, lastname, email, username, password });
    await user.save();
    const token = createJWTToken(user);
    return token;
  },
};

export const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const user: any = await User.findOne({ email: args.email }).select("+password")
    if (!user || args.password !== user.password) {
      throw new Error("Invalid Credentials");
    }

    const token = createJWTToken(user)
    return token
  },
};
