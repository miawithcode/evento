import React from "react";

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
      {children}
    </h1>
  );
};
export default Heading;
