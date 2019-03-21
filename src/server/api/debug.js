import express from "express";
import expressGQL from "express-graphql";
import { buildSchema } from "graphql"

const router = express.Router();

const schema = buildSchema(`
    type Query{
        hello(message: String!): String
    }  
`)

const root = {
    hello: ({message}) => {
        return message;
    }
}


router.use("/graphql", expressGQL({
    schema,
    rootValue: root,
    graphiql: true,
}))

export default router;