import { useRouter } from "next/router";
import Image from "next/image";
import img from "../../../../assets/titulo.png";
import SaltoLinea from "@/components/saltoLinea.jsx";
import SaludoInicial from "@/components/saludoInicial";
const content = () => {
  const router = useRouter()
  const { id } = router.query
  const handleClick = () => {
    router.push("/")
  }
  return (
    <div className="bg-primary flex flex-col items-center h-auto p-5 w-full gap-3">
      <div className="h-24 w-full">
        <Image src={img} className="h-full w-full object-cover" alt="titulo" />
      </div>
      <div className="snap-mandatory snap-x h-2/6 w-full flex items-center justify-start gap-1 overflow-scroll xl:flex xl:h-4/5 xl:w-full xl:gap-2 xl:overflow-scroll xl:items-start">
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md xl:w-4/5 xl:h-3/5 xl:aspect-video">
          <img className="aspect-video object-cover rounded-md xl:object-cover xl:aspect-video " src="https://static.nationalgeographic.es/files/styles/image_3200/public/panda%2001.webp?w=710&h=1065" alt="" />
        </div>
        <div className="w-4/5 h-full shrink-0 snap-center bg-cover rounded-md">
          <img className="aspect-video object-cover rounded-md xl:aspect-video" src="https://static.nationalgeographic.es/files/styles/image_3200/public/Panda%2002.webp?w=1190&h=792&q=100" alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md xl:aspect-video" src="https://static.nationalgeographic.es/files/styles/image_3200/public/panda%2001.webp?w=710&h=1065" alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md xl:aspect-video" src="https://static.nationalgeographic.es/files/styles/image_3200/public/Panda%2002.webp?w=1190&h=792&q=100" alt="" />
        </div>
      </div>
      <SaltoLinea />
      <SaludoInicial nombre="Panda" acompanante="Panda" />
      <SaltoLinea />
      <iframe className="rounded-md " width="90%" height="240vh" src="https://www.youtube.com/embed/HdyJwSxWUFg" title="YouTube video player" frameBorder="0" ></iframe>
      <SaltoLinea />
      <SaludoInicial nombre="Información" acompanante="Boda" />
      <SaltoLinea />
      <SaludoInicial nombre="Regalos" acompanante="Sugerencia" />
      <button className="rounded-sm bg-tertiary shadow-tertiary px-5 py-3 items-center" onClick={handleClick}>Inicio</button>
    </div>
  )
}

export default content
