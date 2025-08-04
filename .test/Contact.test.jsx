import { render, screen } from "@testing-library/react";
import Contact from "../src/pages/Contact";
import { expect, test } from "vitest";

test("Should Load The Contact Us Component", () => {
  // first render the component to dom
  render(<Contact />);
  const heading = screen.getByRole("heading", {
    name: /Contact Us - Undu Magizh/i,
  });

  expect(heading).toBeInTheDocument();
});

test("Should load the button element inside the contact component", () => {
  render(<Contact />);
  const button = screen.getByRole("button", { name: /Send Message/i });
  expect(button).toBeInTheDocument();
});
