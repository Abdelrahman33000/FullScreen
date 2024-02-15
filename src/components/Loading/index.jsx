export const LoadingMode = ({ className }) => {
  return (
    <>
      <div
        className={`fixed  inset-0 bg-white z-50 flex items-center justify-center w-full h-full ${className}`}
      >
        <div className="relative  ">
          <div
            className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] !duration-300"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingMode;
