import PropTypes from "prop-types";
import cssModule from './Profile.module.css';

export default function Profile(props) {
    return (
        <div className={cssModule.profile}>
            <div className={cssModule.description}>
                <img
                    src={props.avatar}
                    alt={props.username}
                    className={cssModule.avatar}
                    width="50"
                />
                <p className={cssModule.name}> {props.username}</p>
                <p className={cssModule.tag}> @{props.tag}</p>
                <p className={cssModule.location}> {props.location}</p>
            </div>

            <ul className={cssModule.stats}>
                <li className={cssModule.item}>
                    <span className={cssModule.label}>Followers</span>
                    <span className={cssModule.quantity}> {props.stats.followers}</span>
                </li>
                <li className={cssModule.item}>
                    <span className={cssModule.label}>Views</span>
                    <span className={cssModule.quantity}> {props.stats.views}</span>
                </li>
                <li className={cssModule.item}>
                    <span className={cssModule.label}>Likes</span>
                    <span className={cssModule.quantity}> {props.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }),
}