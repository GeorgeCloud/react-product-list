import { categoriesAndCount } from './data'
import './CategoryList.css'

function CategoryList(props){
  const { category, catSelected } = props;

  return (
    <div className="CategoryList">
      {categoriesAndCount.map(obj => {
        const className = obj.name === category ? 'selected' : '';
        return(
          <button
            className={ className }
            onClick={ () => catSelected(obj.name) }
          >
            { obj.name }
            <span> { obj.count } </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList
