import { Link } from 'react-router-dom'
// import Navbar from '../components/Nav'


function Shops (props) {

  const loaded = () => {
    return props.shops.map(shop => (
      <div className='shopsIndex'>
      <div className='shops' key={shop._id}>
        <Link to={`/menu`}>
          <img className='shoplogo' src={shop.image} alt={shop.name}/>
        </Link>
          <ul className='shopInfo'>
          <li className='shopName'> {shop.name} </li>
          <li> {shop.phone} </li>
          <li className='shopAddress'> {shop.address} </li>
          </ul>
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