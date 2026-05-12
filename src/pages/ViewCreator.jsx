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
        <article className="creator-detail">
            {creator.imageURL && (
                <img
                    src={creator.imageURL}
                    alt={creator.name}
                    className="creator-image-large"
                />
            )}

            <p className="eyebrow">Creator profile</p>
            <h1>{creator.name}</h1>

            <p>{creator.description}</p>

            <div className="detail-actions">
                <a href={creator.url} target="_blank" rel="noreferrer" role="button">
                    Visit Creator Page
                </a>

                <Link to={`/edit/${creator.id}`} role="button" className="secondary">
                    Edit Creator
                </Link>
            </div>
        </article>
    );
}

export default ViewCreator;