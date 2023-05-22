import React from "react";
import { render, screen } from "@testing-library/react"
import RewardsPointsRow from "../components/RewardsPoints/RewardPointsRow.js";

describe("Rewards Point row component", () => {
    test("Should display Rewards Points per month", () => {
        const month = "March";
        const points = "120";
        render(<RewardsPointsRow month={month} points={points} />);
        expect(screen.getByTestId('reward-points-row')).toBeTruthy();
        expect(screen.getByTestId('month').innerHTML).toBe(month);
        expect(screen.getByTestId('points').innerHTML).toBe(points);
    });

    test("Should display Rewards Points total", () => {
        const month = "Total";
        const points = "1120";
        const isTotalPoints = true;
        render(<RewardsPointsRow month={month} points={points} isTotalPoints={isTotalPoints} />);
        expect(screen.getByTestId('reward-points-row')).toBeTruthy();
        expect(screen.getByText("Total").innerHTML).toBe(month);
        expect(screen.getByTestId('points').innerHTML).toBe(points);
    });
})