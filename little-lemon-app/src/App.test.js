import { render, fireEvent, screen } from "@testing-library/react";
import BookingPage from "./pages/BookingPage";


test("submits form info to the server", () => {
    render(<BookingPage />);

 const heading = screen.getByTestId("submit-form-info");

 const btn = screen.getByTestId("submits form info to the server");

 fireEvent.click(btn)

 expect(heading).toHaveTextContent("render confirmed booking page");
 
});