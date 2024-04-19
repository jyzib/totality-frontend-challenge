import Image from "next/image";

import Card from "./components/Card";
import {getproperty} from '../_actions/propertyaction.js';
export default async function Home() {

 const res = await getproperty()
 console.log(res?.msg)
  return (
<>
 {res?.msg.map((e,i)=>{
  return (
<Card key={i} title={e.title} />
  )

 })}
</>
  );
}
