import { Avatar, Card } from "antd";
import { DiamondPlus, Flame, HandCoins, Heart, Trophy } from "lucide-react";
import React from "react";

function JackpotSection() {
  return (
    <div>
      <Card
        loading={false}
        className="w-full bg-background border-none shadow-lg drop-shadow-lg"
        // title="Features"
      >
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex">
            <HandCoins className="text-fuchsia-600 mr-5" />
            <span className="text-white font-bold">Today's Jackpot</span>
          </div>
          <div className="text-white">14,000,000</div>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex">
            <Trophy className="text-amber-600 mr-5" />
            <span className="text-white font-bold">Top Games</span>
          </div>
          <div className="text-white">14</div>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex">
            <Flame className="text-red-600 mr-5" />
            <span className="text-white font-bold">Heated</span>
          </div>
          <div className="text-white">14</div>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex">
            <Heart className="text-blue-600 mr-5" />
            <span className="text-white font-bold">Popular</span>
          </div>
          <div className="text-white">14</div>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex">
            <DiamondPlus className="text-lime-600 mr-5" />
            <span className="text-white font-bold">New</span>
          </div>
          <div className="text-white">14</div>
        </div>
        {/* <Card.Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
        //   title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        /> */}
      </Card>
    </div>
  );
}

export default JackpotSection;
