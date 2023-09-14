import Sum from "./Sum";
import {render, screen, waitFor} from "@testing-library/react";
import renderer from 'react-test-renderer'

describe('unit tests', () => {

    // Mocks

    test('sum', () => {
        const expected = 5
        render(<Sum a={2} b={3}/>)
        const element = screen.getByTestId('sum')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(expected)
        expect(element).not.toHaveClass('sum')
    })

    test('class', async () => {
        render(<Sum a={2} b={3}/>)
        const element = screen.getByTestId('sum')
        expect(element).not.toHaveClass('sum')

        // render , jibo
        // click , ....
        // Expect
    })
    test('snapshot',() => {
        let root = renderer.create(<Sum a={3} b={3}/>)
        expect(root.toJSON()).toMatchSnapshot()
    })
})
