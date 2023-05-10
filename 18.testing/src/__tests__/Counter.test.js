import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/Counter"


describe('Counter', () => {

    // test that the count increases
    test('count increases', () => {

        // render the component
        render(<Counter />)

        // select the element you want to interact with
        const incrementButton = screen.getByTestId('increment');
        const countElement = screen.getByTestId('count');

        // interact with the element
        fireEvent.click(incrementButton);

        // assert the expected result
        expect(countElement).toHaveTextContent("1");
    })


    // test that the count decreases
    it('decreases count', () => {
        render(<Counter />);

        const decrementButton = screen.getByTestId('decrement');
        const countElement = screen.getByTestId('count');

        fireEvent.click(decrementButton);

        expect(countElement).toHaveTextContent('-1');
    })

})