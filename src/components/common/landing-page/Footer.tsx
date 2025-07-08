import {
  Facebook,
  Globe,
  Instagram,
  MessageCircle,
  Twitter,
  Mail,
  Github,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tentang Kami */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">Tentang Kami</h3>
            <p className="text-gray-300">
              Platform edukasi filsafat untuk membantu Anda memahami pemikiran
              para filsuf besar sepanjang sejarah.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Link Cepat */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">Link Cepat</h3>
            <nav className="space-y-2">
              <Link
                href="/tentang"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Tentang
              </Link>
              <Link
                href="/filsuf"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Daftar Filsuf
              </Link>
              <Link
                href="/blog"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">hiraritoryuta@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Github className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Ryuuutaaa</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">Newsletter</h3>
            <p className="text-gray-300">
              Dapatkan update terbaru tentang filsafat langsung ke email Anda.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Alamat email"
                className="px-3 py-2 rounded-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>

        {/* Tombol Kontak Mobile */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link
            href="/kontak"
            className="bg-yellow-400 text-gray-900 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            aria-label="Hubungi Kami"
          >
            <MessageCircle className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {currentYear} Ryutaaa.tsx</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-yellow-400 text-sm transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
