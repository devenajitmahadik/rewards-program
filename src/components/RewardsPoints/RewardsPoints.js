import React from "react";
import RewardsPointsRow from "./RewardPointsRow";
import './RewardsPoints.scss';

const RewardsPoints = (props) => {
    const { customerName, customerRewards } = props;
    let totalRewardPoints = 0;

    return (
        <div data-testid="rewards-points" className="rewards-points">
            <h3 data-testid="heading">{customerName}'s reward points:</h3>
            <div className="rewards-points-table">
                {
                    Object.entries(customerRewards).map(([month, points]) => {
                        totalRewardPoints += points;
                        return (
                            <RewardsPointsRow
                                key={month}
                                month={month}
                                points={points}
                            />
                        )
                    })}
                <RewardsPointsRow
                    isTotalPoints
                    month="Total"
                    points={totalRewardPoints}
                />
            </div>
        </div>
    )
}

export default RewardsPoints;