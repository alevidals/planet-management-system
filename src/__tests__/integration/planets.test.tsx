import { PlanetsList } from "@/components/planets-list";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, test, vi } from "vitest";

const planets = [
  {
    id: "1",
    name: "Tatooine",
    diameter: 10465,
    climates: [{ climate: "arid" }],
    terrains: [{ terrain: "desert" }],
    residents: [],
  },
  {
    id: "2",
    name: "Alderaan",
    diameter: 12500,
    climates: [{ climate: "temperate" }],
    terrains: [{ terrain: "grasslands" }, { terrain: "mountains" }],
    residents: [],
  },
];

describe("Planets page test", () => {
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

  test("should display one planet card after delete one", async () => {
    const screen = render(<PlanetsList planets={planets} />);

    const buttons = screen.getAllByRole("button");
    const firstPlanetDropdown = buttons[1];

    await userEvent.click(firstPlanetDropdown);

    const deletePlanetButton = screen.getByRole("menuitem", {
      name: "Delete Delete the planet permanently",
    });

    await userEvent.click(deletePlanetButton);

    const confirmDeleteButton = screen.getByRole("button", {
      name: "Delete",
    });

    await userEvent.click(confirmDeleteButton);
    const cards = screen.getAllByText("Climates");

    expect(cards.length).toBe(1);
    screen.unmount();
  });

  test("should display the new name after edit", async () => {
    const screen = render(<PlanetsList planets={planets} />);
    const buttons = screen.getAllByRole("button");
    const firstPlanetDropdown = buttons[1];

    await userEvent.click(firstPlanetDropdown);

    const editPlanetButton = screen.getByRole("menuitem", {
      name: "Edit Edit planet",
    });

    await userEvent.click(editPlanetButton);

    const nameInput = screen.getByRole("textbox", {
      name: "Name",
    });

    await userEvent.click(nameInput);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Edited");

    const confirmEditButton = screen.getByRole("button", {
      name: "Save changes",
    });

    await userEvent.click(confirmEditButton);

    const editedCard = screen.getByText("Edited");

    expect(editedCard).toBeDefined();
  });
});
