interface ICard {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: ICard) => {
  return (
    <div className={`w-full  bg-white p-4 shadow-md ${className ?? ""}`}>
      {children}
    </div>
  );
};
