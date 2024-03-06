
import { Stock } from "@prisma/client";
import { StocksCard } from "./stock-card";

interface DisplayStocksProps {
  searchTerm: string;
  stocks: Stock[];
}

export const DisplayStocks = ({searchTerm, stocks}: DisplayStocksProps) => {

  if(searchTerm) {
    const filteredStocks = stocks.filter((stock) => stock.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredStocks.map((stock) => (
              <div key={stock.id}>
                  <StocksCard name={stock.name} price={stock.currentPrice} id={stock.id} image={stock.imageUrl} />
              </div>
          ))}
      </div>
    )
  } else {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {stocks.map((stock) => (
            <div key={stock.id}>
                <StocksCard name={stock.name} price={stock.currentPrice} id={stock.id} image={stock.imageUrl} />
            </div>
        ))}
    </div>
  )}
}