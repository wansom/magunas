
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
        <div className="relative flex overflow-x-hidden text-[#6FBF42]">
          <div className="py-8 animate-marquee whitespace-nowrap">
            <span className="text-2xl mx-4">Muranga County</span>
            <span className="text-2xl mx-4">Embu County</span>
            <span className="text-2xl mx-4">Kawaha Wendani</span>
            <span className="text-2xl mx-4">Ruiru</span>
            <span className="text-2xl mx-4">Nyeri County</span>
          </div>

          <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
            <span className="text-2xl mx-4">Muranga County</span>
            <span className="text-2xl mx-4">Embu County</span>
            <span className="text-2xl mx-4">Kawaha Wendani</span>
            <span className="text-2xl mx-4">Ruiru</span>
            <span className="text-2xl mx-4">Nyeri County</span>

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
        <div className="about-cards grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="w-full rounded-xl bg-[#F0C72B] p-4">

            <div className="text-white space-y-3">
              <h2 className="text-3xl font-bold">Mission</h2>
              <ul className="list-disc list-inside ">
                <li className="mb-3">To deliver an exceptional shopping experience by offering the best service, value and quality at the best prices in the market while being good stewards of our environment and giving back to the communities we serve.
                </li>
                <li>We strive to offer our customer with wide range of products at the lowest price possible without compromising on the quality of service and customers’ comfortability
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full rounded-xl bg-[#0E141C] text-white p-4">
            <div className="card-text">
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
          <div className=" w-full rounded-lg bg-[#6FBF42] p-4">

            <div className="text-white space-y-3">
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
      <section className="bg-white dark:bg-gray-900 container mx-auto px-5 md:px-20 py-8 ">
    <div className="container px-6 py-12 mx-auto">


        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="space-y-2">
          <div>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">CONTACT US</h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>

                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                </div>
            </div>
          </div>
      

            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#6FBF42] rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>


      <Footer />

    </main>
  );
}
