import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List from './List';

describe('>>>List Component', () => {
    it('renders li', () => {
        const { getByText } = render(<List list={['a']}/>);
        const li = getByText('a');
        expect(li).toBeInTheDocument();
    });

    it('emit onClick with alert', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const { getByText, container } = render(<List list={['a']}/>);
        const el = getByText('a');
        fireEvent.click(el);

        expect(alertMock).toHaveBeenCalledTimes(1);
    });
});