import './App.css';
import ProductList from './ProductList'
import CategoryButtons from './CategoryButtons'

// Challenge 7
import data, { allCategories, categoriesSet, categoriesAndCount } from './data'

function App() {

  return (
    <div className="App">
      <h1>Product List</h1>
      <p>Count: {data.length}</p>
      <p>Category Count: {categoriesSet.size}</p>

      <CategoryButtons />

      <ProductList />
    </div>
  );
}

export default App;
