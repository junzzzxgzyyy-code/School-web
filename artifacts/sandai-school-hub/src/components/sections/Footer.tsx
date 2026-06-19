import { GraduationCap } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-primary p-2 rounded-xl text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Sandai School Hub
              </span>
            </div>
            <p className="text-slate-400 font-medium max-w-xs">
              SMA Negeri 1 Sandai
              <br />
              Mencetak generasi PRIMADONA.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-white font-semibold mb-2">Tautan Cepat</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#tentang" className="hover:text-primary transition-colors">Tentang</a>
              <a href="#visi-misi" className="hover:text-primary transition-colors">Visi & Misi</a>
              <a href="#galeri" className="hover:text-primary transition-colors">Galeri</a>
              <a href="#kontak" className="hover:text-primary transition-colors">Kontak</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-white font-semibold mb-2">Media Sosial</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2024 SMA Negeri 1 Sandai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
