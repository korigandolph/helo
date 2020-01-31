import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            username: '',
            password: ''
        }
    }

    handleChange({name, value}){
        this.setState({[name]: value})
    }

    handleRegister = ()=>{
        const {username, password}= this.state
        axios.post('/api/register', {username, password})
        .then(res=>{
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
    }

    handleLogin = ()=>{
        axios.post('/api/login', {username: this.state.username, password: this.state.password})
        .then(res=>{
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
    }

    render(){
        return(
            <div className = 'Auth'>Helo
                <input 
                    name='username'
                    // value= {this.state.username}
                    placeholder = 'username'
                    onChange={(e)=>this.handleChange(e.target)}
                />
                <input 
                    name = 'password'
                    // value = {this.state.password}
                    placeholder = 'password'
                    onChange={(e)=>this.handleChange(e.target)}
                />
                <button onClick = {()=>this.handleLogin()}>Login</button>
                <button onClick = {()=>this.handleRegister()}>Register</button>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);