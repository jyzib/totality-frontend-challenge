
import { currentUser } from "@clerk/nextjs";
import {getproperty} from '../../../_actions/propertyaction';
export async function GET() {
    const response = await getproperty()
   
   return Response.json(response)
  }