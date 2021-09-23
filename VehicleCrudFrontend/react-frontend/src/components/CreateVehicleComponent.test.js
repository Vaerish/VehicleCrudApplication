import {  unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {render, screen} from '@testing-library/react';
import axios from 'axios';
import CreateVehicleComponent from './CreateVehicleComponent.jsx';
import userEvent from '@testing-library/user-event'

jest.mock('axios');

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with id being _add", () => {

  render(<CreateVehicleComponent match={{params: {id: '_add'}}}/>, container);

  let text = screen.getByText(/Add Vehicle/i);
  expect(text).toBeInTheDocument();
});

it("updates with id being _add after model changed", () => {

  render(<CreateVehicleComponent match={{params: {id: '_add'}}}/>, container);


  const input = screen.getByLabelText('model')
  input.setSelectionRange(0, 4)
  userEvent.type(input, '{backspace}test')
  expect(input).toHaveValue('test')  

});

it("updates with id being _add after make changed", () => {

  render(<CreateVehicleComponent match={{params: {id: '_add'}}}/>, container);


  const input = screen.getByLabelText('make')
  input.setSelectionRange(0, 3)
  userEvent.type(input, '{backspace}test')
  expect(input).toHaveValue('test')  

});

it("updates with id being _add after year changed", () => {

  render(<CreateVehicleComponent match={{params: {id: '_add'}}}/>, container);


  const input = screen.getByLabelText('year')
  input.setSelectionRange(0, 3)
  userEvent.type(input, '{backspace}2020')
  expect(input).toHaveValue('2020')  

});

it("renders with id", () => {
  const data = { data: {
      make: 'test', 
      model: 'test',
      year: 12
    }
    };
  axios.get.mockImplementationOnce(() => Promise.resolve(data));

  render(<CreateVehicleComponent match={{params: {id: 12}}}/>, container);

  
  let text = screen.getByText(/Update Vehicle/i);
  expect(text).toBeInTheDocument();
  
});