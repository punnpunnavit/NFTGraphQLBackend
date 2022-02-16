import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import dotenv from 'dotenv';
import {connectDB} from './DB';
import schema from "./Schema";
import {createJWTToken} from './Utils/auth'
import {authenticate} from './Middleware/auth'

dotenv.config();
connectDB();
const app = express();
app.use(authenticate)
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
res.json("Welcome")
})

app.get("/authtest",(req,res)=>{
 res.json(createJWTToken({firstname:'hey',lastname:'hi',email:'hey@gmail.com',username:"122",password:'wihd'})
//  id firstname lastname email username password
 )
})

app.use("/graphql",graphqlHTTP({
  schema:schema,
  graphiql:true
}))

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
});

