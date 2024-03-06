"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useTransition, useRef, ElementRef } from "react";
import { toast } from "sonner";
import { onDeleteStock } from "@/actions/stocks";

interface DeleteModalProps {
  id: string;
}

export const DeleteModal = ({ id }: DeleteModalProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = () => {
    startTransition(() => {
      onDeleteStock(id)
        .then(() => {
          toast.success("Chacter Stock deleted!");
          closeRef.current?.click();
        })
        .catch(() => toast.error("Failed to delete character stock!"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-black">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Character Stock</DialogTitle>
        </DialogHeader>
        <Alert className="bg-red-100/40">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will delete the selected Character Stock from the
            database. Are you sure you want to continue?
          </AlertDescription>
        </Alert>
        <div className="flex justify-between">
          <DialogClose ref={closeRef}>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button
            disabled={isPending}
            onClick={onSubmit}
            className="bg-red-600 hover:bg-black"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
