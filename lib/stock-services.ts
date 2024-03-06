import { db } from "./db";

export const addStock = async (name: string, currentPrice: number, imageUrl: string) => {
  const stock = await db.stock.create({
    data: {
      name,
      currentPrice,
      imageUrl,
    },
  });

  await db.stockHistory.create({
    data: {
      stockId: stock.id,
      price: currentPrice,
    },
  });

  return stock;
};

export const getStocks = async () => {
  const stocks = db.stock.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return stocks;
};

export const getHighestStock = async () => {
  const stock = db.stock.findFirst({
    orderBy: {
      currentPrice: "desc",
    },
  });

  return stock;
};

export const updateStock = async (id: string, newPrice: number) => {
  const updatedStock = await db.stock.update({
    where: { id },
    data: {
      currentPrice: newPrice,
    },
  });

  await db.stockHistory.create({
    data: {
      stockId: updatedStock.id,
      price: newPrice,
    },
  });

  return updatedStock;
};

export const deleteStock = async (id: string) => {
  const deletedStock = await db.stock.delete({
    where: { id },
  });

  await db.stockHistory.deleteMany({
    where: {
      stockId: id,
    },
  });

  return deletedStock;
};

export const getCharacterStocks = async (id: string) => {
  const stocks = db.stock.findUnique({
    where: {
      id: id,
    },
  });

  return stocks;
}

export const getStockHistory = async (id: string) => {
  const stockHistory = await db.stockHistory.findMany({
    where: {
      stockId: id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  const prices = stockHistory.map((history) => history.price);
  const dates = stockHistory.map((history) => history.createdAt);
  return { prices, dates };
}