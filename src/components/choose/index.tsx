import { SectionTitle } from "../section-title";

export function Choose() {
  return (
    <div className="container w-full flex sm:space-x-10 flex-col sm:flex-row px-4 space-y-4 sm:space-y-0 py-8">
      <div className="flex flex-col space-y-8 w-full">
        <SectionTitle
          title="Porque escolher a gente?"
          label="Conhecimento acessível, garantido e divertido para você evoluir sempre!"
        />

        <div className="flex w-full space-y-12 flex-col">
          <div className="relative w-full flex flex-col space-y-4">
            <div className="max-w-[50%] max-lg:max-w-full space-y-4">
              <h2 className="text-4xl font-bold text-[#003399]">
                Custo Acessível
              </h2>
              <p>
                Oferecemos conhecimento de alta qualidade por um preço que cabe
                no seu bolso. Sabemos que educação é um investimento e, por
                isso, trabalhamos para que você tenha acesso ao melhor conteúdo
                sem comprometer suas finanças. Nosso objetivo é democratizar o
                aprendizado para que todos possam crescer e se destacar no
                mercado.
              </p>
            </div>

            <div className="max-lg:hidden">
              <div className="absolute top-14 right-10 w-1/3 border-t-4 border-blue-600"></div>
              <div className="absolute right-[45px] h-32 w-1 bg-blue-600 top-[-66px] translate-y-[100%]"></div>
              <div className="absolute top-[51px] right-10 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative w-full flex flex-col space-y-4 pb-10">
            <div className="max-w-[50%] max-lg:max-w-full space-y-4 ml-auto text-end">
              <h2 className="text-4xl font-bold text-[#003399]">
                Garantia de Aprendizado
              </h2>
              <p>
                Aqui, você realmente aprende! Nossa metodologia é testada e
                aprovada, com um suporte contínuo para ajudar a fixar os
                conhecimentos. Com aulas dinâmicas, materiais complementares e
                exercícios práticos, garantimos que você saia do curso com a
                confiança e as habilidades necessárias para aplicar o que
                aprendeu.
              </p>
            </div>

            <div className="max-lg:hidden">
              <div className="absolute top-28 left-10 w-1/3 border-t-4 border-blue-600"></div>
              <div className="absolute left-10 h-28 w-1 bg-blue-600 top-0 translate-y-[100%]"></div>
              <div className="absolute top-[105px] left-9 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative w-full flex flex-col space-y-4 pb-2">
            <div className="max-w-[50%] max-lg:max-w-full space-y-4">
              <h2 className="text-4xl font-bold text-[#003399]">
                Plataforma Gamificada
              </h2>
              <p>
                Aprender nunca foi tão divertido! Nossa plataforma é gamificada
                para tornar o processo de aprendizado mais envolvente e
                interativo. Você ganha pontos, desbloqueia níveis e participa de
                desafios que incentivam seu progresso e tornam o conteúdo ainda
                mais interessante. Aprenda jogando e divirta-se enquanto adquire
                novos conhecimentos!
              </p>
            </div>

            <div className="max-lg:hidden">
              <div className="absolute top-28 right-10 w-1/3 border-t-4 border-blue-600"></div>
              <div className="absolute right-[45px] h-20 w-1 bg-blue-600 top-8 translate-y-[100%]"></div>
              <div className="absolute top-[105px] right-10 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-4 pb-10">
            <div className="max-w-[50%] max-lg:max-w-full space-y-4 ml-auto text-end">
              <h2 className="text-4xl font-bold text-[#003399]">
                Continuidade no Aprendizado
              </h2>
              <p>
                Acreditamos que o aprendizado não termina ao fim de um curso.
                Por isso, oferecemos materiais extras, atualizações e acesso
                contínuo à nossa plataforma para que você possa se aprimorar e
                acompanhar as novidades do mercado. Com a gente, você está
                sempre um passo à frente, construindo um futuro melhor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
