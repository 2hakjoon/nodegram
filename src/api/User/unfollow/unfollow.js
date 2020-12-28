import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares"

export default{
    Mutation:{
        unfollow: async (_,args,{request}) => {
            isAuthenticated(request);
            const {user}= request;
            const {id} = args;
            try{
                await prisma.updateUser({
                    where:{id : user.id},
                    data:{
                        following:{
                            disconnect:{
                                id
                            }
                        }
                    }
                });
                return true;
            }
            catch{
                return false;
            }
        }
    }
}