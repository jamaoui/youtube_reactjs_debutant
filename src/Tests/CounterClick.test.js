import Sum from "./Sum";
import {fireEvent, render, screen} from "@testing-library/react";
import CounterClick from "../Hoc/CounterClick";

describe('increment/decrement', () => {
    test('count default value', () => {
        render(<CounterClick title={'Counter'}/>)
        const element = screen.getByTestId('count')
        expect(element).toHaveTextContent(0)
    })
    test('increment', () => {
        render(<CounterClick title={'Counter'}/>)
        const element = screen.getByTestId('count')
        const incrementBtn = screen.getByTestId('increment')
        fireEvent.click(incrementBtn)
        fireEvent.click(incrementBtn)
        fireEvent.click(incrementBtn)
        expect(element).toHaveTextContent(3)
    })
})
