import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from 'axios';
import ListVehicleComponent from './ListVehicleComponent.jsx';


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
  const data = { data: [{"id":12,"year":2021,"make":"test","model":"test"},]};
  axios.get.mockImplementationOnce(() => Promise.resolve(data));
  act(() => {
    render(<ListVehicleComponent match={{params: {id: 12}}}/>, container);
  });
  
  expect(container.textContent).toContain("Vehicles List Add Vehicle  Make  Model  Year  Actions ");
});

