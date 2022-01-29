type UIContainer = {
  children: React.ReactNode;
};

const UIContainer = ({ children }: UIContainer) => {
  return <div className="max-w-7xl mx-auto px-8">{children}</div>;
};

export default UIContainer;
