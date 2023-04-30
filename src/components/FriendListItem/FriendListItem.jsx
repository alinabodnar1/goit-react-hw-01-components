import PropTypes from 'prop-types';
import cssModule from './FriendListItem.module.css';

export default function FriendListItem(friend) {
    return (
        <li className={cssModule.item}>
            <span className=
                {friend.isOnline
                    ? `${cssModule.status} ${cssModule['on-line']}`
                    : `${cssModule.status} ${cssModule['off-line']}`  
                }
            >
            </span>
            <img className={cssModule.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={cssModule.name}>{friend.name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
}