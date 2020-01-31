import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    render(){
        console.log(this.props)
        return(
            <div className = 'Nav'>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Log out</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState)=>{
    return reduxState
}

export default connect(mapStateToProps)(Nav);