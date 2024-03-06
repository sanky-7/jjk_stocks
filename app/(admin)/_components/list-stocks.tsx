import { getStocks } from "@/lib/stock-services";
import { StocksCard } from "./stocks-card";


export const ListStocks = async () => {

    const stocks = await getStocks();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {stocks.map((stock) => (
            <div key={stock.id}>
                <StocksCard name={stock.name} price={stock.currentPrice} id={stock.id} image={stock.imageUrl} />
            </div>
        ))}
        </div>
    );
}