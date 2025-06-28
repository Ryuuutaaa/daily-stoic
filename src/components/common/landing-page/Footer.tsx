import {
  Facebook,
  Globe,
  Instagram,
  MessageCircle,
  Twitter,
} from "lucide-react";
import NavLink from "next/link";

import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-black text-white pt-12 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div>
              <p className="text-sm text-gray-300 font-semibold mb-2"></p>
              <a href="" className="block mb-1 hover:underline"></a>
              <p className="text-sm text-gray-300"></p>
              <p className="text-sm text-gray-300"></p>
              <br />
              <a
                href=""
                className="hover:underline"
                rel="noopener noreferrer"
              ></a>
            </div>

            <div>
              <p className="text-sm text-gray-300 font-semibold mb-2"></p>
              <a href="" rel="noopener noreferrer" className=""></a>
              <div className="mt-12">
                <p className="text-sm text-gray-400 font-semibold"></p>
                <div className="flex gap-3 mt-2">
                  <a
                    href=""
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <Facebook className="text-white" />
                  </a>
                  <a
                    href=""
                    className="hover:underline"
                    rel="noopener noreferrer"
                  >
                    <Globe className="text-white" />
                  </a>
                  <a
                    href=""
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <Instagram className="text-white" />
                  </a>
                  <a
                    href=""
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <Twitter className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-center mb-4">
                Kontak Kami
              </h3>
              <NavLink
                href="/kontak"
                className="bg-[#FFF200] text-black w-[60px] h-[60px] rounded-full flex items-center justify-center hover:scale-105 transition"
              >
                <MessageCircle />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="text-center text-white py-4 mt-12 text-sm">
          {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
