import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it('renders without crashing', () => {
    render(<Card />)
})

//snapshot tests
it("matches snapshot", function() {
  const { asFragment } = render(<Card
          src= "image1"
          caption= "Photo by Richard Pasquarella on Unsplash"
          currNum="1"
          totalNum="3"
        />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function() {
  const { asFragment } = render(<Card
          src= "image2"
          caption= "Photo by Pratik Patell on Unsplash"
          currNum="1"
          totalNum="3"
        />);
  expect(asFragment()).toMatchSnapshot();
});