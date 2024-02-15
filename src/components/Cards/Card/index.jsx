export const Card = ({ children, className, ...rest }) => {
  const cardClassName = `bg-white p-4 rounded-[20px]    ${className ?? ""}`;

  return (
    <div
      style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
      className={cardClassName}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
