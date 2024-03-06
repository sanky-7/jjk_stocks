"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DisplayStocks } from "./display-stock";
import { Stock } from "@prisma/client";

interface ContentsProps {
  stocks: Stock[];
}

export const Contents = ({stocks}: ContentsProps) => {
  const [value, setValue] = useState("");
  
  const onClear = () => {
    setValue("");
  };
  
  return (
    <div className="w-full flex flex-col gap-y-14 justify-center items-center">
      <form className="relative md:w-[400px] w-[300px] lg:w-[900px] flex items-center mb-5">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        {value && (
          <X
            className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
            onClick={onClear}
          />
        )}
      </form>
      <div>
        <DisplayStocks searchTerm={value} stocks={stocks} />
      </div>
    </div>
  );
};
