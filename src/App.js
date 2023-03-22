import "./App.css";
import { getProducts } from "./services/getProducts";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Products from "./components/Products";

const setFilterBy = (filterBy) => {
  alert (`Filter By: ${filterBy}`);
};

const setSortBy = (sortBy) => {
  alert(`Sort by: ${sortBy}`);
};

const App = () => {
  const products = getProducts();

  return (
    <div className="container">
      <h1>Sunglass Shop</h1>
      <div className="toolbar">
        <FilterBy setFilterBy={setFilterBy} />
        <SortBy setSortBy={setSortBy} />
      </div>
      <Products products={products} />
    </div>
  );
};

export default App;
