import React from 'react';

import './Projects.css';
import placeholder from '../../st.png'

const projects = props => (
    <div className="container">
        <div className="description">
            <h1>Receptive Field Calculator</h1>
            <p>
                A convolutional layer operates over a local region of the input to that layer with the size of this local 
                region usually specified directly. You can also compute the effective receptive field of a convolutional 
                layer which is the size of the input region to the network that contributes to a layers’ activations. 
                For example, if the first convolutional layer has a receptive field of 3x3 then it’s effective receptive field 
                is also 3x3 since it operates directly on the input. However if the second layer of a 
                convolutional network also has a 3x3 filter, then it’s (local) receptive field is 3x3, but it’s 
                effective receptive field is 5x5.
            </p> 
        </div>
        <div className="user-input">
            <div className="user-input_form">
                <h4>Input Size</h4>
                <input type="text" class="form-control" value="3"></input>    
            </div>
            <div className="user-input_form">
                <h4>Kernel Size</h4>
                <input type="text" class="form-control" value="3"></input>
            </div>
            <div className="user-input_form">
                <h4>Stride</h4>
                <input type="text" class="form-control" value="3"></input>
            </div>
            <div className="user-input_form">
                <h4>Padding</h4>
                <input type="text" class="form-control" value="3"></input>
            </div>
            <div className="user-input_form">
                <h4>Dilation</h4>
                <input type="text" class="form-control" value="3"></input>
            </div>
        </div>
        <div className="graphical-output">
            <img src={placeholder}></img>
        </div>
    </div>
);

export default projects;