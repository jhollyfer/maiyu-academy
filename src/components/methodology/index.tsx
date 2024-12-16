import { methodologyData } from "@/utils/temp-data";
import { SectionTitle } from "../section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export function Methodology() {
  return (
    <div className="container w-full flex sm:space-x-10 flex-col sm:flex-row px-4 space-y-4 sm:space-y-0 py-8">
      <div className="flex flex-col space-y-6 w-full">
        <SectionTitle
          title="Metodologia"
          label="Aprendizado otimizado com a metodologia dos jedais"
        />

        <div className="flex space-x-4">
          {methodologyData.map((methodology, index) => (
            <Card
              className="bg-[#F0F0F0] border-none flex-1 flex flex-col"
              key={index}
            >
              <CardHeader className="space-y-3 h-[200px] flex flex-col">
                <div>
                  <Badge className="rounded-full p-4 px-5 text-xl bg-[#3366FF] hover:bg-[#3366FF]/90">
                    {methodology.id}
                  </Badge>
                </div>
                <CardTitle className="text-start">
                  {methodology.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow justify-between">
                <CardDescription className="min-h-[100px] line-clamp-4">
                  {methodology.description}
                </CardDescription>

                <div className="flex flex-col space-y-2 mt-4">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Tempo</p>
                    <p className="font-semibold">{methodology.time}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Período</p>
                    <p className="font-semibold">{methodology.fromTo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
