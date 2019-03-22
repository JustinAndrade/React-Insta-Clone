import React from 'react';

const PostHeader = props => {
    return(
        <div className ='post-header'>
            <img className='avatar' alt={props.username} src={props.thumbnailUrl}/>
            <p>{props.username}</p>
        </div>
    );
};

export default PostHeader;