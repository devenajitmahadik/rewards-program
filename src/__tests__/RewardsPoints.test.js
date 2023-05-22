import React from "react";
import { render, screen } from "@testing-library/react"
import RewardsPoints from "../components/RewardsPoints/RewardsPoints";

describe("Rewards Point component", () => {
    test("Shoule display Rewards Points component", () => {
        const customerName = "Deven";
        const customerRewards = {
            'February' : 152,
            'January' : 138,
            'March' : 758
        }
        render(<RewardsPoints customerName={customerName} customerRewards={customerRewards} />);
        expect(screen.queryByTestId('loader')).toBeFalsy();
        expect(screen.getByTestId('rewards-points')).toBeTruthy();
        expect(screen.getByTestId('heading').innerHTML).toBe("Deven's reward points:");
    });
})