import React from "react";
import './RewardPointsRow.scss';

const RewardsPointsRow = (props) => {
    const { month, points, isTotalPoints } = props;
    return (
        <div data-testid="reward-points-row" key={month} className={"reward-points-row" + (isTotalPoints ? " total" : "")}>
            <div data-testid="month" className="month">{month}</div>
            <div data-testid="points" className="points">{points}</div>
        </div>
    )
}

export default RewardsPointsRow;