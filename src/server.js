import "./env";
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJWT } from "./passport";
import { isAuthenticated } from "./middlewares";


const PORT = process.env.PORT || 4000;


const server = new GraphQLServer({schema, context:({request}) => ({request, isAuthenticated})});

server.express.use(logger("dev"));
server.express.use(authenticateJWT);

server.start({ port : PORT}, () => console.log(`Server running on port http://localhost:${PORT}`))