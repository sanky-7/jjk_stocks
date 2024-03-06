import LineChart from "@/components/line-chart";
import { getCharacterStocks, getStockHistory } from "@/lib/stock-services";

interface CharacterStockPageProps {
    params: {
      id: string;
    };
  };

  const CharacterStockPage = async ({
    params,
  }: CharacterStockPageProps) => {

    const character = await getCharacterStocks(params.id);

    if (!character) {
      return <div>Character not found</div>;
    }

    const { prices, dates } = await getStockHistory(params.id);

    const isProfit = prices[prices.length - 1] > prices[prices.length - 2];

    const indexes = dates.map((date) => {
      const month = date.toLocaleString("default", { month: "long" }); 
      const day = date.getDate(); 
      return `${month} ${day}`;
    });

  return (
    <div className="mt-[100px] w-[400px] md:w-[800px] lg:w-[1000px]">
    <LineChart prices={prices} indexes={indexes} name={character.name} isProfit={isProfit} />
    </div>
  )
}

export default CharacterStockPage;