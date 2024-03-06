"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useTransition } from "react";
import { onUpdateStock } from "@/actions/stocks";
import { DeleteModal } from "./delete-modal";

interface StockUpdateFormProps {
  id: string;
  price: number;
}

const formSchema = z.object({
  newPrice: z.coerce.number().min(0, {
    message: "Price must be at least 0.",
  }),
});

export const StockUpdateForm = ({ id, price }: StockUpdateFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPrice: price,
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(() => {
      onUpdateStock(id, values.newPrice)
        .then(() => {
          toast.success(`Price updated!`);
        })
        .catch(() => toast.error(`Failed to update the price!`))
        .finally(() => {
          form.reset();
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="newPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Price</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-around">
          <Button disabled={isPending} type="submit">
            Update
          </Button>
          <DeleteModal id={id} />
        </div>
      </form>
    </Form>
  );
};
