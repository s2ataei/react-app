import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Projects.css';
import placeholder from '../../st.png'

import Conv2DTool from '../Conv2DTool/Tool';
import SortingVisualizer from '../SortingVisualizer/Tool';

const projects = props => (
        <div className="container">
            <div className="projects-nav">
                <ul>
                    <Link to="/Projects/Conv2DTool">
                        <li><a>Conv2D Layer Receptive Field and Output Size</a></li>
                    </Link>
                    <Link to="/Projects/SortingVisualizer">
                        <li><a>Sorting Visualizer</a></li>
                    </Link>
                </ul>     
                <Switch>
                    <Route path="/Projects/Conv2DTool" component={Conv2DTool} />
                    <Route path="/Projects/SortingVisualizer" component={SortingVisualizer} />
                </Switch>
            </div>
        </div>
        
);

export default projects;