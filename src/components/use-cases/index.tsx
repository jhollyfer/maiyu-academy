import { Card } from "../ui/card";

type UseCase = {
  name: string;
  phase: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
};

const USE_CASES_DATA: UseCase[] = [
  {
    name: "Indio.Delivery",
    phase: "Análise de requisitos",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      {
        src: "/use-cases/delivery-1.png",
        alt: "Primeira tela do app Indio.Delivery",
      },
      {
        src: "/use-cases/delivery-2.png",
        alt: "Segunda tela do app Indio.Delivery",
      },
    ],
  },
  {
    name: "Comanda Aí",
    phase: "Desenvolvimento",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    images: [
      {
        src: "/use-cases/comanda-1.png",
        alt: "Primeira tela do app Comanda Aí",
      },
      {
        src: "/use-cases/comanda-2.png",
        alt: "Segunda tela do app Comanda Aí",
      },
      {
        src: "/use-cases/comanda-3.png",
        alt: "Terceira tela do app Comanda Aí",
      },
    ],
  },
];

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Card className="p-6 border-none bg-transparent shadow-none">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 overflow-x-auto">
          <div className="flex gap-8">
            {useCase.images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-32 h-[278px] rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        <div className="flex-grow space-y-4">
          <div>
            <label className="text-[#3366FF80] text-opacity-50 text-lg block">
              Aplicativo
            </label>
            <h3 className="text-[#003399] text-xl font-bold">{useCase.name}</h3>
          </div>

          <div>
            <label className="text-[#3366FF80] text-opacity-50 block">
              Fase
            </label>
            <p className="text-[#003399] text-xl font-bold">{useCase.phase}</p>
          </div>

          <div>
            <label className="text-[#1E1E1E40] text-opacity-50 block">
              Descrição
            </label>
            <p className="max-w-prose">{useCase.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function UseCases() {
  return (
    <section
      aria-labelledby="use-cases-heading"
      className="bg-[#F0F0F0] w-full py-10"
    >
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <h2
            id="use-cases-heading"
            className="text-5xl font-bold text-[#003399]"
          >
            Casos de uso
          </h2>
        </header>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-10">
          {USE_CASES_DATA.map((useCase) => (
            <UseCaseCard key={useCase.name} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
