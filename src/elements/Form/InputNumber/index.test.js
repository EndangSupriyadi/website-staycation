// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import InputNumber from './index'

// class TestInput extends React.Component {
//     state ={
//         value: ""
//     };

//     handleChange = e=> {
//         this.setState({ value: e.target.value});
//     };

//     render() {
//         return ( 
//             <InputNumber
//             max={30}
//             onChange={this.handleChange}
//             name="value"
//             value={this.state.value}
//             />
//         );
//     }
// }

// const setup = () => {
//     const { container} = render(<TestInput />);
//     const input = container.querySelector(`input.form-control[name='value]`);

//     return {
//         input
//     };
// };