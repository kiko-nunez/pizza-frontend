import { useState } from "react";
import { Link } from "react-router-dom";
import "../menustyles.css";

function MenuShow(props) {

    // https://www.youtube.com/watch?v=xysDXNYWbKw&t=1s&ab_channel=WebStylePress
    const [btnState, setBtnState] = useState(false);
  
    const handleClick = () => {
    setBtnState(btnState => !btnState);
  };

  let toggleClassCheck = btnState ? ' active': null;

    const formFields = {
        item: "",
        description: "",
        price: "",
    };

    const [ newForm, setNewForm ] = useState(formFields);

    const handleChange = (event) => {
        setNewForm({
            ...newForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createMenu(newForm);
        setNewForm(formFields);
    };
    
    const loaded = () => {
        return props.menu.map(menus => (
            <div key={menus._id} className="menuItem">
                <img className="foodie" src={menus.image} alt={menus.name}/>
                <Link to={`/menu/${menus._id}`}>
                    <h1>{menus.item}</h1>
                </Link>
                    <div className="menudes">{menus.description}</div>
                    <div className="price">{menus.price}</div>
                    <button>Add Item to Cart</button>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Kneeding the Doughs...</h1>
    };

    return (
        <div>
            <div className="menuShowContainer">
            <button type="button" className={`btn${toggleClassCheck}`} onClick={handleClick}>Add Menu Item</button>
            {/* className={`content${toggleClassCheck}`} ? "content"*/}
                <div >
                    <form onSubmit={handleSubmit} className={`menuCreateForm${toggleClassCheck}`}>
                        <input 
                            type="text" 
                            name="item" 
                            onChange={handleChange}
                            placeholder="Name"
                            value={newForm.item} 
                        />
                            <input 
                                type="text" 
                                name="image" 
                                onChange={handleChange}
                                placeholder="Image"
                                value={newForm.image} 
                            />
                        <input 
                            type="text" 
                            name="description" 
                            onChange={handleChange}
                            placeholder="Description"
                            value={newForm.description} 
                        />
                        <input 
                            type="text" 
                            name="price" 
                            onChange={handleChange}
                            placeholder="Price"
                            value={newForm.price} 
                        />
                        <input type="submit" value="Add Menu Item" />
                    </form>
                </div>
                
                { props.menu ? loaded() : loading() }
            </div>
        </div>
    )
}

export default MenuShow;