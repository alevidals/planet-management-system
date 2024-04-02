import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ORDER_FIELDS } from "@/lib/constants";
import type { Order, OrderByField } from "@/lib/types";
import { IconEraser } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function PlanetsListsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const search = searchParams.get("search") ?? "";
  const orderBy = (searchParams.get("orderBy") as OrderByField) ?? "";
  const order = (searchParams.get("order") as Order) ?? "asc";

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-4">
      <Input
        size={30}
        className="h-12"
        placeholder="Search planets"
        value={search}
        onChange={(event) => {
          const params = new URLSearchParams(searchParams);
          params.set("search", event.target.value);

          router.replace(`${pathname}?${params.toString()}`);
        }}
      />
      <Select
        value={orderBy}
        onValueChange={(key) => {
          const params = new URLSearchParams(searchParams);
          params.set("orderBy", key);

          router.replace(`${pathname}?${params.toString()}`);
        }}
      >
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {ORDER_FIELDS.map((field) => (
            <SelectItem value={field.value} key={field.value}>
              {field.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={order}
        disabled={!orderBy}
        onValueChange={(key) => {
          const params = new URLSearchParams(searchParams);
          params.set("order", key);

          router.replace(`${pathname}?${params.toString()}`);
        }}
      >
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
      <Button
        size="icon"
        variant="destructive"
        className="shrink-0 h-12 w-12"
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.delete("search");
          params.delete("orderBy");
          params.delete("order");

          router.replace(`${pathname}?${params.toString()}`);
        }}
      >
        <IconEraser />
      </Button>
    </div>
  );
}
