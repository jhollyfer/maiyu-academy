import {
  AlignRightIcon,
  FacebookIcon,
  InstagramIcon,
  X,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
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
    <main className="h-screen w-screen flex flex-col">
      <header className="h-[9.5rem] w-full bg-blue-600 flex justify-center">
        <nav className="container w-full flex justify-between items-center p-3 sm:p-0">
          <img
            src="/logo-light.png"
            alt="Logo Jedais Tec"
            className="w-36 h-14"
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
                  className="w-36 h-10"
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

      <section className="bg-blue-600 w-full flex justify-center py-6 sm:py-20">
        <div className="container w-full flex sm:space-x-10 flex-col sm:flex-row px-4 space-y-4 sm:space-y-0">
          <ul className="text-[#fffafa] space-x-2 sm:space-x-0 sm:space-y-2 py-2 sm:py-10 flex flex-row sm:flex-col">
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
                  className="text-blue-600 p-2"
                  asChild
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
          <div className="text-[#fffafa]  w-full flex-1 sm:pr-36 space-y-3">
            <h1 className="font-extrabold text-3xl sm:text-5xl">
              Educação tecnologia de qualidade, para um futuro inovador
            </h1>
            <p>
              Uma nova maneira de aprender! Cursos especializados e divertidos.
              Inscreva-se e transforme seu conhecimento!
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[30.9375rem]"
          >
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
      </section>
    </main>
  );
}
