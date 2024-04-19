import Image from "next/image";

import Card from "./components/Card";
import {getproperty} from '../_actions/propertyaction.js';
import HeroSection from "./components/HeroSection";
export default async function Home() {

 const res = await getproperty()
 console.log(res?.msg)
  return (
<>
<HeroSection/>
 {res?.msg.map((e,i)=>{
  return (
<Card key={i} title={e.title} />
  )

 })}

 
</>

  );
}
