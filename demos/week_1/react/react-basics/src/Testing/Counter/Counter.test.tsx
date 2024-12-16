import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"

test('renders counter and increments count by one', () => {
    // AAA
    // Arrange
        // setting up your test environment to be ready for testing
    // Action
        // You are performing the action that you want to verify
    // Assert
        // You are verifying that the action performed the behavior you expected

    // arrange
    render(<Counter/>);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent("Count: 0");

    const button = screen.getByText(/increment/i);
    fireEvent.click(button);

    expect(countElement).toHaveTextContent("Count: 1");

})