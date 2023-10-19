const ShimmerCard = () => {
  return (
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white shadow-lg rounded-lg p-6 animate-pulse">
        <div className="bg-gray-400 h-40 w-full mb-4"></div>
        <div className="h-4 bg-gray-400 w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-400 w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-400 w-3/4"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(10)].map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
