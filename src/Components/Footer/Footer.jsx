import skype from '../../assets/image/skype.png'
import logo from '../../assets/image/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#54426B] container mx-auto text-white px-8 mt-8">
      <h1 className="py-14 text-[40px] text-center">Let’s Connect</h1>

      <div className="flex justify-center">
        <div className="">
          <input
            className=" md:w-[500px] w-full  bg-transparent outline-none border-2 rounded-2xl py-3 pl-5 mb-5 md:text-[27px] text-lg block"
            type="text"
            placeholder="Your email address "
          />
          <input
            className=" md:w-[500px] w-full  bg-transparent outline-none border-2 rounded-2xl py-3 pb-12 pl-5 mb-5 md:text-[27px] text-lg block"
            type="text"
            placeholder="Describe your queries ... "
          />
          <div className="flex justify-center md:mt-10 mt-5">
            <button className="md:text-[30px] text-lg bg-[#069938] p-4 border-2 rounded-md border-white">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col items-center justify-between md:mt-[-120px] mt-5">
        <div className="">
          <h1 className="text-[30px] mb-2 md:text-left text-center">Contact</h1>
          <div className="flex gap-2">
            <div className="bg-[#62B5E4] inline-block p-2 rounded-md">
              <img src={skype} alt="" />
            </div>
            <div className="bg-[#BEB70C] inline-block p-2 rounded-md">
              <img src={skype} alt="" />
            </div>
            <div className="bg-[#FF3D3D] inline-block p-2 rounded-md">
              <img src={skype} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-[30px] mb-2 md:text-left text-center">
            Social Link
          </h1>
          <div className="flex gap-2">
            <div className="bg-[#62B5E4] inline-block p-2 rounded-md">
              <img src={skype} alt="" />
            </div>
            <div className="bg-[#BEB70C] inline-block p-2 rounded-md">
              <img src={skype} alt="" />
            </div>
            <div className="bg-[#FF3D3D] inline-block p-2 rounded-md">
              <img src={skype} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-7 flex md:flex-row flex-col items-center justify-center md:gap-[55px] gap-2">
        <p className="text-[26px] font-bold">SERVICES</p>
        <p className="text-[26px] font-bold">SERVICES</p>
        <p className="text-[26px] font-bold">SERVICES</p>
        <p className="text-[26px] font-bold">SERVICES</p>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center mt-9 pb-8">
        <p>@ 2023, GadgetBD, All right reserved.</p>
        <img src={logo} alt="" />
        <p>
          <span>Privacy</span> | <span>Terms & Conditions</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
