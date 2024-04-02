import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as SPagination,
} from "@/components/ui/pagination";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalItems: number;
  pageSize?: number;
  siblingCount?: number;
};

type GetPagesArgs = {
  currentPage: number;
  totalPages: number;
  siblingCount: number;
  totalPageNumbers: number;
};

function getPages(args: GetPagesArgs) {
  const { currentPage, totalPages, siblingCount, totalPageNumbers } = args;

  if (totalPageNumbers >= totalPages) {
    const pages: string[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i.toString());
    }

    return pages;
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange: string[] = [];

    for (let i = 1; i <= leftItemCount; i++) {
      leftRange.push(i.toString());
    }

    return [...leftRange, "...", totalPages.toString()];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange: string[] = [];

    for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) {
      rightRange.push(i.toString());
    }

    return ["1", "...", ...rightRange];
  }

  const middleRange: string[] = [];

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    middleRange.push(i.toString());
  }

  return ["1", "...", ...middleRange, "...", totalPages.toString()];
}

export function Pagination(props: Props) {
  const {
    currentPage,
    totalItems,
    pageSize = ITEMS_PER_PAGE,
    siblingCount = 1,
  } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const totalPages = Math.ceil(totalItems / pageSize);
  const totalPageNumbers = siblingCount + 5;

  const pages = getPages({
    currentPage,
    totalPages,
    siblingCount,
    totalPageNumbers,
  });

  function getHref(page: string | number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    const href = `${pathname}?${params.toString()}`;

    return href;
  }

  return (
    <SPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getHref(currentPage - 1)}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            className={cn(
              currentPage === 1 ? "pointer-events-none opacity-50" : "",
            )}
          />
        </PaginationItem>
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={index + page}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={index + page}>
              <PaginationLink
                href={getHref(page)}
                isActive={currentPage === Number(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            href={getHref(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
            className={cn(
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : "",
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </SPagination>
  );
}
