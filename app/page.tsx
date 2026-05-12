import { getArt } from "@/API/fetch";
import Image from "next/image";

export default function Home() {

  const data = getArt('Noche Estrellada')

  return (
   <div>
    <p>{JSON.stringify(data)}</p>
   </div>
  );
}
