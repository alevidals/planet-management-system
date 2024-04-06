import { Pagination, getPages } from "@/components/pagination";
import { render } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

describe("Paginator tests", () => {
  beforeAll(() => {
    vi.mock("next/font/local", () => ({
      default: vi.fn(),
    }));
  });

  test("should return a valid array of pages", () => {
    const pages = getPages({
      currentPage: 1,
      totalPages: 10,
      siblingCount: 1,
      totalPageNumbers: 5,
    });

    expect(pages).toEqual(["1", "2", "3", "4", "5", "...", "10"]);
  });

  test("should return a valid array of pages with a different current page", () => {
    const pages = getPages({
      currentPage: 5,
      totalPages: 10,
      siblingCount: 1,
      totalPageNumbers: 5,
    });

    expect(pages).toEqual(["1", "...", "4", "5", "6", "...", "10"]);
  });

  test("should return a valid array of pages with a different sibling count", () => {
    const pages = getPages({
      currentPage: 5,
      totalPages: 10,
      siblingCount: 2,
      totalPageNumbers: 5,
    });

    expect(pages).toEqual(["1", "...", "3", "4", "5", "6", "7", "...", "10"]);
  });

  test("should render links", () => {
    const screen = render(
      <Pagination currentPage={5} totalItems={20} pageSize={2} />,
    );

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(7);
    screen.unmount();
  });
});
