import axios from "axios";
import { buffer } from "micro";





export default async function handler(req,res)  {
    if(req.method === "POST"){
       console.log("webhook")
     return {tt:"test"}
    }
}

export const config = {
    api: {
        bodyParser: false
    }
}