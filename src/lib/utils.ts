import { type ClassValue, clsx } from "clsx";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

type GetHrefArgs = {
  searchParams: URLSearchParams;
  pathname: string;
} & (
  | {
      paramsToSet: Record<string, string | number>[];
      action: "set";
    }
  | {
      paramsToDelete: string[];
      action: "delete";
    }
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHref(args: GetHrefArgs) {
  const { pathname, searchParams, action } = args;

  const params = new URLSearchParams(searchParams);

  if (action === "set") {
    for (const param of args.paramsToSet) {
      const [key, value] = Object.entries(param)[0];
      params.set(key, String(value));
    }
  }

  if (action === "delete") {
    for (const param of args.paramsToDelete) {
      params.delete(param);
    }
  }

  const href = `${pathname}?${params.toString()}`;
  return href;
}

export function capitalize(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const swFont = localFont({
  src: "../../public/fonts/aurebesh.otf",
  display: "swap",
});
