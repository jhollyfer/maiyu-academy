import { CrosshairIcon, Eye, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const VALUES_DATA = [
  {
    title: "Missão",
    description:
      "A missão da Jedais Tec é capacitar crianças e jovens dos interiores do Amazonas, para o futuro da tecnologia, dando-lhes as habilidades que precisam para explorar e criar no mundo digital.",
    icon: <CrosshairIcon className="size-12 text-red-600" strokeWidth={2} />,
  },
  {
    title: "Visão",
    description:
      "Ser líder em educação tecnológica para crianças e jovens, transformando-se no farol que ilumina o caminho para descobertas, inovações e a busca pela excelência.",
    icon: <Eye className="size-12 text-green-600" strokeWidth={2} />,
  },
  {
    title: "Valores",
    description:
      "Responsabilidade, Integridade, Foco no sucesso do Aluno, Trabalho em Equipe, Inclusão Digital e Inovação no Ensino.",
    icon: <Gem className="size-12 text-blue-600" strokeWidth={2} />,
  },
] as const;

const FOUNDERS_DATA = [
  {
    name: "João Aguila",
    role: "CEO e Professor",
    image: "/joao-aguila.png",
    description:
      "Diretor Fundador de 31 anos, bacharel em Administração pela UFAM e Técnico em Redes de Computadores e Manutenção e suporte pelo CETAM. Conhecido pela sua paixão pela tecnologia e pelo seu desejo de democratizar o ensino de informática. Sua visão para a Jedais Tec é iluminar o caminho para um futuro brilhante para as crianças através da educação digital",
  },
  {
    name: "Marcos Jhollyfer",
    role: "Eng de Software e Professor",
    image: "/jhollyfer.png",
    description:
      "Bacharel em Engenharia de Software pela UFAM com experiência no desenvolvimento de aplicações web escaláveis e funcionais. Especialista em tecnologia e inovação.",
  },
] as const;

type ValueCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <Card className="bg-[#FFFAFA] bg-opacity-10 p-2 border-none">
      <CardHeader className="space-y-2">
        {icon}
        <CardTitle className="text-[#fffafa]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[#fffafa] text-lg">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function AboutUs() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-[#003399] w-full py-10"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="sm:flex sm:space-x-10">
          <article className="flex flex-col space-y-8 w-full text-white">
            <header className="flex flex-col space-y-2">
              <h2 id="about-heading" className="text-3xl font-extrabold">
                Sobre nós
              </h2>
              <p className="font-medium">Conheça um pouco sobre nossa escola</p>
            </header>

            <main className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-10">
                <p>
                  A Startup Jedais Tec é uma empresa dedicada à educação
                  tecnológica, focada especialmente no desenvolvimento de
                  crianças e jovens do interior do Amazonas. Nosso objetivo é
                  formar mentes curiosas, preparando-as para um futuro dominado
                  por avanços digitais. O diferencial da escola, está na sua
                  abordagem educacional única, combinando ensino de tecnologia
                  com metodologias ativas de aprendizagem.
                </p>

                <h3 className="font-bold text-3xl">Fundadores</h3>

                {FOUNDERS_DATA.map((founder) => (
                  <figure
                    key={founder.name}
                    className="flex gap-6 items-center max-md:flex-col"
                  >
                    <img
                      loading="lazy"
                      src={founder.image}
                      alt={`${founder.name}, ${founder.role} da Jedais Tec`}
                      className="size-64"
                    />
                    <figcaption className="space-y-4 w-3/5">
                      <h4 className="font-bold text-lg">
                        {founder.name} - {founder.role}
                      </h4>
                      <p>{founder.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="container w-full space-y-6">
                {VALUES_DATA.map((item) => (
                  <ValueCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
            </main>
          </article>
        </div>
      </div>
    </section>
  );
}
