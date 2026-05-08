import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        async function fetchCreators() {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching creators:', error);
            } else {
                setCreators(data);
            }
        }

        fetchCreators();
    }, []);

    return (
        <div>
            <h1>All Creators</h1>

            {creators.length === 0 ? (
                <p>No creators yet. Add your first creator!</p>
            ) : (
                <div className="creator-grid">
                    {creators.map((creator) => (
                        <CreatorCard key={creator.id} creator={creator} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ShowCreators;