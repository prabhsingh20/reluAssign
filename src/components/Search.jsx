function Search() {
  return (
    <header className="relative">
      <img
        src="/search.svg"
        alt="search icon"
        className="absolute left-7 top-[1.9rem]"
      />
      <input
        className="h-20 w-full rounded-[10px] pl-14 placeholder:text-xs placeholder:font-medium placeholder:text-grey-5 focus:outline-none focus:ring-2 focus:ring-grey-4"
        type="text"
        placeholder="Search here"
      />

      <img
        src="/filter.svg"
        alt="filter icon"
        className="absolute right-[4.9rem] top-7 cursor-pointer"
      />
      <p className="absolute right-8 top-8 z-10 cursor-pointer text-sm font-medium">
        Filters
      </p>
    </header>
  );
}

export default Search;
