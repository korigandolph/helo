import React, {Component} from 'react';

class Post extends Component {
    render(){
        console.log(this.props)
        return(
            <div className = 'Post'>
            <div>Title:{this.props.post.title}</div>
            <button>Delete Post</button>
            </div>
        )
    }
}

export default Post;