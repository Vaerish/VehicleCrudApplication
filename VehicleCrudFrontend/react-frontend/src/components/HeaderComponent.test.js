import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from 'axios';
import HeaderComponent from './HeaderComponent.jsx';

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

  act(() => {
    render(<HeaderComponent/>, container);
  });
  
  expect(container.textContent).toMatch("  Vehicle Management App    Code  ");
});
