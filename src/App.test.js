import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//smoke test - lightweight way to verify most important things work (very general tests like base of building a house)
test('it renders without crashing', () => {
    render(<App />)
})