import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StockUpdateForm } from "./update-stocl-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StocksCardProps {
  name: string;
  price: number;
  id: string;
  image: string;
}

export const StocksCard = async ({ name, price, id, image }: StocksCardProps) => {
  return (
    <Card className="bg-secondary text-primary w-[300px] m-4 mb-10">
      <div className="flex justify-center">
        <Avatar className="overflow-hidden size-[90px] p-0 mb-[-15px] mt-[-40px]">
          <AvatarImage src={image} />
          <AvatarFallback>JJK</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Current price: <span className="font-extrabold">{price}</span>
        </p>
        <div className="mt-6">
          <StockUpdateForm id={id} price={price} />
        </div>
      </CardContent>
    </Card>
  );
};
