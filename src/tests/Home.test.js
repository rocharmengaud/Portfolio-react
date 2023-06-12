import React from 'react';
import { render, screen /*fireEvent*/ } from '@testing-library/react';
// import { scroller } from 'react-scroll';
import { Home } from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  it('renders component correctly', () => {
    render(<Home />);

    // Check if the required elements are rendered
    expect(screen.getByText(/Hello, my name is/i)).toBeInTheDocument();
    expect(screen.getByText(/Roch ARMENGAUD/i)).toBeInTheDocument();
    expect(screen.getByText(/I'm a junior front-end developer/i)).toBeInTheDocument();
    expect(screen.getByText(/I just graduated from/i)).toBeInTheDocument();
    expect(screen.getByText(/OpenClassRoom's front-end javascript react course/i)).toBeInTheDocument();
    expect(screen.getByText(/and I am now looking for a job/i)).toBeInTheDocument();
    expect(screen.getByText(/Click to scroll to my work/i)).toBeInTheDocument();
  });

  it('renders the link correctly', () => {
    render(<Home />);

    const link = screen.getByRole('link', {
      name: "OpenClassRoom's front-end javascript react course",
    });
    expect(link).toHaveAttribute('href', 'https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react');
    expect(link).toHaveClass('hover:underline text-[#219ebc] cursor-pointer');
  });

  // test('should scroll to the target element when the button is clicked', () => {
  //   render(<Home />);

  //   // Mock the scroll function from react-scroll library
  //   const mockScrollTo = jest.fn();
  //   scroller.scrollTo = mockScrollTo;

  //   // Find the button and trigger a click event
  //   const button = screen.getByTestId('scrollToWork'); // Replace with your actual button test id
  //   fireEvent.click(button);

  //   // Assert that the scroll function was called with the correct arguments
  //   expect(mockScrollTo).toHaveBeenCalledWith('work', {
  //     smooth: true,
  //   });
  // });
});
