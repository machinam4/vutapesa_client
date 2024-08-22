import { Button } from "antd";
import React from "react";

function SecondaryButton({ children, onClick, href, ...props }) {
  // If href is passed, render the button as a link
  return href ? (
    <a href={href}>
      <Button
        type="outline"
        className="bborder border-primary text-primary"
        {...props} // Spread any additional props
      >
        {children}
      </Button>
    </a>
  ) : (
    <Button
      type="outline"
      className="border border-primary text-primary"
      onClick={onClick}
      {...props} // Spread any additional props
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;
