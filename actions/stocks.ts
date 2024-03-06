"use server"

import { addStock, deleteStock, updateStock } from "@/lib/stock-services"
import { revalidatePath } from "next/cache";

export const onAddStock = async (name: string, currentPrice: number, imageUrl: string) => {
    try {
        const addedStock = await addStock(name, currentPrice, imageUrl);
        revalidatePath("/dashboard");
        revalidatePath("/");
        return addedStock;
    } catch (err) {
        console.log(err)
    }
}

export const onUpdateStock = async (id: string, newPrice: number) => {
    try {
        const updatedStock = await updateStock(id, newPrice);
        revalidatePath("/dashboard");
        revalidatePath("/");
        return updatedStock;
    } catch (err) {
        console.log(err)
    }
}

export const onDeleteStock = async (id: string) => {
    try {
        const deletedStock = await deleteStock(id);
        revalidatePath("/dashboard");
        revalidatePath("/");
        return deletedStock;
    } catch (err) {
        console.log(err)
    }
}