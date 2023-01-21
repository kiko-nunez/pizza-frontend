import { Link } from 'react-router-dom'
// import Navbar from '../components/Nav'


function Shops (props) {

  const loaded = () => {
    return props.shops.map(shop => (
      <div className='shops' key={shop._id}>
        <Link to={`/menu`}>
          <img className='shoplogo' src={shop.image} alt={shop.name}/>
        </Link>
        <div className='shopInfo'>
          <h1> {shop.name} </h1>
          <h3> {shop.phone} </h3>
          <h3> {shop.address} </h3>
          </div>
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