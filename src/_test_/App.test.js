import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Header tests", () => {
  //Makes sure that the application always has this specific text as the heading
it("should find the test of the header", () => {
  // what file we are testing
  render(<App />);
  // query methods we are using
  const headerElement = screen.getByText(/My Calculator/i);
  // assertions
  expect(headerElement).toBeInTheDocument();
});

it('should find the element of the header', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', {name: "My Calculator"});
  expect(headingElement).toBeInTheDocument
});

it("should have a h1 tag as the main header element", () => { 
  render(<App />);
  const headingElementType = screen.getByText(/My Calculator/i)
  expect(headingElementType).toContainHTML('h1');
});
})


describe("functional tests", () => {

it('should display 4 when the user enters 2 + 2', () => {
  render (<App />)
  const twoButton = screen.getByText('2');
  const plusButton = screen.getByText('+');
  const equalsButton = screen.getByText('=');

  fireEvent.click(twoButton)
  fireEvent.click(plusButton)
  fireEvent.click(twoButton)
  fireEvent.click(equalsButton)

  const display = screen.getByTestId('display')
  expect(display).toHaveTextContent('4')
})

//Should display 3 when a user enters 6/2
it('should display 3 when the user enters 6 / 2', () => {
  render (<App />)
  const sixButton = screen.getByText('6');
  const twoButton = screen.getByText('2');
  const divideButton = screen.getByText('/');
  const equalsButton = screen.getByText('=');

  fireEvent.click(sixButton)
  fireEvent.click(divideButton)
  fireEvent.click(twoButton)
  fireEvent.click(equalsButton)

  const display = screen.getByTestId('display')
  expect(display).toHaveTextContent('3')
})

//Should display 6 when a user enters 3*2
it('should display 6 when the user enters 3 * 2', () => {
  render (<App />)
  const threeButton = screen.getByText('3');
  const twoButton = screen.getByText('2');
  const timesButton = screen.getByText('*');
  const equalsButton = screen.getByText('=');

  fireEvent.click(threeButton)
  fireEvent.click(timesButton)
  fireEvent.click(twoButton)
  fireEvent.click(equalsButton)

  const display = screen.getByTestId('display')
  expect(display).toHaveTextContent('6')
})

})