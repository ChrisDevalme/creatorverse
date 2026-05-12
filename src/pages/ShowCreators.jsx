import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        async function fetchCreators() {
            const { data, error } = await supabase
                .from('creators')
                .select('*');

            if (error) {
                console.error('Error fetching creators:', error);
            } else {
                setCreators(data);
            }
        }

        fetchCreators();
    }, []);

    return (
        <>
            <section className="hero">
                <p className="eyebrow">Discover your digital influences</p>
                <h1>Explore the Creatorverse</h1>
                <p className="hero-text">
                    A curated collection of creators across tech, fitness, business,
                    entertainment, and culture.
                </p>

                <Link to="/add" className="hero-button">
                    Add New Creator
                </Link>
            </section>

            <section>
                <div className="section-header">
                    <div>
                        <p className="eyebrow">Featured creators</p>
                        <h2>Creators Worth Following</h2>
                    </div>

                    <p className="creator-count">
                        {creators.length} creator{creators.length === 1 ? '' : 's'}
                    </p>
                </div>

                {creators.length === 0 ? (
                    <article className="empty-state">
                        <h3>No creators yet</h3>
                        <p>Add your first creator to start building your Creatorverse.</p>
                        <Link to="/add" role="button">
                            Add Creator
                        </Link>
                    </article>
                ) : (
                    <div className="creator-grid">
                        {creators.map((creator) => (
                            <CreatorCard key={creator.id} creator={creator} />
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}

export default ShowCreators;