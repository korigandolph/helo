import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(props){
        super()
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    render(){
        return(
            <div className = 'Dashboard'>Dashboard
            <input
                name='search'
            />
            <button>Search</button>
            <button>Reset</button>
            </div>
        )
    }
}

export default Dashboard;