import data from './data.json'

// Challenge 2: list of all categories
const allCategories = data.map(obj => obj.category)

// Challenge 3: Use set and push each object category
const categoriesSet = new Set();
data.map(obj => categoriesSet.add(obj.category));

// Challenge 4: Dicationary -- { categoryName: count }
const categoryCount = allCategories.reduce((obj, cat) => {
  if (obj.hasOwnProperty(cat)){
    obj[cat] += 1;
  } else {
    obj[cat] = 1;
  }
  return obj
}, {});

// Challenge 5: Dicationary -- { name: categoryName, count: count }
const categoriesArray = Array.from(categoriesSet);
const categoriesAndCount = categoriesArray.reduce((obj, cat) => {
  obj.push({name: cat, count: categoryCount[cat]})
  return obj
}, [])

categoriesAndCount.push({ name: 'All', count: data.length })

export default data

// Challenge 6: Export all of the data
export { allCategories, categoriesSet, categoriesAndCount }
