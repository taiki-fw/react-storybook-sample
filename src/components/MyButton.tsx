import React from "react";

type Props = {
  theme: "primary" | "secondary";
};

const MyButton: React.FC<Props> = ({ theme }) => {
  return <div>{theme}</div>;
};

export default MyButton;
