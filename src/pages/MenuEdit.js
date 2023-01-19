import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// useParams is a hook that gives us access to the url params 
// to allow us to find from the url params 

// useNavigate programaticly nagivates user based on some condition

function MenuEdit(props) {
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
            <div className="menuItem">
                <h1>{menus.item}</h1>
                <h3>{menus.description}</h3>
                <h2>{menus.price}</h2>

                <form onSubmit={handleSubmit}>
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
                <button onClick={handleDelete}>Delete This Item</button>
            </div>
        );
    };

    const loading = () => {
        return <h1>Kneeding the Doughs...</h1>
    };

    const handleDelete = () => {
        props.deleteMenu(id);
        navigate('/shops');
    };

    return (
        <section>
            { props.menu ? loaded() : loading() }
        </section>
    );
}

export default MenuEdit;