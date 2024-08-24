import React from "react";
import { Avatar, Card, Tabs } from "antd";
import { DiamondPlus, Flame, HandCoins, Heart, Trophy } from "lucide-react";
import Withdrawals from "./Withdrawals";
import Winners from "./Winners";

function WinnersSections() {
  return (
    <div className="mt-4">
      <Card
        loading={false}
        className="w-full bg-background border-none shadow-lg drop-shadow-lg"
        // title="Features"
      >
        <Tabs
          type="card"
          centered
          items={[
            {
              label: <div className="text-primary">WINNERS</div>,
              key: 1,
              children: <Winners />,
            },
            {
              label: <div className="text-primary">WITHDRAWALS</div>,
              key: 2,
              children: <Withdrawals />,
            },
          ]}
        />
      </Card>
    </div>
  );
}

export default WinnersSections;
