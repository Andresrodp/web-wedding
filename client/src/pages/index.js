import { useRouter } from 'next/router'
import portada from '../../assets/images/portada.jpg'
export default function Home() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = e.target[0].value
    router.push(`/content/${code}`)
  }
  return (
    <div className="flex flex-col w-full justify-center bg-secondary bg-cover py-6 items-center h-screen font-serif">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-4/5 p-4 gap-5 items-center rounded-md shadow-lg bg-primary">
        <label className="text-xl text-quinary font-bold ">Home</label>
        <input className="rounded-md w-4/5 text-quinary" type="text" />
        <button className="my-3 w-2/5 px-2 py-4 rounded-lg shadow-md bg-quaternary transition active:translate-y-1" type="submit">Ingresar</button>
      </form>
    </div>
  )
}
