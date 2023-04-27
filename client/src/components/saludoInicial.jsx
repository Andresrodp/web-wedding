
const SaludoInicial = ({ nombre, acompanante }) => {
  return (
    <div className="w-full h-96 flex flex-col items-center p-2 bg-secondary bg-opacity-50 rounded-md">
      <h1 className="text-quinary text-lg font-bold font-serif m-4">Hola {nombre} y {acompanante}</h1>
      <p className="text-quinary text-base text-justify px-4 font-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis enim doloremque ipsam in velit quo earum incidunt ullam ad, eos, necessitatibus non adipisci. Distinctio labore ratione delectus debitis tempore.
      </p>
      <br />
      <p className="text-quinary text-base text-justify px-4 font-serif">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptatem debitis ab repudiandae voluptas corrupti eius nobis unde, praesentium accusamus dolore sequi et maiores obcaecati aliquam vero. Deleniti, officiis nesciunt?
      </p>
    </div>
  )
};

export default SaludoInicial;