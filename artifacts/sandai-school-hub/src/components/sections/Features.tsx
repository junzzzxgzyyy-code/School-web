import { motion } from "framer-motion";
import { BookOpen, Leaf, Microscope, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Kurikulum Berkualitas",
    description: "Mengikuti kurikulum Merdeka Belajar yang adaptif dan berpusat pada siswa",
    icon: BookOpen,
  },
  {
    title: "Guru Profesional",
    description: "Tenaga pengajar berpengalaman dan bersertifikat dengan dedikasi tinggi",
    icon: Users,
  },
  {
    title: "Fasilitas Lengkap",
    description: "Lab IPA, Lab Komputer, perpustakaan, dan lapangan olahraga yang memadai",
    icon: Microscope,
  },
  {
    title: "Lingkungan Nyaman",
    description: "Suasana sekolah yang asri, hijau, dan kondusif untuk proses belajar",
    icon: Leaf,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="keunggulan" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Mengapa Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Keunggulan Kami
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
