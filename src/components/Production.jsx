import { IMAGE_URL } from '../api/requests'
import './Production.css'

const Production = ({production}) => {
  return (
    <>
    
    
    <h3>Production Companies</h3>
    <div className="productions">
        {production.production_companies?.map((item,index)=>{
        return  <img key={index} className="production" src={`${IMAGE_URL}${item.logo_path}`} alt={item.name}/>
        })}
      </div>
     </>
  )
}

export default Production
