
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="banner relative bg-center bg-cover min-h-[506px] w-full flex flex-col items-center justify-center gap-3 px-5 md:px-20">
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

        <h1 className="relative z-10 text-[24px] md:text-[64px] font-bold text-white uppercase text-center">
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
            <img src="/home/about-3.jpg" className="rounded-lg w-full object-cover"></img>
          </div>
          <img src="/home/about-1.jpg" className="rounded-lg w-full object-cover h-[80%] my-10"></img>
        </div>
        <div className="mt-10 basis-1/2 space-y-4">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Our Journey</h1>
            <p>Magunas Supermarket is available in over five counties in Kenya. This makes Simon Wachira among the richest people from the Mt. Kenya region.
              <br></br>
              The supermarket strives to offer customers a unique and exceptional shopping experience. Customers always seek quality products at reasonable prices.
            </p>
            <button className="relative text-white hover:border-[#F1C82D] hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#F1C82D] hover:bg-transparent hover:text-[#F1C82D]">Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        </button>
            <hr className='h-[1px] bg-black w-full my-2' />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Our Branding to Magunas</h1>
            <p>Magunas Supermarket is available in over five counties in Kenya. This makes Simon Wachira among the richest people from the Mt. Kenya region.
              <br></br>
              The supermarket strives to offer customers a unique and exceptional shopping experience. Customers always seek quality products at reasonable prices.
            </p>
            <button className="relative text-white hover:border-[#F1C82D] hover:border-2 hover:border-solid px-10 py-2 rounded-lg flex items-center gap-2 justify-center mt-6 bg-[#F1C82D] hover:bg-transparent hover:text-[#F1C82D]">Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        </button>
            <hr className='h-[1px] bg-black w-full my-2' />
          </div>

        </div>

      </section>
      <section className="container mx-auto px-5 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-4">
          <h1 className="text-4xl">
            Affordability is the only language we speak.</h1>
          <p>
            We're commited to offering quality products at affordable prices
            Every time you walk into any of our stores, you don’t think about how the product got onto our shelf for you to place it in your shopping cart because that’s for us to worry about. <br />
            Every time you walk into any of our stores, you don’t think about how the product got onto our shelf for you to place it in your shopping cart because that’s for us to worry about.

          </p>
        </div>
        <img src="/home/service-1.jpg" className="object-cover w-full rounded-lg" />
        <img src="/home/service-2.jpg" className="object-cover w-full rounded-lg" />

      </section>
      <section className="container mx-auto px-5 md:px-20 py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#F1C82D] rounded-lg p-4 space-y-5">
          <img className="rounded-lg w-full object-cover h-80" src="/home/images.jpg" />
          <h1 className="text-2xl">We're always there for you and always at your service</h1>
          <p >Every time you walk into any of our stores, you don’t think about how the product got onto our shelf for you to place it in your shopping cart because that’s for us to worry about.

          </p>


        </div>
        <div className="bg-[#6FBF42] rounded-lg p-4 space-y-5">
          <img className="rounded-lg w-full object-cover h-80" src="/home/offers-2.jpg" />
          <h1 className="text-2xl">We're commited to offering quality products at affordable prices</h1>
          <p >Every time you walk into any of our stores, you don’t think about how the product got onto our shelf for you to place it in your shopping cart because that’s for us to worry about.

          </p>


        </div>
      </section>
      <section className="about">
        <h1 className="text-[64px] font-bold text-center mt-12">Our Mantra</h1>
        <h2 className="text-2xl font-semibold text-center">“We exist to make other peoples’ lives better’’</h2>
        <div class="about-cards container mx-auto px-5 md:px-20 flex items-center md:items-start flex-col md:flex-row justify-between gap-5">
          <div class="ellipse"></div>
          <div class="about-card w-80 md:w-[260px] rounded-lg">

            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8.3617 27.4662C8.45435 27.3019 8.46754 27.1069 8.39782 26.9324C8.32809 26.7579 8.18241 26.6214 7.99903 26.5587C6.28793 25.9845 4.39815 26.1837 2.85759 27.1007C1.31704 28.0176 0.290853 29.554 0.0656984 31.2806C0.04187 31.4636 0.101441 31.6476 0.22914 31.7854C0.35684 31.9232 0.540253 32.0014 0.732365 32H6.6857C7.05389 32 7.35237 31.7134 7.35237 31.36C7.35026 30.0021 7.69693 28.6648 8.3617 27.4662Z" fill="#F0C72B" />
                <path d="M21.3522 14.72C21.1828 14.7205 21.0149 14.6896 20.8576 14.6291C20.5292 14.503 20.2665 14.2568 20.1272 13.9448C19.9879 13.6327 19.9835 13.2803 20.1149 12.9651C20.8649 11.1718 22.033 9.56745 23.5296 8.27519C24.079 7.81618 24.9104 7.86535 25.397 8.38561C25.8836 8.90587 25.8452 9.70471 25.3109 10.1798C24.1192 11.2093 23.1888 12.4869 22.5909 13.9149C22.3885 14.4013 21.8978 14.7202 21.3522 14.72Z" fill="#F0C72B" />
                <path d="M10.6869 14.72C10.1413 14.7202 9.65066 14.4013 9.44825 13.9149C8.85036 12.4869 7.91993 11.2093 6.72825 10.1798C6.19391 9.70471 6.15558 8.90587 6.64216 8.38561C7.12874 7.86535 7.96017 7.81618 8.50958 8.27519C10.0062 9.56745 11.1743 11.1718 11.9242 12.9651C12.0883 13.3593 12.0381 13.8059 11.7902 14.1575C11.5424 14.509 11.1291 14.7197 10.6869 14.72Z" fill="#F0C72B" />
                <path d="M26.0189 24.96C27.8599 24.96 29.3522 23.5273 29.3522 21.76C29.3522 19.9927 27.8599 18.56 26.0189 18.56C24.178 18.56 22.6856 19.9927 22.6856 21.76C22.6856 23.5273 24.178 24.96 26.0189 24.96Z" fill="#F0C72B" />
                <path d="M24.6864 31.36C24.6864 31.7134 24.9849 32 25.3531 32H31.3117C31.5039 32.0014 31.6873 31.9232 31.815 31.7854C31.9427 31.6476 32.0022 31.4636 31.9784 31.2806C31.7529 29.5552 30.7275 28.02 29.1883 27.1033C27.6491 26.1865 25.7609 25.9864 24.0504 26.5587C23.8665 26.6204 23.7198 26.7562 23.649 26.9305C23.5783 27.1048 23.5905 27.3 23.6824 27.4649C24.3436 28.665 24.6883 30.0024 24.6864 31.36Z" fill="#F0C72B" />
                <path d="M6.01891 24.96C7.85986 24.96 9.35225 23.5273 9.35225 21.76C9.35225 19.9927 7.85986 18.56 6.01891 18.56C4.17797 18.56 2.68558 19.9927 2.68558 21.76C2.68558 23.5273 4.17797 24.96 6.01891 24.96Z" fill="#F0C72B" />
                <path d="M18.6426 25.472C18.5275 25.4249 18.4496 25.3198 18.4409 25.2C18.4322 25.0802 18.4941 24.9658 18.6012 24.9037C20.5249 23.7905 21.4395 21.5828 20.8377 19.5054C20.2359 17.428 18.2653 15.9905 16.0192 15.9905C13.7731 15.9905 11.8025 17.428 11.2008 19.5054C10.599 21.5828 11.5136 23.7905 13.4372 24.9037C13.5444 24.9658 13.6063 25.0802 13.5976 25.2C13.5889 25.3198 13.511 25.4249 13.3959 25.472C10.9409 26.4638 9.34755 28.775 9.3559 31.3319C9.34938 31.5056 9.41673 31.6743 9.54247 31.7994C9.66821 31.9245 9.84152 31.995 10.0226 31.9949H22.0226C22.2034 31.995 22.3765 31.9246 22.5022 31.7998C22.6279 31.6751 22.6954 31.5066 22.6892 31.3332C22.6981 28.7739 21.1013 26.4612 18.6426 25.472Z" fill="#F0C72B" />
                <path d="M7.44558 4.48639L7.00558 4.42623C5.83184 4.26203 4.90995 3.37702 4.73891 2.25023L4.68025 1.82911C4.63558 1.51164 4.35328 1.27478 4.01958 1.27478C3.68588 1.27478 3.40358 1.51164 3.35891 1.82911L3.29625 2.25407C3.12521 3.38086 2.20332 4.26587 1.02958 4.43007L0.588247 4.49023C0.259708 4.53517 0.015625 4.80525 0.015625 5.12383C0.015625 5.44241 0.259708 5.71249 0.588247 5.75743L1.03225 5.81887C2.20661 5.98187 3.12912 6.86748 3.29891 7.99487L3.36158 8.41855C3.40625 8.73602 3.68855 8.97288 4.02225 8.97288C4.35595 8.97288 4.63824 8.73602 4.68291 8.41855L4.74558 7.99359C4.91537 6.8662 5.83788 5.98059 7.01225 5.81759L7.44825 5.75999C7.77679 5.71505 8.02087 5.44497 8.02087 5.12639C8.02087 4.80781 7.77679 4.53773 7.44825 4.49279L7.44558 4.48639Z" fill="#F0C72B" />
                <path d="M18.7822 3.84639L18.4288 3.79775C17.5499 3.67475 16.8596 3.01205 16.7315 2.16831L16.6808 1.82911C16.6362 1.51164 16.3539 1.27478 16.0202 1.27478C15.6865 1.27478 15.4042 1.51164 15.3595 1.82911L15.3088 2.17599C15.1802 3.01923 14.49 3.68129 13.6115 3.80415L13.2582 3.85279C12.9296 3.89773 12.6855 4.16781 12.6855 4.48639C12.6855 4.80497 12.9296 5.07505 13.2582 5.11999L13.6128 5.16863C14.4916 5.29229 15.1814 5.95551 15.3088 6.79935L15.3595 7.13727C15.4042 7.45474 15.6865 7.6916 16.0202 7.6916C16.3539 7.6916 16.6362 7.45474 16.6808 7.13727L16.7315 6.79807C16.8596 5.95433 17.5499 5.29163 18.4288 5.16863L18.7822 5.11999C19.1107 5.07505 19.3548 4.80497 19.3548 4.48639C19.3548 4.16781 19.1107 3.89773 18.7822 3.85279V3.84639Z" fill="#F0C72B" />
                <path d="M16.0189 14.08C15.2825 14.08 14.6856 13.5069 14.6856 12.8V10.24C14.6856 9.53307 15.2825 8.95999 16.0189 8.95999C16.7553 8.95999 17.3522 9.53307 17.3522 10.24V12.8C17.3522 13.5069 16.7553 14.08 16.0189 14.08Z" fill="#F0C72B" />
              </svg>
            </span>
            <div class="card-text">
              <h2>Teamwork</h2>
              <p>Company associates working towards common organizational goals through mutual support.</p>
            </div>
          </div>
          <div class="about-card w-80 md:w-[260px] rounded-lg">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M19.9471 19.646C18.2985 21.0339 16.1398 21.6599 14.0044 21.3693C13.8966 21.3548 13.7891 21.3979 13.7213 21.4829C13.6512 21.5715 13.6357 21.6916 13.681 21.7951L16.3912 27.6689C16.7265 28.5402 17.4839 29.1798 18.3991 29.3644C18.623 29.4102 18.8033 29.5762 18.8672 29.7957L19.3551 31.4666C19.4233 31.7022 19.5823 31.901 19.7972 32.0193C20.012 32.1377 20.2651 32.1657 20.5006 32.0974C20.5721 32.0758 20.6409 32.0461 20.7057 32.0089C21.0736 31.7957 21.249 31.3593 21.1309 30.9508L20.6454 29.2843C20.5816 29.0645 20.6447 28.8275 20.8095 28.6687C21.4825 28.0213 21.7782 27.075 21.5937 26.1595L20.4467 19.8186C20.4251 19.7122 20.3489 19.6251 20.2462 19.5897C20.1436 19.5542 20.0299 19.5756 19.9471 19.646Z" fill="#06400B" />
                <path d="M5.79943 10.9297L21.5489 6.34583C21.8613 6.25484 22.1118 6.0208 22.2238 5.71535C22.3359 5.40989 22.296 5.06938 22.1166 4.79801C19.785 1.30256 15.4553 -0.276356 11.421 0.897585C7.38657 2.07153 4.58004 5.72696 4.48792 9.92766C4.48174 10.2535 4.63104 10.5628 4.89001 10.7607C5.14898 10.9585 5.48667 11.0213 5.79943 10.9297Z" fill="#06400B" />
                <path d="M23.315 9.4664C23.0563 9.26817 22.7187 9.20497 22.4057 9.29621L6.66689 13.8739C6.35414 13.965 6.10338 14.1994 5.99151 14.5053C5.87965 14.8113 5.92003 15.1522 6.10028 15.4235C8.43271 18.9154 12.7599 20.492 16.792 19.319C20.8241 18.1459 23.6302 14.4941 23.7254 10.2959C23.7285 9.96983 23.5761 9.66178 23.315 9.4664Z" fill="#06400B" />
              </svg>
            </span>
            <div class="card-text">
              <h2>Quality</h2>
              <p>The company shall strive to provide quality products and services to its customers.</p>
            </div>
          </div>
          <div class="about-card w-80 md:w-[260px] rounded-lg">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 10.6667C32 11.403 31.403 12 30.6667 12C28.4575 12 26.6667 13.7909 26.6667 16C26.6667 18.2091 28.4575 20 30.6667 20C31.403 20 32 20.597 32 21.3333V24.6667C32 25.5507 31.6488 26.3986 31.0237 27.0237C30.3986 27.6488 29.5507 28 28.6667 28H3.33333C1.49238 28 0 26.5076 0 24.6667V21.3333C0 20.597 0.596954 20 1.33333 20C3.54247 20 5.33333 18.2091 5.33333 16C5.33333 13.7909 3.54247 12 1.33333 12C0.596954 12 0 11.403 0 10.6667V7.33333C0 5.49238 1.49238 4 3.33333 4H28.6667C29.5507 4 30.3986 4.35119 31.0237 4.97631C31.6488 5.60143 32 6.44928 32 7.33333V10.6667ZM18.4813 16.8733L20.28 15.42L20.2853 15.4187C20.5051 15.2412 20.5892 14.9444 20.4951 14.678C20.401 14.4116 20.1492 14.2334 19.8667 14.2333H17.9413C17.8069 14.2336 17.6855 14.1532 17.6333 14.0293L16.6133 11.588C16.5094 11.3405 16.2671 11.1795 15.9987 11.1795C15.7302 11.1795 15.4879 11.3405 15.384 11.588L14.3533 14.0307C14.3014 14.1541 14.1806 14.2344 14.0467 14.2347H12.1253C11.8428 14.2347 11.591 14.4129 11.4969 14.6793C11.4028 14.9457 11.4869 15.2425 11.7067 15.42L13.5053 16.8747C13.6173 16.9646 13.6587 17.1163 13.608 17.2507L12.7333 19.5827C12.6306 19.8573 12.7194 20.1669 12.9521 20.3453C13.1848 20.5237 13.5067 20.5292 13.7453 20.3587L15.8 18.892C15.9156 18.8092 16.0711 18.8092 16.1867 18.892L18.2427 20.3587C18.4815 20.5286 18.8032 20.5226 19.0356 20.3439C19.2679 20.1652 19.3563 19.8558 19.2533 19.5813L18.3787 17.2493C18.328 17.115 18.3694 16.9633 18.4813 16.8733Z" fill="#F39711" />
              </svg>
            </span>
            <div class="card-text">
              <h2>Excellence</h2>
              <p>Setting a culture of continuous improvement for everyone to thrive.</p>
            </div>
          </div>
          <div class="about-card w-80 md:w-[260px] rounded-lg">
            <svg id="ellipse" xmlns="http://www.w3.org/2000/svg" width="131" height="93" viewBox="0 0 131 93" fill="none">
              <g opacity="0.15">
                <circle cx="98.9996" cy="-6.00002" r="19.4" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9994" cy="-6.00004" r="32.3333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="98.9991" cy="-5.99993" r="45.2667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0008" cy="-5.99995" r="58.2" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0005" cy="-6.00008" r="71.1333" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99.0003" cy="-5.99999" r="84.0667" stroke="#F9FCFC" stroke-width="2.56954" />
                <circle cx="99" cy="-6" r="97" stroke="#F9FCFC" stroke-width="2.56954" />
              </g>
            </svg>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 11.3333C32 10.2288 31.1046 9.33333 30 9.33333H25.7893C25.473 9.33276 25.2006 9.10995 25.1373 8.79999C24.2546 4.45484 20.4339 1.33237 16 1.33237C11.5661 1.33237 7.74544 4.45484 6.86267 8.79999C6.7994 9.10995 6.52701 9.33276 6.21067 9.33333H2C0.895431 9.33333 0 10.2288 0 11.3333V28.6667C0 29.7712 0.895431 30.6667 2 30.6667H30C31.1046 30.6667 32 29.7712 32 28.6667V11.3333ZM3.66602 28C3.11373 28 2.66602 27.5523 2.66602 27C2.66602 26.4477 3.11373 26 3.66602 26C4.2183 26 4.66602 26.4477 4.66602 27C4.66602 27.5523 4.2183 28 3.66602 28ZM17 5C17 4.44771 16.5523 4 16 4C15.4477 4 15 4.44771 15 5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5ZM21.128 22.7907C21.2725 23.1366 21.18 23.5362 20.8982 23.7835C20.6165 24.0308 20.2083 24.0707 19.884 23.8827L16.3373 21.8827C16.1341 21.7681 15.8859 21.7681 15.6827 21.8827L12.136 23.8827C11.8117 24.0707 11.4035 24.0308 11.1218 23.7835C10.84 23.5362 10.7475 23.1366 10.892 22.7907L12.2773 19.6107C12.4044 19.3195 12.3085 18.9792 12.048 18.7973L9.6 17.092C9.3427 16.8633 9.25662 16.4977 9.38483 16.1782C9.51305 15.8587 9.82798 15.6541 10.172 15.6667H13.048C13.3253 15.6669 13.5738 15.4954 13.672 15.236L15.224 11.144C15.3762 10.8504 15.6793 10.6661 16.01 10.6661C16.3407 10.6661 16.6438 10.8504 16.796 11.144L18.3453 15.236C18.4435 15.4954 18.692 15.6669 18.9693 15.6667H21.8413C22.1861 15.6523 22.5027 15.8563 22.6319 16.1762C22.7612 16.4961 22.6753 16.8628 22.4173 17.092L19.972 18.8C19.7115 18.9818 19.6156 19.3222 19.7427 19.6133L21.128 22.7907ZM27.334 27C27.334 27.5523 27.7817 28 28.334 28C28.8863 28 29.334 27.5523 29.334 27C29.334 26.4477 28.8863 26 28.334 26C27.7817 26 27.334 26.4477 27.334 27Z" fill="#90123F" />
              </svg>
            </span>
            <div class="card-text">
              <h2>Honesty</h2>
              <p>The company will be ethical accountable and transparent in its dealings with all Stakeholders.</p>

            </div>
          </div>
        </div>

      </section>
      <section className="container mx-auto px-5 md:px-20 py-8">
        <div className="banner bg-cover bg-center w-full h-[500px] rounded-lg flex justify-center items-end">
          <div className="bg-[#6FBF42] w-[90%] md:w-[50%] p-5 text-white">
            <p>For us, it is not just about providing a platform for retail trade but complementing the lifestyles of those who seek our services and offering an experience through our excellent customer service.</p>

          </div>

        </div>
      </section>


      <footer class="bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex justify-between gap-10">
            <div class="mb-6 md:mb-0 basis-1/3 ">
              <a href="/" class="space-y-4">
                <img src="/logo.png" class="h-8 me-3 mb-4" alt="Logo" />
                <span class="self-center text-10 font-semibold text-white">Follow and interact with us on our social media platforms and stay updated. We post offers, news, and much more. At Naivas, we’re committed to giving you value.</span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 basis-2/3 justify-between">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">About</h2>
                <ul class="text-gray-500 dark:text-gray-200 font-medium space-y-4">

                  <li>
                    <a href="/" class="hover:underline">Opportunities</a>
                  </li>
                  <li>
                    <a href="/" class="hover:underline">Leadership</a>
                  </li>
                  <li>
                    <a href="/" class="hover:underline">Accolades</a>
                  </li>
                  <li class="">
                    <a href="/" class="hover:underline">FAQs</a>
                  </li>
                  <li>
                    <a href="/" class="hover:underline">Contacts</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase">Locations</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li class="">
                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">All
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Nairobi</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Nakuru</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Mombasa</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Kiambu</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Eldoret</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Kisumu</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white">Offers</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">Deals</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Store Locator</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Shop Online</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" class="hover:underline">Magunas</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
