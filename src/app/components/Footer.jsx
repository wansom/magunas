const Footer = () => {
    return ( 
        <footer class="bg-gray-900" id="contact">
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
              <a href="#" class="text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>

              <a href="#" class=" text-white ms-5">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-white ms-5 text-2xl">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;