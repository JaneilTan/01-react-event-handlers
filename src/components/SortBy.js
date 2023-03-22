const SortBy = () => {
  return (
    <div className="sortBy">
      <label htmlFor="sort">Sort by</label>
      <select id="sort">
        <option value="latest">Latest</option>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

export default SortBy;
