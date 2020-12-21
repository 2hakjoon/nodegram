
import {prisma} from "../../../../generated/prisma-client";
import { generateToken } from "../../../utlis";

export default {
    Mutation:{
        confirmSecret: async(_, args)=> {
            const {email, secret} = args;
            const user = await prisma.user({email});
            if(user.loginSecret === secret){
                return generateToken(user.id);
            }
            else {
                throw Error("Wrong email/secret convination")
            }
        }
    }
}