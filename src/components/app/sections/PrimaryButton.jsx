import { Button } from "antd";
import React, { Children } from "react";

function PrimaryButton({ children, onClick, href, ...props }) {
  // If href is passed, render the button as a link
  return href ? (
    <a href={href}>
      <Button
        type="outline"
        className="bg-primary mr-2 text-white border-none"
        {...props} // Spread any additional props
      >
        {children}
      </Button>
    </a>
  ) : (
    <Button
      type="outline"
      className="bg-primary mr-2 text-white border-none"
      onClick={onClick}
      {...props} // Spread any additional props
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
