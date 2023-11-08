import React, {Component} from 'react';
class Navbar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-1">
            <div class="container-fluid">
                <a class="navbar-brand" href={ () => false}>UNKLAB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collaps" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href={ () => false}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={ () => false}>Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={ () => false}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}


export default Navbar;