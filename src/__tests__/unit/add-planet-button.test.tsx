import { AddPlanetButton } from "@/components/ui/add-planet-button";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Add planet button tests", () => {
  test("should render the button", () => {
    const screen = render(<AddPlanetButton />);

    const button = screen.getByRole("button", { name: "Add planet" });

    expect(button).toBeDefined();
    screen.unmount();
  });

  test("should render the dialog after clicking the button", () => {
    const screen = render(<AddPlanetButton />);

    const button = screen.getByRole("button", { name: "Add planet" });
    fireEvent.click(button);

    const dialog = screen.getByRole("dialog", { name: "Add planet" });

    expect(dialog).toBeDefined();
    screen.unmount();
  });
});
