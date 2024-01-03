import axios from "axios";
import { buffer } from "micro";
import { useSession } from 'next-auth/react';



export default async function handler(req,res)  {
    if(req.method === "POST"){
    

        console.log('yep')
           return true
       
    }
}

export const config = {
    api: {
        bodyParser: false
    }
}