type UIContainer = {
  className?: string;
  children: React.ReactNode;
};

const UIContainer = ({ className, children }: UIContainer) => {
  return (
    <div className={`max-w-7xl mx-auto px-8 ${className}`}>{children}</div>
  );
};

export default UIContainer;
