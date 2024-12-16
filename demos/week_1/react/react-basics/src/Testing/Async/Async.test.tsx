import { render, screen } from "@testing-library/react"
import Async from "./Async"

test('displays loading initially and renders data after async operation', async () => {
    render(<Async/>);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    const resolvedText = await screen.findByText(/hello, async/i);
    expect(resolvedText).toBeInTheDocument();
})