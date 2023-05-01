import PropTypes from "prop-types";
import cssModule from './Profile.module.css';

export default function Profile({avatar,username,tag,location,stats}) {
    return (
        <div className={cssModule.profile}>
            <div className={cssModule.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={cssModule.avatar}
                    width="50"
                />
                <p className={cssModule.name}> {username}</p>
                <p className={cssModule.tag}> @{tag}</p>
                <p className={cssModule.location}> {location}</p>
            </div>

            <ul className={cssModule.stats}>
                <li className={cssModule.item}>
                    <span className={cssModule.label}>Followers</span>
                    <span className={cssModule.quantity}> {stats.followers}</span>
                </li>
                <li className={cssModule.item}>
                    <span className={cssModule.label}>Views</span>
                    <span className={cssModule.quantity}> {stats.views}</span>
                </li>
                <li className={cssModule.item}>
                    <span className={cssModule.label}>Likes</span>
                    <span className={cssModule.quantity}> {stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }),
}