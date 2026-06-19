import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@assets/IMG-20260407-WA0019_1781867249682.jpg";
import { GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="SMA Negeri 1 Sandai Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
          >
            <GraduationCap className="h-4 w-4" />
            <span>SMA Negeri 1 Sandai</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Sandai School Hub
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4"
          >
            PRIMADONA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 font-medium text-sm md:text-base tracking-widest uppercase mb-6"
          >
            Pintar · Ramah · Meraih · Unggul · Dinamis · Operasional · Nyaman · Arif · Berbudaya
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Membangun generasi cerdas, berkarakter, dan berdaya saing tinggi di tengah alam Kalimantan yang subur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button size="lg" asChild className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25">
              <a href="#tentang">Jelajahi Sekolah</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
