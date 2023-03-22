import "./App.css";
import { getProducts } from "./services/getProducts";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Products from "./components/Products";

const App = () => {
  const products = getProducts();

  return (
    <div className="container">
      <h1>Sunglass Shop</h1>
      <div className="toolbar">
        <FilterBy />
        <SortBy />
      </div>
      <Products products={products} />
    </div>
  );
};

export default App;
