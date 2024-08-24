import { Avatar, List } from "antd";
import React from "react";
const data = [
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
  { phone: "+2547******125", username: "Machina", amount: "20000" },
];

function Winners() {
  return (
    <div>
      <List
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            key={item.username}
            extra={
              <img
                width={100}
                className="rounded-md"
                alt="logo"
                src={`/games/${index}.webp`}
              />
            }
          >
            <List.Item.Meta
              //   avatar={<Avatar shape="square" src="" />}
              title={
                <div className="text-white font-bold">
                  {item.username}{" "}
                  <span className="text-neon text-xs">{item.phone}</span>
                </div>
              }
              description={
                <div className="text-primary font-bold">{item.amount}</div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Winners;
