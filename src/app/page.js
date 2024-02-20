
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="banner relative md:bg-center bg-cover min-h-[506px] w-full flex flex-col  items-center justify-end md:justify-center gap-3 px-5 md:px-20 py-10">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <h1 className="relative z-10 text-[24px] md:text-[48px] font-bold text-white uppercase text-center">
          Magunas Supermarket
        </h1>
        <p className="relative z-10  text-[16px] md:text-[24px] text-white font-semibold text-center">Sherehekea Bei Ya Mwananchi</p>
        <button className="relative text-white hover:border-white hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#F1C82D] hover:bg-transparent">Find the Nearest Store<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        </button>
      </section>
      <section className="container mx-auto px-5 md:px-20 uppercase  bg-gray-800">
        {/* <h1 className="font-semibold text-center text-2xl mx-20 text-black" > An extensive network of branches to provide convenient access to products and serives to our customers</h1> */}
        <div class="relative flex overflow-x-hidden text-[#6FBF42]">
          <div class="py-8 animate-marquee whitespace-nowrap">
            <span class="text-2xl mx-4">Muranga County</span>
            <span class="text-2xl mx-4">Embu County</span>
            <span class="text-2xl mx-4">Kawaha Wendani</span>
            <span class="text-2xl mx-4">Ruiru</span>
            <span class="text-2xl mx-4">Nyeri County</span>
          </div>

          <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
            <span class="text-2xl mx-4">Muranga County</span>
            <span class="text-2xl mx-4">Embu County</span>
            <span class="text-2xl mx-4">Kawaha Wendani</span>
            <span class="text-2xl mx-4">Ruiru</span>
            <span class="text-2xl mx-4">Nyeri County</span>

          </div>
        </div>
      </section>
      <section className="container px-5 md:px-20 mx-auto flex flex-col-reverse md:flex-row gap-5 md:gap-10 py-6">
        <div className="basis-2/2 md:basis-1/2">
          <div className="flex items-center gap-2 ">
            <div className="space-y-2 basis-1/2">
              <Image height={300} width={800} src="/3.jpg" className="rounded-lg" />
              <Image height={300} width={800} src="/4.jpg" className="rounded-lg" />
              <Image height={300} width={800} src="/7.jpg" className="rounded-lg" />
            </div>
            <div className="rounded-lg my-10 basis-1/2">
              <Image height={800} width={300} src="/8.jpg" className="rounded-lg" />
            </div>

          </div>
        </div>

        <div className="mt-10 basis-1/2 space-y-4">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Our Business</h1>
            <p>
              Over 30 years ago what was once a small wholesale shop know as <span className="font-bold">“Maguna Andu”</span> wholesalers in the heart of Muranga has evolved into a “Mega Chain of Supermarket thanks to its efficient running through its management and board of directors and through the immense support that it is has continuously receiving from its esteemed customers.<br /> <span className="font-bold">Magunas Supermarket</span> is a chain of supermarket that conducts retail and whole sale business. Its mainly focuses on : the day to day household commodities, electronics and appliances, clothing and beddings, fresh farm supplies and many others.
              Its main branch office/ supermarket is currently located in Mukuyu but due to the urgent need of expansion to meet the customer needs it has been fortunate enough to open branches in various parts of the country. It currently has 22 branches and it
              intends to open more branches as its aim and purpose is to serve affordable and quality services to its customers.

            </p>
            <button className="relative text-white hover:border-[#F1C82D] hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#F1C82D] hover:bg-transparent hover:text-[#F1C82D]">Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            </button>
            <hr className='h-[1px] bg-black w-full my-2' />
          </div>


        </div>

      </section>
      <section className="container px-5 md:px-20 mx-auto flex flex-col md:flex-row items-center gap-5 md:gap-10 py-6 bg-gray-50">


        <div className="md:mt-10 basis-1/2 space-y-4">
          <div>
            <div className="space-y-3 mb-5">
              <h1 className="text-4xl font-bold">Our Leadership</h1>
              <p>
                The chain of Magunas Supermarket is a family owned business run by its able founder and Chairman Simon Wachira and the Managing Director Agnes Wachira.
                Both the Chairman and the Managing director have excellent business skills and have instilled the skills into the day to day running Magunas Supermarket.
                Additionally to run the business they have distributed responsibilities in various departments where they have a Head of Department to manage the staff recruited in those departments .


              </p>
              <hr className='h-[1px] bg-black w-full my-2' />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold">Our Investors</h1>
              <p>
                Since its start up, The Chairman Simon Wachira used his savings as initial capital to start Maguna Andu and in its growth and expansion, he has continued to pump back the money in the business leading to the gradual growth of the business.



              </p>
              <hr className='h-[1px] bg-black w-full my-2' />
            </div>
          </div>



        </div>
        <div className="basis-2/2 md:basis-1/2">
          <Image height={200} width={600} src="/c.jpg" className="rounded-lg" />

        </div>

      </section>
      <section className="container mx-auto px-5 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#ECFFDC]">
        <div className="space-y-4">
          <h1 className="text-4xl">
            OUR IMPACT</h1>
          <ul className="list-disc space-y-3">
            <li>Availability of a wide range of products under one roof which saves a lot of time for the consumer
            </li>
            <li>Creation of employment, we have created over 2,500 jobs.
            </li><li>We offer the best prices in the market and offer a wide range of products to meet our customers needs
            </li><li>We run various promotional schemes from time to time in the form of discounts, offers and contests which makes shopping a rewarding experience.
            </li>
            <li>Our branches are located in prime locations in the country which has led to infrastructural growth in the areas.
              Our branches are located in prime locations in the country which has led to infrastructural growth in the areas.
            </li>
          </ul>
        </div>

        <Image height={300} width={800} src="/9.jpg" className="rounded-lg" />

      </section>
      <section className="container mx-auto px-5 md:px-20 py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#6FBF42] rounded-lg p-4 space-y-5">
          <img className="rounded-lg w-full object-cover md:h-[340px]" src="/csr.jpeg" />
          <h1 className="text-2xl">CORPORATE SOCIAL RESPONSIBILITY</h1>
          <p >Magunas is actively involved in contributing to the society through programs such as :


          </p>
          <ul className=" list-decimal list-inside">
            <li>Wings to Fly initiative
            </li>
            <li>The company donates a percentage of its revenue to charitable causes in the society
            </li>
            <li>Running mid and end year food drive throughs where we donate food supplies
            </li>
            <li>Assist the elderly in the community
            </li>
          </ul>


        </div>
        <div className="bg-[#F1C82D] rounded-lg p-4 space-y-5">
        <img className="rounded-lg w-full object-cover md:h-[340px]" src="/10.jpg" />
          <h1 className="text-2xl">ENVIROMENTAL MANAGEMENT</h1>
          <p >In providing an eco- friendly environment to our customers and the business. We have included eco- friendly practices such as substitution of plastic packaging bags with polypropylene carrier bags, installing a recycle bin in every entry and exit points where customers dispose the non- organic materials and we proceed to recycle them for various uses, Installation of solar panels installing of
            solar panels and many other practices. This way we are able to protect our environment and continue to serve the community.


          </p>


        </div>
      </section>
      <section className="about bg-[#ECFFDC] py-12  container mx-auto px-5 md:px-20">
        <h1 className="text-4xl font-bold text-center mt-12 italic">Sherehekea bei ya mwananchi</h1>
        <div class="about-cards grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div class="w-full rounded-xl bg-[#F0C72B] p-4">

            <div class="text-white space-y-3">
              <h2 className="text-3xl font-bold">Mission</h2>
              <ul className="list-disc list-inside ">
                <li className="mb-3">To deliver an exceptional shopping experience by offering the best service, value and quality at the best prices in the market while being good stewards of our environment and giving back to the communities we serve.
                </li>
                <li>We strive to offer our customer with wide range of products at the lowest price possible without compromising on the quality of service and customers’ comfortability
                </li>
              </ul>
            </div>
          </div>
          <div class=" w-full rounded-xl bg-[#0E141C] text-white p-4">
            <div class="card-text">
              <h2 className="font-bold text-3xl mb-3">Quality</h2>
              <ul className="list-disc list-inside space-y-3">
                <li className="">Providing pleasant shopping experience.
                </li>
                <li>Building relationships with our customers, suppliers, the community we live in and the country at large.
                </li>
                <li>Continuous improvement and innovation.
                </li>
                <li>Operating in a safe environment.
                </li>
              </ul>
            </div>
          </div>
          <div class=" w-full rounded-lg bg-[#6FBF42] p-4">

            <div class="text-white space-y-3">
              <h2 className="font-bold text-3xl">Our Vision</h2>
              <p>To become the front-runner supermarket in Kenya in which consumers can obtain great bargain and saving from shopping.

</p>
            </div>
          </div>

        </div>

      </section>
      <section className="container mx-auto px-5 md:px-20 py-8">
        <div className="banner-2 bg-cover bg-center w-full h-[500px] rounded-lg flex justify-center items-end">
          <div className="bg-[#6FBF42] w-[90%] md:w-[50%] p-5 text-white">
            <p>For us, it is not just about providing a platform for retail trade but complementing the lifestyles of those who seek our services and offering an experience through our excellent customer service.</p>

          </div>

        </div>
      </section>


      <Footer />

    </main>
  );
}
