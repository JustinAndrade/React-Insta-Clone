import React from 'react';

const AddComment = props => {
    return (
        <form onSubmit={props.addComment}>
            <input className='add-comment'
            type='text'
            placeholder='Add comment... '
            value={props.comment}
            onChange={props.changeComment}
            />
        </form>
    )
}

export default AddComment;