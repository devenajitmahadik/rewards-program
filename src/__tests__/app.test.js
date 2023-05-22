import React from "react";
import  { render, screen } from "@testing-library/react"
import App from "../App";

describe("App Componnet", () => {
    test("Should Display Header", () => {
        render(<App />);
        expect(screen.getByTestId('app-header')).toBeInTheDocument();
        expect(screen.getByTestId('app-header').innerHTML).toBe("Rewards Program");
    });

    test("Should display Loader", () => {
        render(<App />);
        expect(screen.getByTestId("loader")).toBeTruthy();
        expect(screen.queryByTestId('rewards-points')).toBeFalsy();
    });
})