import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return(
            <nav class="nav flex-column">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </nav>
        );
    }
}

export default Navigation;