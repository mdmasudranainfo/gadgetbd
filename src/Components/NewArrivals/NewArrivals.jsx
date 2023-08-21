/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import tab from '../../assets/image/tabArrivals.png'

const NewArrivals = ({ title }) => {
  return (
    <div className="container mx-auto lg:px-0 px-4 mt-[90px]">
      <h1 className="text-[35px] font-bold mt-[100px] mb-[30px] text-center">
        {title}
      </h1>

      {/*  */}
      <div className="grid lg:grid-cols-2">
        <div className="">
          <div className="  border-black rounded-lg border-2 inline-block p-5">
            <img src={tab} alt="" />
            <h1 className="text-center text-[30px]">New Product</h1>
          </div>

          {/* list */}
          <div className="mt-[60px]">
            <ul className="list-disc">
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
            </ul>
          </div>

          <div className="mt-14 flex flex-col md:flex-row justify-between">
            <div className="">
              <h2 className="text-[30px] font-bold">Use Case</h2>
              <ul className="">
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
              </ul>
              <div className="mt-14">
                <h2 className="text-[30px] font-bold">Charging Time</h2>
                <ul className="">
                  <li className="text-[22px] mb-1">
                    Track all your vehicle's location
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="text-[30px] font-bold">Use Value</h2>
              <ul className="">
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" md:pl-6 ">
          <h1 className="md:text-[75px] text-3xl font-bold mb-5">
            New Product
          </h1>
          <h2 className="md:text-[43px] text-2xl mt-10 text-[#7D7171]">
            Vehicle Tracking Platform
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <img className="w-full" src={tab} alt="" />
            <img className="w-full" src={tab} alt="" />
          </div>
          <div className="mt-[27px]">
            <img className="w-full" src={tab} alt="" />
          </div>
        </div>
      </div>

      {/*  */}

      <h1 className="text-[35px] mt-[100px] mb-12 text-center font-bold">
        Coming .....
      </h1>
      <div className="grid lg:grid-cols-2">
        <div className="order-last">
          <div className="  border-black rounded-lg border-2 inline-block p-5">
            <img src={tab} alt="" />
            <h1 className="text-center text-[30px]">New Product</h1>
          </div>

          {/* list */}
          <div className="mt-[60px]">
            <ul className="list-disc">
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
              <li className="text-[22px] mb-1">
                Track all your vehicle's location
              </li>
            </ul>
          </div>

          <div className="mt-14 flex flex-col md:flex-row justify-between">
            <div className="">
              <h2 className="text-[30px] font-bold">Use Case</h2>
              <ul className="">
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
              </ul>
              <div className="mt-14">
                <h2 className="text-[30px] font-bold">Charging Time</h2>
                <ul className="">
                  <li className="text-[22px] mb-1">
                    Track all your vehicle's location
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h2 className="text-[30px] font-bold">Use Value</h2>
              <ul className="">
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
                <li className="text-[22px] mb-1">
                  Track all your vehicle's location
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" md:pr-10 ">
          <h1 className="md:text-[75px] text-3xl font-bold mb-5">
            New Product
          </h1>
          <h2 className="md:text-[43px] text-2xl mt-10 text-[#7D7171]">
            Vehicle Tracking Platform
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <img className="w-full" src={tab} alt="" />
            <img className="w-full" src={tab} alt="" />
          </div>
          <div className="mt-[27px]">
            <img className="w-full" src={tab} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals
