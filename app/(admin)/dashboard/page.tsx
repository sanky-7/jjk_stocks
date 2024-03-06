import Link from "next/link";
import { StockAddForm } from "../_components/add-stock-form";
import { Button } from "@/components/ui/button";
import { ListStocks } from "../_components/list-stocks";

const Dashboard = () => {

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold font-sans text-primary mb-4">Add a Character Stock</h1>
        <StockAddForm />
        <h1 className="text-3xl md:text-5xl font-extrabold font-sans text-primary mt-20 mb-10 pb-10">All the Characters</h1>
        <ListStocks />
      </div>
      <Link className="my-20" href="/">
        <Button>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Dashboard;
