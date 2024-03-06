import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface StocksCardProps {
  name: string;
  price: number;
  id: string;
  image: string;
}

export const StocksCard = ({ name, price, id, image }: StocksCardProps) => {
  return (
    <Link href={id}>
      <Card className="bg-secondary hover:bg-gray-400/30 text-primary w-[300px] m-4 mb-[70px]">
        <div className="flex justify-center">
          <Avatar className="overflow-hidden size-[130px] p-0 mb-[-15px] mt-[-60px]">
            <AvatarImage src={image} />
            <AvatarFallback>JJK</AvatarFallback>
          </Avatar>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Current price:{" "}
            <span className="text-2xl font-extrabold">{price}</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
