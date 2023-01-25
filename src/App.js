import './App.css';
import { useState } from 'react'
import ProductList from './ProductList'
import CategoryList from './CategoryList'
import Header from './Header'

// Challenge 7
import data, { allCategories, categoriesSet, categoriesAndCount } from './data'

function App() {
  const [category, setCategory] = useState('Music');

  return (
    <div className="App">
      <Header
        title="Product List"
        productCount={data.length}
        categoryCount={categoriesSet.size}
      />

      <CategoryList category={ category } setCategory={ setCategory }/>

      <ProductList category={ category }/>
    </div>
  );
}

export default App;
