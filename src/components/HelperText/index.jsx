export const HelperText = ({
  children,
  text,
  className,
  startIcon,
  endIcon,
  showContent = true,
}) => {
  const textClassName = `inline-flex items-center ${className ?? ""}`;

  return (
    <span className={textClassName}>
      {showContent ? (
        <>
          {startIcon && <span className="me-1">{startIcon}</span>}
          {children || text}
          {endIcon && <span className="ms-1">{endIcon}</span>}
        </>
      ) : null}
    </span>
  );
};

export default HelperText;
