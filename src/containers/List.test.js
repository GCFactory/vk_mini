import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

describe('>>>List Component', () => {
    it('renders li', () => {
        const { getByText } = render(<List list={['a']}/>);
        const linkElement = getByText('a');
        expect(linkElement).toBeInTheDocument();
    });
});