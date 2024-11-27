import {
  AlignRightIcon,
  BrainIcon,
  FacebookIcon,
  Gamepad2Icon,
  InstagramIcon,
  WaypointsIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./components/ui/sheet";

export function App() {
  return (
    <main className="h-screen w-screen flex flex-col overflow-x-hidden">
      <section className="bg-[url('/hero/banner.webp')] bg-no-repeat bg-cover h-auto lg:h-screen w-full shadow-[inset_50px_40px_80px_180px_rgba(0,0,0,0.8)] bg-top sm:bg-center">
        <header className="h-[9.5rem] w-full flex justify-center">
          <nav className="container w-full flex justify-between items-center p-3 sm:p-0">
            <img
              src="/logo-light.png"
              alt="Logo Jedais Tec"
              className="w-44 h-14"
            />

            <Sheet>
              <SheetTrigger asChild>
                <AlignRightIcon className="w-10 h-14 text-white cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="space-y-10 py-14">
                <SheetHeader className="flex-row justify-between max-w-[17.4375rem] w-full">
                  <img
                    src="/logo-dark.png"
                    alt="Logo Jedais Tec"
                    className="w-44 h-14"
                  />
                  <SheetClose
                    className="w-10 h-10 cursor-pointer text-red-600"
                    asChild
                  >
                    <X className="w-8 h-8" />
                  </SheetClose>
                </SheetHeader>

                <SheetFooter className="fle max-w-[17.4375rem] w-full sm:justify-start pl-6 text-base">
                  <ul className="space-y-3">
                    {[
                      "Inicio",
                      "Cursos",
                      "Metodologia",
                      "Sobre",
                      "Casos de uso",
                      "Contato",
                    ].map((item) => (
                      <SheetClose
                        asChild
                        key={item}
                        className="cursor-pointer text-[#1e1e1e] font-medium"
                      >
                        <li>
                          <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                      </SheetClose>
                    ))}
                  </ul>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </nav>
        </header>

        <section className="w-full flex flex-col justify-center items-center space-y-10">
          <div className="container w-full flex sm:space-x-10 flex-col sm:flex-row px-4 space-y-4 sm:space-y-0 py-8">
            <ul className="text-[#fffafa] space-x-2 sm:space-x-0 sm:space-y-6 py-2 sm:py-10 flex flex-row sm:flex-col">
              {[
                <FacebookIcon
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  strokeWidth={2}
                />,
                <InstagramIcon
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  strokeWidth={2}
                />,
                <YoutubeIcon
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  strokeWidth={2}
                />,
              ].map((item, index) => (
                <li key={index}>
                  <Button
                    variant="secondary"
                    className="text-black p-2"
                    asChild
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="text-[#fffafa] sm:max-w-3xl w-full flex-1 sm:pr-36 space-y-3">
              <h1 className="font-extrabold text-3xl sm:text-5xl">
                Educação tecnológica de qualidade, para um{" "}
                <span className="text-[#3366FF]">futuro inovador</span>
              </h1>
              <p className="text-2xl">
                Uma nova maneira de aprender! Cursos especializados e
                divertidos. Inscreva-se e transforme seu conhecimento!
              </p>
              <div className="inline-flex space-x-4">
                <Button className="bg-[#3366FF] hover:bg-[#3366FF]/90  text-base py-7">
                  Veja nossos cursos
                </Button>
                <Button className="bg-[#33CC00] hover:bg-[#33CC00]/90 py-7 text-base">
                  Fale conosco
                </Button>
              </div>
            </div>
            {/* <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[30.9375rem]"
            >
              <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="p-0 bg-transparent border-none">
                      <CardContent className="flex aspect-square w-full h-full p-0 border-none rounded-md">
                        <img
                          src={`/hero/${index + 1}.jpeg`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
            <CarouselNext />
            </Carousel> */}
          </div>
          <div
            className="container pt-8 pb-28 w-full space-y-6 lg:space-y-0 grid 
          grid-cols-1 lg:grid-cols-3  lg:space-x-[4rem] px-4 lg:px-0"
          >
            {[
              {
                title: "Programação e jogos",
                description:
                  "Descubra o mundo fascinante do desenvolvimento de jogos com nossos cursos especializados. Transforme a sua paixão por jogos em uma carreira promissora.",
                icon: (
                  <Gamepad2Icon
                    className="w-9 h-9 text-red-600"
                    strokeWidth={2}
                  />
                ),
              },
              {
                title: "Raciocínio Lógico",
                description:
                  "Domine a lógica de programação e abra portas para uma carreira em tecnologia. Aprenda a pensar e resolva problemas com desafios reais.",
                icon: (
                  <WaypointsIcon
                    className="w-9 h-9 text-blue-600"
                    strokeWidth={2}
                  />
                ),
              },
              {
                title: "Tecnologia e IA",
                description:
                  "Domine a lógica de programação e abra portas para uma carreira em tecnologia. Aprenda a pensar e resolva problemas com desafios reais.",
                icon: (
                  <BrainIcon
                    className="w-9 h-9 text-green-600"
                    strokeWidth={2}
                  />
                ),
              },
            ].map((item, index) => (
              <Card className="bg-black/80 border-[#fffafa]/20 p-6" key={index}>
                <CardHeader className="space-y-2">
                  {item.icon}
                  <CardTitle className="text-[#fffafa]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#fffafa]">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
