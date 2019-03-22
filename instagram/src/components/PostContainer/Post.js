import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <PostHeader 
                    username={this.props.post.username} 
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className='post-picture'>
                    <img alt='instagram post' src={this.props.post.imageUrl}/>
                </div>
                <CommentSection 
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
            </div>
        );
    }
}

export default Post;