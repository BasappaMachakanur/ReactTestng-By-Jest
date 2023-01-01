import {render,screen,fireEvent} from "@testing-library/react"
import Counter from "./Counter"
import '@testing-library/jest-dom/extend-expect';

test("Counter component",()=>{
    //render the component 
    render(<Counter/>);

    //take which html element want to test 
    const element=screen.getByTestId("counter");
    const Incrementbtn=screen.getByTestId("increment");

    //click on button in testing means fireevent
    fireEvent.click(Incrementbtn);
    
   //after button clicked expected result
    expect(element).toHaveTextContent("1")

})

