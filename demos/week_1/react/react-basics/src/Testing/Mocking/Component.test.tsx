import { render, screen } from '@testing-library/react';
import * as api from './api';
import Component from './Component';

jest.mock('./api');

test('Renders data fetched from API', async () => {
    (api.fetchData as jest.Mock).mockResolvedValue([{userId: 1, id: 1, title: "hello", body: "body"}]);

    render(<Component/>);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    const resolvedMessage = await screen.findByText(/hello/i);
    expect(resolvedMessage).toBeInTheDocument();
})