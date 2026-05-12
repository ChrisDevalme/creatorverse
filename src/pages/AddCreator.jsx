import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
    const navigate = useNavigate();

    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const { error } = await supabase
            .from('creators')
            .insert({
                name: creator.name,
                url: creator.url,
                description: creator.description,
                imageURL: creator.imageURL,
            });

        if (error) {
            console.error('Error adding creator:', error);
        } else {
            navigate('/');
        }
    }

    return (
        <div className="form-page">
            <h1>Add Creator</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={creator.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    URL
                    <input
                        type="url"
                        name="url"
                        value={creator.url}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Description
                    <textarea
                        name="description"
                        value={creator.description}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Image URL Optional
                    <input
                        type="url"
                        name="imageURL"
                        value={creator.imageURL}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Add Creator</button>
            </form>
        </div>
    );
}

export default AddCreator;