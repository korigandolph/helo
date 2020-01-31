import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            title: '',
            img: '',
            content: ''
        };
    }

    // reset = () =>{
    //     this.props.history.push('/dashboard')
    //     this.setState ({
    //         posts: [],
    //         search: '',
    //         userposts: true
    //     })
    // }

    addPost= () => {
        const {title, img, content} = this.state
        axios.post('/api/post', {title, img, content})
        .then(results => {
        //  this.reset()
            this.props.history.push('/dashboard')
    }).catch(err => console.log(err))
  }
    render(){
        return(
            <div className = 'Form'>New Post
                <div>Title:</div>
                <input/>
                <div>Image URL:</div>
                <input/>
                <div>Content:</div>
                <input/>
                <button onClick = {() => this.addPost()}>Post</button>
            </div>
        )
    }
}

export default Form;