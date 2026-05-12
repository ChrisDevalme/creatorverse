import { Link } from 'react-router-dom';

function CreatorCard({ creator }) {
    return (
        <article className="creator-card">
            <div className="card-image-wrapper">
                {creator.imageURL ? (
                    <img
                        src={creator.imageURL}
                        alt={creator.name}
                        className="creator-image"
                    />
                ) : (
                    <div className="image-placeholder">
                        {creator.name.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>

            <div className="card-content">
                <h3>{creator.name}</h3>
                <p>{creator.description}</p>
            </div>

            <footer className="card-actions">
                <Link to={`/creator/${creator.id}`}>
                    Details
                </Link>

                <a href={creator.url} target="_blank" rel="noreferrer">
                    Visit Youtube Channel
                </a>

                <Link to={`/edit/${creator.id}`} className="edit-link">
                    Edit
                </Link>
            </footer>
        </article>
    );
}

export default CreatorCard;