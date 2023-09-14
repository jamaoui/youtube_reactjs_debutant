import Sum from "./Sum";
import {render,screen} from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test('hello', () => {
    const name = 'JAMAOUI'
    render(<HelloWorld name={name}/>)
    const element = screen.getByRole('name')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(name)
})