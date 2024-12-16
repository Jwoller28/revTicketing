import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

test('handles user input and form submission', () => {
    const mockSubmit = jest.fn();

    render(<Login onSubmit={mockSubmit}/>);

    const input = screen.getByPlaceholderText(/enter username/i);
    fireEvent.change(input, {target: {value: "John"}});

    const button = screen.getByText(/submit/i);

    fireEvent.click(button);

    expect(mockSubmit).toHaveBeenCalledWith("John");
})