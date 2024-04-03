import { PlanetsListsFilter } from "@/components/planets-lists-filter";
import { fireEvent, render } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

describe("Planets lists filter", () => {
  beforeAll(() => {
    vi.mock("next/navigation", () => ({
      useRouter: () => ({
        replace: vi.fn(),
      }),
      useSearchParams: () => ({
        get: vi.fn(),
      }),
      usePathname: vi.fn(),
    }));
  });

  test("should show filters button with 'Show filters' text", () => {
    const screen = render(<PlanetsListsFilter />);

    const button = screen.getByRole("button", { name: "Show filters" });

    expect(button.textContent).toBe("Show filters");
    screen.unmount();
  });

  test("should show filters button with 'Hide filters' text", () => {
    const screen = render(<PlanetsListsFilter />);

    const button = screen.getByRole("button", { name: "Show filters" });

    fireEvent.click(button);

    expect(button.textContent).toBe("Hide filters");
    screen.unmount();
  });

  test("should show filter and sort options", () => {
    const screen = render(<PlanetsListsFilter />);

    const button = screen.getByRole("button", { name: "Show filters" });
    fireEvent.click(button);

    const searchInput = screen.getByRole("textbox");
    const selects = screen.getAllByRole("combobox");

    expect(searchInput).toBeDefined();
    expect(selects).toHaveLength(2);
    screen.unmount();
  });

  test("should show disabled sort field", () => {
    const screen = render(<PlanetsListsFilter />);

    const button = screen.getByRole("button", { name: "Show filters" });
    fireEvent.click(button);

    const selects = screen.getAllByRole("combobox");
    const orderSelect = selects[1];

    expect(orderSelect).toHaveProperty("disabled", true);
    screen.unmount();
  });
});
