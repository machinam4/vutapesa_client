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

function Withdrawals() {
  return (
    <div>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.username}>
            <List.Item.Meta
              title={
                <div className="text-white font-bold">{item.username}</div>
              }
              description={
                <div className="text-white text-sm">{item.phone}</div>
              }
            />
            <div className="text-primary font-bold">{item.amount}</div>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Withdrawals;
