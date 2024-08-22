import { Avatar, Segmented } from "antd";
import { AppstoreFilled, HomeFilled } from "@ant-design/icons";
import React from "react";
import { BadgeDollarSign, Gem, PlaneTakeoff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuTab } from "../../../redux/appLayout/actionCreator";

function TabBar() {
  const dispatch = useDispatch();
  const { currentTab } = useSelector((state) => {
    return { currentTab: state.appLayout.currentTab };
  });

  const handleChangeMenuTab = (tab) => {
    return dispatch(changeMenuTab(tab));
  };
  return (
    <div>
      <Segmented
        className="bg-transparent text-white hover:text-white"
        defaultValue={currentTab}
        onChange={handleChangeMenuTab}
        options={[
          {
            label: (
              <div className="flex items-center">
                <HomeFilled className="text-neon text-2xl p-2" />
                <div className="p-0 text-sm">Home</div>
              </div>
            ),
            value: "home",
          },
          {
            label: (
              <div className="flex items-center">
                <PlaneTakeoff className="text-red-700 p-2" size={45} />
                <div className="p-0 text-sm">Aviator</div>
              </div>
            ),
            value: "aviator",
          },
          {
            label: (
              <div className="flex items-center">
                <Gem className="text-neon p-2" size={45} />
                <div className="p-0 text-sm">Games</div>
              </div>
            ),
            value: "games",
          },
          {
            label: (
              <div className="flex items-center">
                <BadgeDollarSign className="text-neon p-2" size={45} />
                <div className="p-0 text-sm">Casino</div>
              </div>
            ),
            value: "casino",
          },
        ]}
      />
    </div>
  );
}

export default TabBar;
