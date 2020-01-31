import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super()
        
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
        // const {username, password } = this.state
        return(
            <div className = 'Auth'>Helo
                <div>Username:
                <input 
                    
                    name='username'
                    value= {this.state.username}
                    placeholder = 'username'
                    onChange={(e)=>this.handleChange(e.target)}
                />
                </div>
                <div>Password: 
                <input 
                    name = 'password'
                    value = {this.state.password}
                    placeholder = 'password'
                    type = 'password'
                    onChange={(e)=>this.handleChange(e.target)}
                />
                </div>
                <button onClick = {()=>this.handleLogin()}>Login</button>
                <button onClick = {()=>this.handleRegister()}>Register</button>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);