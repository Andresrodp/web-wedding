import { useRouter } from "next/router"

const content = () => {
  const router = useRouter()
  const { id } = router.query
  const handleClick = () => {
    router.push("/")
  }
  return (
    <div className="bg-slate-400 flex flex-col items-center p-5 w-full h-screen gap-4">
      <h1 className="font-serif text-xl">Andrés & Julieth</h1>
      <div className="snap-mandatory snap-x h-2/6 w-full flex items-center justify-start gap-1 overflow-scroll">
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md" src="https://static.nationalgeographic.es/files/styles/image_3200/public/panda%2001.webp?w=710&h=1065" alt="" />
        </div>
        <div className="w-4/5 h-full shrink-0 snap-center bg-cover rounded-md">
          <img className="aspect-video object-cover rounded-md" src="https://static.nationalgeographic.es/files/styles/image_3200/public/Panda%2002.webp?w=1190&h=792&q=100" alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md" src="https://static.nationalgeographic.es/files/styles/image_3200/public/panda%2001.webp?w=710&h=1065" alt="" />
        </div>
        <div className="bg-cover w-4/5 h-full shrink-0 snap-center rounded-md">
          <img className="aspect-video object-cover rounded-md" src="https://static.nationalgeographic.es/files/styles/image_3200/public/Panda%2002.webp?w=1190&h=792&q=100" alt="" />
        </div>
      </div>
      <button onClick={handleClick}>Inicio</button>
    </div>
  )
}

export default content
