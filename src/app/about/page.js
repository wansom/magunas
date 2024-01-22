import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <section className="banner relative bg-center bg-cover min-h-[506px] w-full flex flex-col items-center justify-center gap-3 px-5 md:px-20">
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

                <h1 className="relative z-10 text-[24px] md:text-[40px] font-bold text-white uppercase text-center">
                    About Magunas Supermarket
                </h1>
                <p className="relative z-10  text-[16px] md:text-[24px] text-[#F1C82D] font-semibold text-center">Over 30 years of service to Kenyans</p>
                <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-10 justify-center">
                    <button className="relative text-white hover:border-white hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#F1C82D] hover:bg-transparent">Our History<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    </button>
                    <button className="relative text-white hover:border-white hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#6FBF42] hover:bg-transparent">Our History<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    </button>
                </div>

            </section>
            <section className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-12">
                <div className="space-y-4">
                    <h1 className="text-4xl text-[#F1C82D] uppercase">
                        Our Story</h1>
                        <p className="text-[18px]">
                        Trading under Maguna Andu Wholesalers, Wachira’s empire that transcends four counties has made him a household name in Mt Kenya region. He is a known philanthropist locally and has lived up to the letter and spirit of his business name - Maguna Andu - loosely translated as beneficial to the people. Wachira is an active member of the Catholic Church hence his popularity among the parishioners. His story is a classical example of grass to grace, having risen from a hawker to owning one of the successful business chains in the region.
                        </p>
                </div>
                <img
                  src="/home/offer.jpg"
                  alt="about us"
                  className="w-full rounded-lg"
                
                />


            </section>
            <section className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 py-12">
            <img
                  src="/home/offer.jpg"
                  alt="about us"
                  className="w-full rounded-lg"
                
                />
                <div className="space-y-4">

                    <h1 className="text-4xl text-[#F1C82D] uppercase">
                        Our Business</h1>
                        <p className="text-[18px]">
                        Trading under Maguna Andu Wholesalers, Wachira’s empire that transcends four counties has made him a household name in Mt Kenya region. He is a known philanthropist locally and has lived up to the letter and spirit of his business name - Maguna Andu - loosely translated as beneficial to the people. Wachira is an active member of the Catholic Church hence his popularity among the parishioners. His story is a classical example of grass to grace, having risen from a hawker to owning one of the successful business chains in the region.
                        </p>
                </div>
              


            </section>
            <section className="container mx-auto px-5 md:px-20 py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#F1C82D] rounded-lg p-4 space-y-5">
          <img className="rounded-lg w-full object-cover h-80" src="/about/wachira.jpg" />
          <h1 className="text-4xl">Our Leadership</h1>
          <p >Wachira runs the successful Magunas Supermarkets chain, which has been flexing muscles with other established stores such as Naivas, Quickmatt and Tuskys. Magunas has two branches each in Murang’a and Embu, a hyper store in Kirinyaga, a branch in Nyeri and another one in Nairobi’s Utawala estate. Apart from the supermarkets and the wholesale business, Wachira has diversified to the hospitality industry, running two high-class hotels - Hotel Nokras Murang’a and Nokras Riverine Hotel and Spa. Nokras Riverine, set on lush grounds overlooking the scenic Sagana River, is the latest entry into the scene, boosting the Mt Kenya tourism circuit.

          </p>


        </div>
        <div className="bg-[#6FBF42] rounded-lg p-4 space-y-5">
          <img className="rounded-lg w-full object-cover h-80" src="/about/investors.jpg" />
          <h1 className="text-4xl">Our Investors</h1>
          <p >Wachira runs the successful Magunas Supermarkets chain, which has been flexing muscles with other established stores such as Naivas, Quickmatt and Tuskys. Magunas has two branches each in Murang’a and Embu, a hyper store in Kirinyaga, a branch in Nyeri and another one in Nairobi’s Utawala estate. Apart from the supermarkets and the wholesale business, Wachira has diversified to the hospitality industry, running two high-class hotels - Hotel Nokras Murang’a and Nokras Riverine Hotel and Spa. Nokras Riverine, set on lush grounds overlooking the scenic Sagana River, is the latest entry into the scene, boosting the Mt Kenya tourism circuit.

          </p>


        </div>
      </section>
      <section className="container mx-auto px-5 md:px-20 py-8 flex flex-col md:flex-row gap-10">
        <div className="md:basis-1/3">
            <h1 className="text-4xl uppercase text-[#6FBF42]">Our Impact</h1>
        <p>Wachira runs the successful Magunas Supermarkets chain, which has been flexing muscles with other established stores such as Naivas, Quickmatt and Tuskys. Magunas has two branches each in Murang’a and Embu, a hyper store in Kirinyaga, a branch in Nyeri and another one in Nairobi’s Utawala estate. Apart from the supermarkets and the wholesale business, Wachira has diversified to the hospitality industry, running two high-class hotels - Hotel Nokras Murang’a and Nokras Riverine Hotel and Spa. Nokras Riverine, set on lush grounds overlooking the scenic Sagana River, is the latest entry into the scene, boosting the Mt Kenya tourism circuit.</p>
        </div>
        <div className="md:basis-2/3 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="bg-gray-800  shadow-lg rounded-lg">
    <img className="h-54 w-full object-cover rounded-lg" src="/home/about-1.jpg"/>
    <div className="p-3 ">
    <h2 className="text-xl uppercase space-y-2 text-[#6FBF42]">Environmental Management</h2>
    <p className="text-white">We strive to minimize our environmental impact by using eco-friendly materials, reducing waste, and investing in renewable energy sources.</p>
    </div>

</div>
<div className="bg-gray-800  shadow-lg rounded-lg">
    <img className="h-54 w-full object-cover rounded-lg" src="/home/about-1.jpg"/>
    <div className="p-3 ">
    <h2 className="text-xl uppercase space-y-2 text-[#6FBF42]">Occupational Health & Safety</h2>
    <p className="text-white">We strive to minimize our environmental impact by using eco-friendly materials, reducing waste, and investing in renewable energy sources.</p>
    </div>

</div>
<div className="bg-gray-800  shadow-lg rounded-lg">
    <img className="h-54 w-full object-cover rounded-lg" src="/home/about-2.jpg"/>
    <div className="p-3 ">
    <h2 className="text-xl uppercase space-y-2 text-[#6FBF42]">Corporate Social Responsibility</h2>
    <p className="text-white">We strive to minimize our environmental impact by using eco-friendly materials, reducing waste, and investing in renewable energy sources.</p>
    </div>

</div>



        </div>
        

      </section>
      <section className="banner relative bg-center bg-cover min-h-[306px] w-full flex flex-col items-center justify-center gap-3 px-5 md:px-20 py-12">
                <div className="absolute inset-0 bg-gray-800 opacity-80"></div>

                <h1 className="relative z-10 text-[24px] md:text-[40px] font-bold text-[#6FBF42] uppercase text-center">
                  Our Accolades
                </h1>
                <p className="relative z-10  text-[16px] md:text-[24px] text-[#F1C82D] font-semibold text-center">Over 30 years of service to Kenyans</p>
                <p className="text-white z-10 md:mx-28 text-center">We are the leading retailer in Kenya, with over 80 stores countrywide. We have been operational for over 30 years, and our commitment to serving our customers remains unshakeable. Visit any of our branches today and experience quality service delivery.</p>
                <div className="flex items-center gap-10 justify-center">
                   
                    <button className="relative text-white hover:border-white hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#6FBF42] hover:bg-transparent">View Offers<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    </button>
                </div>

            </section>
            <Footer/>
        </main>
    );
}

export default page;