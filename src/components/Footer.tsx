import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative w-full pt-20 min-h-[800px]">
      <div
        className="absolute inset-0 z-0 bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundPosition: "center center",
        }}></div>

      <div className="relative z-5 container mx-auto px-4">
        <div className="text-center mt-10">
          <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
            Join our newsletter
          </h1>
          <p className="text-[#A3A3A3] text-[18px] font-mono mt-5">
            Get the latest updates, exclusive offers, and more straight to your
            inbox!
          </p>
          <div className="mx-auto w-full md:w-2/5 flex sm:flex-row flex-col gap-x-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#17102F] border border-[#443883] rounded-xl py-5 px-5 outline-none placeholder:text-[#B7B8BE] focus:border-[#8b55ff] focus:text-[#8b55ff] mt-5"
            />
            <button className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20">
            {/* Left Info */}
            <div className="md:w-1/3 text-left">
              <h4 className="text-[16px] md:text-[28px] sm:text-[24px] text-white font-bold uppercase">
                36 Web<span className="text-[#6F51FF]">Solutions</span>.
              </h4>
              <p className="text-[#A3A3A3] text-[18px] font-mono mt-5">
                Launch your online presence with a complete web design and
                development package for just $36! This offer includes a
                custom-designed website, domain registration, and 1 year of
                fast, secure hosting.
              </p>
            </div>
            <div className="md:w-1/4 sm:w-1/2 w-0"></div>
            {/* Links */}
            <div className="md:w-1/4">
              <h4 className="text-2xl md:text-[28px] text-left text-white font-semibold uppercase">
                Links
              </h4>
              <ul className="text-[#A3A3A3] space-y-4 text-left cursor-pointer text-[18px]  font-mono mt-5">
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#home`}>Home</Link>
                </li>

                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#portfolio`}>Portfolio</Link>
                </li>
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#services`}>Services</Link>
                </li>

                <li className="hover:text-[#804FEF] duration-300 transition-all"></li>
                <li className="hover:text-[#804FEF] duration-300 transition-all">
                  <Link href={`#about`}>About</Link>
                </li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div className="md:w-1/3 text-left">
              <h4 className="text-2xl md:text-[28px] text-white font-semibold uppercase">
                Contact
              </h4>
              <p
                onClick={() =>
                  window.open(`mailto:emailnextech@gmail.com`, "_blank")
                }
                className="text-[#A3A3A3] text-[18px] font-mono mt-5 cursor-pointer hover:text-[#804FEF]">
                36websolutions@gmail.com
              </p>
              <p
                // onClick={() =>
                //   window.open(`https://wa.me/8801721495805`, "_blank")
                // }
                className="text-[#A3A3A3] text-[18px] font-mono mt-5 cursor-pointer hover:text-[#804FEF]">
                Phone Number: (805) 699-8360
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full p-3 hover:text-[#6F51FF] text-[20px]">
                  <FaDiscord />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full p-3 hover:text-[#6F51FF] text-[20px]">
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full p-3 hover:text-[#6F51FF] text-[20px]">
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#443883] rounded-full  p-3 hover:text-[#6F51FF] text-[20px]">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
