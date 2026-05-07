import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching creator:', error);
            } else {
                setCreator(data);
            }
        }

        fetchCreator();
    }, [id]);

    if (!creator) {
        return <p>Loading creator...</p>;
    }

    return (
        <div>
            {creator.imageURL && (
                <img
                    src={creator.imageURL}
                    alt={creator.name}
                    className="creator-image-large"
                />
            )}

            <h1>{creator.name}</h1>

            <p>{creator.description}</p>

            <a href={creator.url} target="_blank" rel="noreferrer">
                Visit Creator Page
            </a>

            <br />
            <br />

            <Link to={`/edit/${creator.id}`}>Edit Creator</Link>
        </div>
    );
}

export default ViewCreator;