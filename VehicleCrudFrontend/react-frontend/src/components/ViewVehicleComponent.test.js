import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from 'axios';
import ViewVehicleComponent from './ViewVehicleComponent.jsx';
import {render, screen} from '@testing-library/react';


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



it("renders table", () => {
  const data = { data: {"id":12,"year":2021,"make":"test","model":"test"},};
  axios.get.mockImplementationOnce(() => Promise.resolve(data));

  render(<ViewVehicleComponent match={{params: {id: 12}}}/>, container);
  expect(screen.getByText('Make:')).toBeInTheDocument();
});

