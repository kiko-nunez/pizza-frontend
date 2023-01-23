import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../menustyles.css";

// useParams is a hook that gives us access to the url params 
// to allow us to find from the url params 

// useNavigate programaticly nagivates user based on some condition

function MenuEdit(props) {

     // This section is for the collapsible create form

    // https://www.youtube.com/watch?v=xysDXNYWbKw&t=1s&ab_channel=WebStylePress
    const [btnState, setBtnState] = useState(false);
  
    const handleClick = () => {
    setBtnState(btnState => !btnState);
    };

    let toggleClassCheck = btnState ? ' active': null;


    // we need to access the id from the url params
    const { id } = useParams();
    const navigate = useNavigate();

    const formFields = {
        item: "",
        description: "",
        price: "",
    };

    const menus = props.menu ? props.menu.find(menu => menu._id === id) : null;

    const [ editForm, setEditForm ] = useState(formFields);

    useEffect(() => {
        if(menus) {
            setEditForm(menus)
        }
    }, [menus]);

    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateMenu(id, editForm);
    };
    // use the id to find the specific person in the people array to show person
    const loaded = () => {
        return (
            <div className="menuItemEdit">
                <button type="button" className={`btn${toggleClassCheck}`} onClick={handleClick}>Edit Menu Item</button>
                <form onSubmit={handleSubmit} className={`menuCreateForm${toggleClassCheck}`}>
                    <input 
                        type="text" 
                        name="item" 
                        value={editForm.item} 
                        onChange={handleChange}
                        placeholder="Item Name"
                    />
                    <input 
                        type="text" 
                        name="description" 
                        value={editForm.image} 
                        onChange={handleChange}
                        placeholder="Item Image"
                    />
                    <input 
                        type="text" 
                        name="description" 
                        value={editForm.description} 
                        onChange={handleChange}
                        placeholder="Item Description"
                    />
                    <input 
                        type="text" 
                        name="price" 
                        value={editForm.price} 
                        onChange={handleChange}
                        placeholder="Item Price"
                    />
                    <input type="submit" value="Edit Menu Item" />
                </form>
                    <h1 className="menuItem">{menus.item}</h1>
                    <img className="foodieEdit" src={menus.image} alt={menus.name}/>
                    <h3 className="menudes">{menus.description}</h3>
                    <h2 className="price">{menus.price}</h2>
                <button onClick={handleDelete}>Delete This Item</button>
                <Link to={`/menu`}>
                    <button>Back to Menu</button>
                </Link>
            </div>
        );
    };

    const loading = () => {
        return <h1>Kneeding the Doughs...</h1>
    };

    const handleDelete = () => {
        props.deleteMenu(id);
        navigate('/menu');
    };

    return (
        <section>
            { props.menu ? loaded() : loading() }
        </section>
    );
}

export default MenuEdit;