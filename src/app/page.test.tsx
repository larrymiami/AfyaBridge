import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders the AfyaBridge welcome content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Welcome to AfyaBridge",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/community health referral and follow-up platform/i),
    ).toBeInTheDocument();
  });
});
