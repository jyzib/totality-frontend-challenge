
import { currentUser } from "@clerk/nextjs";
import {getproperty} from '../../../_actions/propertyaction';
export async function GET() {
    const response = await getproperty()
    console.log(response)
   return Response.json({data:response})
  }