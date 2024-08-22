import React from "react";
import { Button } from "antd";

function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <img
        src="vutapesa_logo.png"
        alt="vutapesa logo"
        className="h-14 ml-10 mt-2"
      />
      <div>
        <Button
          type="outline"
          className="mx-2 bg-info hover:bg-secondary border-none hover:border text-white font-bold text-md"
        >
          PROMOTIONS
        </Button>
        <Button
          type="outline"
          className="bg-primary mr-2 text-white border-none"
        >
          Login
        </Button>
        <Button type="outline" className="border border-primary text-primary">
          Register
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
