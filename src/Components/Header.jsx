const Header = () => {
  return (
    <header className="w-full bg-black/40 backdrop-blur-md text-white text-center py-4 border-t border-white/20">
      <h1 className="text-3xl font-bold">Weather Dashboard</h1>
      <p className="text-sm text-black-500">
        Real-time weather & 5-day forecast
      </p>
    </header>
  );
};

export default Header;
