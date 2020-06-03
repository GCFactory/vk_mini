import React from 'react';
import PropTypes from 'prop-types';
import { render, fireEvent } from '@testing-library/react';
import List from './List';

function setup(elements)
{
    return render(<List items={elements}/>)
}

describe('>>>List Component', () => {
    it('throws error on invalid props', () => {
        const error = console.error;
        console.error = () => {};
        expect(setup).toThrow();
        console.error = error;
    });

    it('renders li', () => {
        const { container } = setup(['a']);
        const li = container.querySelector('li');
        expect(li).toBeInTheDocument();
    });

    it('emit onClick with alert', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const { getByText } = setup(['a']);
        const el = getByText('a');
        fireEvent.click(el);

        expect(alertMock).toHaveBeenCalledTimes(1);
    });
});