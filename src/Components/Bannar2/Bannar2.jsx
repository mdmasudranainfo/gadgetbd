import './Bannar2.css'

import bannar from '../../assets/image/bannar2Bg.png'
const Bannar2 = () => {
  return (
    <div className="container mx-auto  relative">
      <img className="w-full" src={bannar} alt="" />

      <div className="md:pl-[133px] pl-5 flex flex-col justify-center absolute w-full h-full top-0 left-0">
        <h1 className="md:text-[103px] text-3xl  text-[#FF9D1E] md:mb-[50px] font-bold">
          GadgetBD
        </h1>
        <p className="text-[#43B169] font-bold md:text-md text-sm">
          Gadget and Gear is an Apple Authorized Reseller in Bangladesh <br />{' '}
          and the only multi branded retail chain outlets of Mobile & <br />{' '}
          Branded Premium Accessories in BD.{' '}
        </p>
      </div>
    </div>
  )
}

export default Bannar2
