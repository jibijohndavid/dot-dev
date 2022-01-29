import React from "react";

type TitleProps = {
  value: string;
  valueInColor: string;
};

const Title = ({ value, valueInColor }: TitleProps) => (
  <p className="text-2xl text-gray-300 text-center">
    {`${value} `}
    <span className="text-indigo-400 font-bold">{valueInColor}</span>
  </p>
);

const Header = () => {
  return (
    <header className="flex items-center justify-center h-80 bg-dark bg-header-img bg-left">
      <section className="mt-32">
        <Title value="Hello 👋, I'm" valueInColor="Jibi John David." />
        <Title
          value="Javascript Engineer based in"
          valueInColor="Kerala, India."
        />
      </section>
    </header>
  );
};

export default Header;
