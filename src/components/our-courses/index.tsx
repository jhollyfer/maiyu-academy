import { SectionTitle } from "../section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { coursesData } from "../../utils/temp-data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function OurCourses() {
  return (
    <div className="container w-full flex sm:space-x-10 flex-col sm:flex-row px-4 space-y-4 sm:space-y-0 py-8">
      <div className="flex flex-col space-y-6 w-full">
        <SectionTitle
          title="Nossos Cursos"
          label="Alavanque o seu aprendizado com os melhores conteúdos"
        />

        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="!w-full">
              {coursesData.map((course, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 w-full"
                >
                  <Card className="p-0 bg-[#F0F0F0]  border-none space-y-4">
                    <CardHeader className="space-y-3 pb-0">
                      <CardTitle className="font-extrabold">
                        {course.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {course.badges.map((badge, index) => {
                          let prefixText = "";

                          if (badge.year) {
                            prefixText = "Idade";
                          } else if (badge.nivel) {
                            prefixText = "Nível";
                          } else if (badge.duration) {
                            prefixText = "Duração";
                          }

                          const badgeText =
                            badge.year || badge.nivel || badge.duration;

                          return (
                            <div
                              key={index}
                              className="flex flex-col items-start"
                            >
                              <p className="text-[11px] text-muted-foreground">
                                {prefixText}
                              </p>
                              <Badge variant={"jedais"}>{badgeText}</Badge>
                            </div>
                          );
                        })}
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-full">
                      <CardDescription>{course.description}</CardDescription>
                      <div className="flex mt-4">
                        <Button className="bg-[#3366FF] hover:bg-[#3366FF]/90 text-base py-6 rounded-full">
                          Saiba Mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex space-x-2 absolute right-0 mt-4 pb-10">
              <CarouselPrevious isAside={false} className="rotate-360" />
              <CarouselNext isAside={false} className="rotate-360" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
