import { useRouter } from "next/router"

const content = () => {
  const router = useRouter()
  const { id } = router.query
  const handleClick = () => {
    router.push("/")
  }
  return (
    <div>
      <h1>{id}</h1>
      <button onClick={handleClick}>Inicio</button>
    </div>
  )
}

export default content
