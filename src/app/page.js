
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <section className=" banner relative bg-center bg-cover min-h-[506px] w-full flex flex-col items-center justify-center gap-3">
  <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

  <h1 className="relative z-10 text-[64px] font-bold text-white uppercase">
    Magunas Supermarket
  </h1>
  <p className="relative z-10 text-[24px] text-white font-semibold">Sherehekea Bei Ya Mwananchi</p>
  <button className="relative text-white border-white border-2 border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6">Find the Nearest Store<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button>
</section>
<section className="container mx-auto px-5 md:px-20 uppercase  bg-gray-800">
  {/* <h1 className="font-semibold text-center text-2xl mx-20 text-black" > An extensive network of branches to provide convenient access to products and serives to our customers</h1> */}
<div class="relative flex overflow-x-hidden text-[#6FBF42]">
  <div class="py-8 animate-marquee whitespace-nowrap">
  <span class="text-2xl mx-4">Muranga County-</span>
    <span class="text-2xl mx-4">Embu County-</span>
    <span class="text-2xl mx-4">Kawaha Wendani-</span>
    <span class="text-2xl mx-4">Ruiru-</span>
    <span class="text-2xl mx-4">Nyeri County-</span>
  </div>

  <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
  <span class="text-2xl mx-4">Muranga County-</span>
    <span class="text-2xl mx-4">Embu County-</span>
    <span class="text-2xl mx-4">Kawaha Wendani-</span>
    <span class="text-2xl mx-4">Ruiru-</span>
    <span class="text-2xl mx-4">Nyeri County-</span>

  </div>
</div>
</section>
<section className="container px-5 md:px-20 mx-auto flex flex-col md:flex-row gap-10 py-6">
<div className=" grid grid-cols-2 gap-2 basis-2/2 md:basis-1/2">
<div className="space-y-2">
  <img src="/home/about-2.jpg" className="rounded-lg w-full object-cover"></img>
  <img src="/home/about-3.jpg"  className="rounded-lg w-full object-cover"></img>
  </div>
  <img src="/home/about-1.jpg" className="rounded-lg w-full object-cover h-[80%] my-10"></img>
</div>
<div>
  <h1 className="text-2xl"> </h1>
</div>

</section>

    </main>
  );
}
