import { useState } from "react";
import { Link } from "react-router-dom";

function MenuShow(props) {
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
                <Link to={`/menu/${menus._id}`}>
                    <h1>{menus.item}</h1>
                </Link>
                <img src={menus.image} alt={menus.name}/>
                    <h3>{menus.description}</h3>
                    <h2>{menus.price}</h2>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Kneeding the Doughs...</h1>
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="item" 
                    onChange={handleChange}
                    placeholder="Item Name"
                    value={newForm.item} 
                />
                    <input 
                        type="text" 
                        name="image" 
                        onChange={handleChange}
                        placeholder="Item Image"
                        value={newForm.image} 
                    />
                <input 
                    type="text" 
                    name="description" 
                    onChange={handleChange}
                    placeholder="Item Description"
                    value={newForm.description} 
                />
                <input 
                    type="text" 
                    name="price" 
                    onChange={handleChange}
                    placeholder="Item Price"
                    value={newForm.price} 
                />
                <input type="submit" value="Add Menu Item" />
            </form>
            { props.menu ? loaded() : loading() }
        </section>
    )
}

export default MenuShow;