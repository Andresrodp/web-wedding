import svg from '../../assets/salto.svg';
import Image from 'next/image';

const SaltoLinea = () => {
  return (
    <>
      <Image src={svg} alt="salto de linea" className="object-cover w-3/5 h-12" />
    </>
  )
};

export default SaltoLinea;