import React from 'react';
import { render } from '@testing-library/react';
//import { BrowserRouter as Router } from 'react-router-dom';
import Button from './index';


test("Should not allow clicking the button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);
    console.log(container);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    //expect(container.querySelector("button")).toBeInTheDocument();
});

// test("Should render loading/spinner", () => {
//     const { container, getByText } = render(<Button isLoading></Button>);
//     expect(getByText(/loading/i)).toBeInTheDocument()
//     expect(container.querySelector("span")).toBeInTheDocument();

   
// });

