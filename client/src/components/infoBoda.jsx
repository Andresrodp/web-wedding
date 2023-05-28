import { CiLocationOn } from "react-icons/ci";

const InfoBoda = () => {
  return (
    <section className="flex flex-col w-full items-center rounded-md shadow-sm shadow-quaternary px-2 py-6 text-quinary font-serif">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Ceremonia Cristiana</h1>
        <h3>12 de Agosto</h3>
        <p>Hora: 5:30 PM</p>
        <p>capilla del Museo del Chicó</p>
        <div className="flex flex-row justify-center items-center gap-1">
          <CiLocationOn /><p>Bogotá, Carrera 7 #93-01</p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Recepcion</h1>
        <h3>12 de Agosto</h3>
        <p>Hora: 8:00 PM</p>
        <p>Castillo del Mono Osorio</p>
        <div className="flex flex-row justify-center items-center gap-1">
          <CiLocationOn /><p>Bogotá, Carrera 3 #74-00</p>
        </div>
      </div>
      <br />
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">Código de Vestuario</h1>
        <p>Traje de Gala</p>
        <h4 className="font-semibold">Colores reversados: </h4>
        <p>Blanco y Azul</p>
      </div>

    </section>
  )
};

export default InfoBoda;