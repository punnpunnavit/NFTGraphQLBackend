import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import dotenv from 'dotenv';
import {connectDB} from './DB';

const main = async () => {
  dotenv.config();
  connectDB();


  const app = express();
  app.use(cors());
  app.use(express.json());
 

  app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});