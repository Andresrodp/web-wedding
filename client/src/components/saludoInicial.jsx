
const SaludoInicial = ({ nombre, apellido, acompanantes }) => {
  return (
    <div className="w-full flex flex-col items-center p-2 bg-none shadow-sm shadow-quaternary bg-opacity-50 rounded-md">
      <h1 className="text-quinary text-lg font-bold font-serif m-4">{nombre} {apellido}</h1>
      <h3 className="text-quinary text-lg font-medium font-serif m-4">Tenemos el gusto de invitarte a nuestra boda...</h3>
      {acompanantes?.length > 0 && <h1 className="text-quinary text-base font-semibold font-serif mb-3">Junto con tus acompañantes:</h1>}
      {acompanantes?.length > 0 && acompanantes.map((acompanante, index) => {
        return (
          <p key={index} className="text-quinary text-base font-serif">{acompanante}</p>
        )
      })}
      <br />
      <p className="text-quinary text-base text-justify px-4 font-serif">
        Una historia de amor en la cual, a lo largo de 16 años, hemos visto la fidelidad de Dios en cada momento y podemos dar testimonio de que su tiempo es perfecto. Acompañanos a dar el paso a la etapa más feliz de nuestras vidas.
      </p>
      <br />
      <p className="text-quinary text-base text-justify px-4 font-serif mb-0 italic">
        Toda buena dadiva y todo don perfecto desciende de lo alto, donde está el Padre que creó las lumbres celestes, y que no cambia como los astros ni se mueve como las sombras.
      </p>
      <p className="flex self-end text-quinary font-serif ml-3 mr-3 italic">Santiago 1:17</p>
    </div>
  )
};

export default SaludoInicial;