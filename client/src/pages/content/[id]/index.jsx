import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import img from "../../../../assets/titulo.png";
import SaltoLinea from "@/components/saltoLinea.jsx";
import SaludoInicial from "@/components/saludoInicial";
import InfoBoda from "@/components/infoBoda";
import Regalos from "@/components/regalos";
import Swal from "sweetalert2";

const content = () => {
  const router = useRouter()
  const { id } = router.query
  const [content, setContent] = useState({})

  useEffect(() => {
    axios.get(`https://api-boda.up.railway.app/api/invitados/${id}`).then((res) => {
      setContent(res.data)
    })
    console.log(router);
  }, [])
  const handleClick = () => {
    axios.get(`https://api-boda.up.railway.app/api/invitados/confirm/${content._id}`).then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Confirmación exitosa',
        text: res.data.message,
        confirmButtonText: 'Ok'
      }).then(() => {
        router.push('/confirmacion')
      })
    })
  }
  return (
    <div className="bg-primary flex flex-col items-center h-auto p-5 w-full gap-3">
      <div className="h-24 w-full">
        <Image src={img} className="h-full w-full object-cover" alt="titulo" />
      </div>
      <div className="snap-mandatory snap-x h-4/6 w-full flex items-center justify-start gap-1 overflow-scroll xl:flex xl:h-4/5 xl:w-full xl:gap-2 xl:overflow-scroll xl:items-start">
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md xl:w-4/5 xl:h-3/5 xl:aspect-video">
          <img className="aspect-video object-cover object-center rounded-md xl:aspect-video" src="https://res.cloudinary.com/do1akn4ua/image/upload/v1685804855/web-wedding/slider-1_n5nvoa.jpg" alt="" />
        </div>
        <div className="w-4/5 h-full shrink-0 snap-center bg-cover rounded-md">
          <img className="aspect-video object-cover object-top rounded-md xl:aspect-video" src='https://res.cloudinary.com/do1akn4ua/image/upload/v1685804874/web-wedding/slider-2_wcpycm.jpg' alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover object-top rounded-md xl:aspect-video" src='https://res.cloudinary.com/do1akn4ua/image/upload/v1685804874/web-wedding/slider-3_eywt7s.jpg' alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md xl:aspect-video" src='https://res.cloudinary.com/do1akn4ua/image/upload/v1685807116/web-wedding/slider-4_rje07w.jpg' alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md xl:aspect-video" src='https://res.cloudinary.com/do1akn4ua/image/upload/v1685804874/web-wedding/slider-5_maegen.jpg' alt="" />
        </div>
      </div>
      <SaltoLinea />
      <SaludoInicial nombre={content.nombre} apellido={content.apellido} acompanantes={content.acompanantes} />
      <SaltoLinea />
      <iframe className="rounded-md " width="90%" height="240vh" src="https://www.youtube.com/embed/l1cyuIR5PTc" title="YouTube video player" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media"></iframe>
      <SaltoLinea />
      <InfoBoda />
      <SaltoLinea />
      <Regalos />
      {content.confirmado ? <h1 className="text-quinary text-lg font-semibold font-serif mb-3">Ya confirmaste tu asistencia</h1> :
        <button className="rounded-sm bg-tertiary shadow-tertiary px-5 py-3 items-center" onClick={handleClick}>Confirmo Asistencia</button>}
    </div>
  )
}

export default content
