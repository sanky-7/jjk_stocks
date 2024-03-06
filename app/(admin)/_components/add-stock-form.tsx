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
import { onAddStock } from "@/actions/stocks";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  currentPrice: z.coerce.number().min(0, {
    message: "Price must be at least 0.",
  }),
  imageUrl: z.string().min(2, {
    message: "Image URL required.",
  }),
});

export const StockAddForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      currentPrice: 0,
      imageUrl: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(() => {
      onAddStock(values.name, values.currentPrice, values.imageUrl)
        .then(() => {
          toast.success(`Stocks of ${values.name} added!`);
        })
        .catch(() => toast.error(`Failed to add stocks of ${values.name}!`))
        .finally(() => {
          form.reset();
        });
    });
  };

  return (
    <div className="bg-secondary p-4 w-[300px] border mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl text-primary">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jujutsu Kaisen" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl text-primary">Current Price</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-xl text-primary">Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="imgbb.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
