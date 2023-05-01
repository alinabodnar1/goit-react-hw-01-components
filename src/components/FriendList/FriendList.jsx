import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import cssModule from './FriendList.module.css';

export default function FriendList({friendsArray}) {
    return (
        <ul className={cssModule['friend-list']}>
            { friendsArray.map(item => (
                <FriendListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
              )
            )}    
        </ul>
    )
}

FriendList.propTypes = {
    friendsArray: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,    
            isOnline: PropTypes.bool.isRequired,
        })
    )    
}
