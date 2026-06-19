import { motion } from "framer-motion";
import { Award, Building2, Users } from "lucide-react";
import tentangImg from "@assets/IMG-20260407-WA0017_1781867249425.jpg";

export function About() {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Mengenal Kami
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Tentang Kami
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              SMA Negeri 1 Sandai adalah sekolah menengah atas negeri yang berlokasi di Kecamatan Sandai, Kabupaten Ketapang, Kalimantan Barat. Berdiri dengan komitmen kuat terhadap pendidikan berkualitas, sekolah ini telah mencetak generasi berprestasi yang siap menghadapi tantangan global. Dengan lingkungan asri, tenaga pengajar profesional, dan fasilitas modern, kami memberikan pengalaman belajar yang menyeluruh — akademik maupun karakter.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-4 bg-accent/50 rounded-2xl border border-accent">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <div className="font-semibold text-foreground text-lg">Akreditasi A</div>
                <div className="text-sm text-muted-foreground">Kualitas terjamin</div>
              </div>
              
              <div className="flex flex-col gap-2 p-4 bg-accent/50 rounded-2xl border border-accent">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-2">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="font-semibold text-foreground text-lg">25+ Tahun</div>
                <div className="text-sm text-muted-foreground">Berdiri membina</div>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-accent/50 rounded-2xl border border-accent">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <div className="font-semibold text-foreground text-lg">1000+</div>
                <div className="text-sm text-muted-foreground">Alumni sukses</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl z-0" />
            <div className="relative rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl z-10 bg-white">
              <img 
                src={tentangImg} 
                alt="Tentang SMA Negeri 1 Sandai" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
