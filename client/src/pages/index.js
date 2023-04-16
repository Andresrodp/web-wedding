import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = e.target[0].value
    router.push(`/content/${code}`)
  }
  return (
    <div className="flex flex-col w-full py-6 items-center bg-gradient-to-tr from-slate-100 to-slate-600 h-screen bg-zinc-100 font-serif">
      <h1 className="text-blue-900 text-xl font-medium">Home</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-4/5 p-4 items-center rounded-md shadow-lg bg-slate-400 shadow-slate-500">
        <input className="rounded-md w-4/5 text-slate-950 " type="text" />
        <button className="my-3 w-2/5 px-2 py-4 bg-gradient-to-r from-slate-500 to-slate-900 rounded-lg shadow-md shadow-stone-700/50 hover:bg-stone-200 transition active:translate-y-1" type="submit">Ingresar</button>
      </form>
    </div>
  )
}
