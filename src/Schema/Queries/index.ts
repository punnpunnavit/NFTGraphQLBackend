import { UserType } from "./../Types/UserType";
import { GraphQLList } from "graphql";
import { User } from "../../Models";

export const users = {
  type: new GraphQLList(UserType),
  resolve(parent:any, args:any) {
    return User.find();
  },
};
