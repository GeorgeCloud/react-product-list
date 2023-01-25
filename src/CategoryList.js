import { categoriesAndCount } from './data'
import './CategoryList.css'

function CategoryList(props){
  const { category, setCategory } = props;

  return (
    <div className="CategoryList">
      {categoriesAndCount.map(obj => {
        const className = obj.name === category ? 'selected' : '';
        return(
          <button className={ className }>
            { obj.name }
              <span> { obj.count } </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryList
