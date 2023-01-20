import { Link } from 'react-router-dom'
// import Navbar from '../components/Nav'


function Shops (props) {

  const loaded = () => {
    return props.shops.map(shop => (
      <div key={shop._id}>
        <Link to={`/menu`}>
          <h1>{shop.name} </h1>
        </Link>
          <img src={shop.image} alt={shop.name}/>
          <h2>{shop.phone}</h2>
          <h2>{shop.address}</h2>
        
      </div>
    ))
  }
const loading = () => {
  return <h1>Loading...</h1>
}


  return (
    <section>
   {props.shops ? loaded() : loading()}
    </section>
   
 )}

export default Shops;