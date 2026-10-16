import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

// Sample data for the image gallery using converted Vitor Ferreira webp photos
const imageItems = [
  {
    id: 1,
    title: "Convenção e Treinamento Comercial",
    desc: "Energia e método para grandes plateias e eventos corporativos.",
    url: "/assets/galeria/IMG_7165.webp",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 2,
    title: "Vivência de Palco",
    desc: "Vitor Ferreira em ação compartilhando estratégias de alto impacto.",
    url: "/assets/galeria/IMG_0262.webp",
    span: "md:row-span-2",
  },
  {
    id: 3,
    title: "Prática em Sala de Aula",
    desc: "Exercícios e dinâmicas que simulam o dia a dia comercial.",
    url: "/assets/galeria/IMG_4520.webp",
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Atendimento de Excelência",
    desc: "Construção de processos focados na experiência do cliente.",
    url: "/assets/galeria/IMG_4521.webp",
    span: "md:row-span-1",
  },
  {
    id: 5,
    title: "Auditório e Imersão",
    desc: "Conteúdo estruturado para equipes comerciais e líderes.",
    url: "/assets/galeria/IMG_0954.webp",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Comunicação e Oratória",
    desc: "Clareza, assertividade e conexão com o público.",
    url: "/assets/galeria/IMG_4174.webp",
    span: "md:row-span-2",
  },
  {
    id: 7,
    title: "Equipe Capacitada",
    desc: "Engajamento coletivo e transformação em prática.",
    url: "/assets/galeria/IMG_5625.webp",
    span: "md:col-span-2 md:row-span-1",
  },
]

export default function InteractiveImageBentoGalleryDemo() {
  return (
    <div className="w-full antialiased">
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Experiência em Movimento"
        description="Registros reais de palestras, workshops e treinamentos conduzidos por Vitor Ferreira."
      />
    </div>
  )
}
