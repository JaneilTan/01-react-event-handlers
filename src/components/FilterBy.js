const FilterBy = () => {
  return (
    <div className="filterBy">
      <label htmlFor="category">Filter by</label>
      <select id="category">
        <option value="all">All</option>
        <option value="accessories">Accessories</option>
        <option value="sunglasses">Sunglasses</option>
      </select>
    </div>
  );
};

export default FilterBy;
