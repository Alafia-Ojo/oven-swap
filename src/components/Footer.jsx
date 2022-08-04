import ovenswap from "../assets/images/ovenswap.svg";
import "../index.css";

const Footer = () => {
  return (
    <div className="font-kanit">
      <div className="flex items-center  justify-evenly  w-full bg-c">
        <div className="flex items-center justify-center p-7">
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full  bg-[#00716F]"></div>
              <div className="flex-auto">
                <div>
                  <a className="text-[14px] font-kanit text-[#00716F]" href="">
                    CIRCULATING SUPPLY
                  </a>
                </div>
                <div className="mt-0.5 text-[22px] text-[#00716F]">
                  149,922,309
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full  bg-[#00716F]"></div>
              <div className="flex-auto">
                <div>
                  <a className="text-[14px] font-kanit text-[#00716F]" href="">
                    TOTAL SUPPLY
                  </a>
                </div>
                <div className="mt-0.5 text-[22px] font-semibold text-[#00716F]">
                  303,782,081
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full  bg-[#00716F]"></div>
            <div className="flex-auto">
              <div>
                <a className="text-[14px] font-kanit text-[#00716F]" href="">
                  14.25/BLOCK
                </a>
              </div>
              <div className="mt-0.5 text-[22px] font-semibold text-[#00716F]">
                149,922,309
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full  bg-[#00716F]"></div>
            <div className="flex-auto">
              <div>
                <a className="text-[14px] font-kanit text-[#00716F]" href="">
                  MAX SUPPLY
                </a>
              </div>
              <div className="mt-0.5 text-[22px] font-semibold text-[#00716F]">
                750,000,000
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full  bg-[#00716F]"></div>
            <div className="flex-auto">
              <div>
                <a className="text-[14px] font-kanit text-[#00716F]" href="">
                  MARKET CAP
                </a>
              </div>
              <div className="mt-0.5 text-[22px] font-semibold text-[#00716F]">
                $400 MILLION
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full  bg-[#00716F]"></div>
            <div className="flex-auto">
              <div>
                <a className="text-[14px] font-kanit text-[#00716F]" href="">
                  BURNED TO DATE
                </a>
              </div>
              <div className="mt-0.5 text-[22px] font-semibold text-[#00716F]">
                488,382,727
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white flex   justify-evenly p-8 w-full overflow-hidden">
        <div className="flex flex-col items-center justify-between">
          <div>
            <img src={ovenswap} alt="" />
          </div>
          <div className="w-[448px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum explicabo odio ullam veniam pariatur earum, distinctio
              accusantium! Fugiat, amet recusandae?
            </p>
          </div>
          <div>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
        <div className="text-white flex flex-col">
          <h1 className="text-amber-400 font-bold text-[22px]">ABOUT</h1>
          <a href="/">Contact</a>
          <a href="/">Brand</a>
          <a href="/">Blog</a>
          <a href="/">Community</a>
          <a href="/">Litepaper</a>
          <a href="/">-</a>
          <a href="/">Online Store</a>
        </div>
        <div className="text-white flex flex-col">
          <h1 className="text-amber-400 font-bold text-[22px]">HELP</h1>
          <a href="/">Customer Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Guides</a>
        </div>
        <div className="text-white flex flex-col">
          <h1 className="text-amber-400 font-bold text-[22px]">DEVELOPER</h1>
          <a href="/">Github</a>
          <a href="/">Documentation</a>
          <a href="/">Bug Bounty</a>
          <a href="/">Audits</a>
          <a href="/">Careers</a>
        </div>
        <div className="text-white flex flex-col">
          <h1 className="text-amber-400 font-bold text-[22px]">FOLLOW</h1>
          <div className="flex gap-3">
            <a
              href="#"
              className="text-black bg-white border-2 rounded-full p-1 "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-black bg-white border-2 rounded-full p-1"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-black bg-white border-2 rounded-full p-1"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
