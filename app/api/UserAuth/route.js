
import { currentUser } from "@clerk/nextjs";
import {getproperty} from '../../../_actions/propertyaction';
export async function GET() {
   const user =await currentUser()
  
   return Response.json({user})
  }