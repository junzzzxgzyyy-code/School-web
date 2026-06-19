import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const misi = [
  "Meningkatkan layanan pendidikan kesehatan dan pelayanan kesehatan yang prima",
  "Mewujudkan VISI sekolah, pendidikan kesehatan, dan Warga Sekolah",
  "Menciptakan lingkungan bersih seluruh Warga Sekolah berdasarkan minat, bakat, dan potensi",
  "Mengembangkan ilmu pengetahuan dan teknologi berbasis digital dan komunikasi",
  "Meningkatkan prestasi akademik dan non-akademik sehingga siswa unggul dalam prestasi",
  "Membangun kerja sama yang harmonis antara sekolah, lembaga, dan masyarakat",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function VisiMisi() {
  return (
    <section id="visi-misi" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Arah & Tujuan
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Visi & Misi
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Visi Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-indigo-800 p-10 md:p-14 text-center shadow-2xl shadow-primary/20">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <h3 className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm mb-4 relative z-10">Visi Kami</h3>
              <p className="text-2xl md:text-4xl font-semibold text-white leading-tight relative z-10">
                "Mewujudkan Sekolah Menengah Atas yang Bermutu, Cerdas, Berintegrasi, Berbasis Budaya Bangsa"
              </p>
            </div>
          </motion.div>

          {/* Misi Grid */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">Misi Kami</h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {misi.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base font-medium">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
