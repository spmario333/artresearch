// import { getArt } from "@/API/fetch";
import { ArtsCards } from "@/components/ArtsCards";
import Image from "next/image";

export default async function Home() {

  // const data = await getArt('Noche Estrellada')
  // console.log(data)

  return (
    <div>
      <ArtsCards/>
    </div>
  );
}
