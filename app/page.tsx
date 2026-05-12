import { getArt } from "@/API/fetch";
import Image from "next/image";

export default function Home() {

  const data = getArt('Noche Estrellada')

  return (
   <div>
    <h1>Prueba</h1>
    <p>{data}</p>
   </div>
  );
}
