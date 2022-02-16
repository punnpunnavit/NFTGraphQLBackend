import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import dotenv from 'dotenv';
import {connectDB} from './DB';
import schema from "./Schema";


dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
res.json("Welcome")
})

app.use("/graphql",graphqlHTTP({
  schema:schema,
  graphiql:true
}))

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});

