import {prisma} from "../../../../generated/prisma-client"
export default{
    Query:{
        userById: async(_,agrs) =>{
            const{id} = args;
            return await prisma.user({id});
        }
    }
}