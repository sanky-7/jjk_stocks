import { getHighestStock, getStockHistory } from "@/lib/stock-services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = async () => {
  const heroCharacter = await getHighestStock();

  if (!heroCharacter) return null;

  return (
    <div className="w-full object-contain">
      <Card className="bg-[#280000] text-primary mb-10 flex md:flex-row flex-col justify-around items-center border-0 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-full z-0 opacity-20"
          >
            <source src="SukunaHero.mp4" type="video/mp4" />
            {/* Add fallback content for browsers that don't support video */}
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div>
          <CardHeader>
            <CardTitle className="z-[20] text-5xl md:text-6xl text-secondary font-sans">
              Jujutsu Stocks
            </CardTitle>
            <CardDescription className="z-[20] text-secondary/50 text-xl md:text-2xl">
              Invest in goated, recognize the frauds
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <h1 className="text-green-700 underline text-lg md:text-xl">
              Top stock
            </h1>
            <Card className="z-[20] bg-secondary flex flex-row items-center px-4 rounded-lg">
              <div>
                <Avatar className="size-[60px]">
                  <AvatarImage src={heroCharacter.imageUrl} />
                  <AvatarFallback>JJK</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-extrabold text-primary">
                    {heroCharacter.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-gray-700 mt-[-15px]">
                    Current value:{" "}
                    <span className="font-extrabold text-pink-700/70 text-2xl">
                      {heroCharacter.currentPrice}
                    </span>
                  </p>
                </CardContent>
              </div>
            </Card>
          </CardContent>
        </div>
          <Image
            src="/Gokuna.png"
            alt="Sukuna"
            width={400}
            height={400}
            className="z-[21]"
          />
      </Card>
    </div>
  );
};
