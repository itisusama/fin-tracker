import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { incomeSchema, type IncomeSchema } from "@/lib/zod-schema";
import { addIncome } from "@/functions/finance";

export default function AddIncomeForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<IncomeSchema>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      amount: 0,
      description: "",
      date: "",
    },
  });

  async function onSubmit(values: IncomeSchema) {
    try {
      setLoading(true);
      const success = await addIncome(values);
      if (success) {
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center py-12">
        <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6"
        noValidate
      >
        {/* Amount */}
        <FormField
  control={form.control}
  name="amount"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Amount</FormLabel>
      <FormControl>
        <Input
          type="number"
          step="0.01"
          placeholder="Add Amount"
          value={field.value ?? ""}
          onChange={(e) =>
            field.onChange(
              e.target.value === "" ? undefined : Number(e.target.value)
            )
          }
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Salary / Freelance / Bonus" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="finance" disabled={loading} className="w-full">
          {loading ? "Adding Income..." : "Add Income"}
        </Button>
      </form>
    </Form>
    </div>
  );
}
