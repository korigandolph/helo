import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts(){
        axios.get('/api/posts')
        .then(results=> {
        this.setState({posts: results.data})
        }).catch(err=>console.log(err))
    }

    reset = () =>{
        this.props.history.push('/dashboard')
        this.setState ({
            posts: [],
            search: '',
            userposts: true
        })
    }

    render(){
        let mappedPost = this.state.posts.map((post, index)=>{
            return (
                <Post key={index} post={post}/>
            )
        })
        return(
            <div className = 'Dashboard'>
            <input
                name='search'
                placeholder='Search by Title'
            />
            <button>Search</button>
            <button onClick = {() => {
            this.reset()}}>Reset</button>
            <div>
                <label>My Posts</label>
                <input type="checkbox" />
            </div>
            {this.state.posts.map(element => (
            <Post
                getPosts = {this.getPosts} 
                key={element.id} post={element} 
             />))}
            {mappedPost}
            </div>
        )
    }
}

export default Dashboard;