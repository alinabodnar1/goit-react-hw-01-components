import PropTypes from 'prop-types';
import cssModule from './FriendListItem.module.css';

export default function FriendListItem({isOnline,name,avatar}) {
    return (
        <li className={cssModule.item}>
            <span className=
                {isOnline
                    ? `${cssModule.status} ${cssModule['on-line']}`
                    : `${cssModule.status} ${cssModule['off-line']}`  
                }
            >
            </span>
            <img className={cssModule.avatar} src={avatar} alt={name} width="48" />
            <p className={cssModule.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}