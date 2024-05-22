import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    expect(screen.getByText("Nos services")).toBeInTheDocument();
    expect(screen.getByText("Nos réalisations")).toBeInTheDocument();
    expect(screen.getByText("Notre équipe")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  describe("and a click is triggered on contact button", () => {
    it("scroll to the contact section", async () => {
      // Mock document.getElementById to return an element with scrollIntoView
      const scrollIntoViewMock = jest.fn();
      jest.spyOn(document, 'getElementById').mockReturnValue({
        scrollIntoView: scrollIntoViewMock,
      });

      render(<Menu />);
      fireEvent.click(screen.getByText("Contact"));

      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

      // Restore the original implementation
      document.getElementById.mockRestore();
    });
  });
});
