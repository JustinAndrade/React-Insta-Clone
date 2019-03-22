import React from 'react';
import Comments from './Comments';
import AddComment from './AddComment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    changeComment = event => {
        this.setState({ comment: event.target.value })
    }

    addCommentHandler = event => {
        event.preventDefault();
        const newComment = {text: this.state.comment, username: 'justinandrade'}
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState( {comments, comment: ''} );
    }

    render() {
        console.log(this.state.comments);
        return (
            <div className='comment-section'>
                {this.state.comments.map((comment, index) =>  <Comments key={index} comment={comment} />)}
                <AddComment 
                    comment={this.state.comment}
                    addComment={this.addCommentHandler}
                    changeComment={this.changeComment}
                />
            </div>
        );
    }
}

export default CommentSection;