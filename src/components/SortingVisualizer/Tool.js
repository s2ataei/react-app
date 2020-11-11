import { render } from '@testing-library/react';
import React from 'react';

import './Tool.css';

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [[]]

        };
        
        this.generateInput = this.generateInput.bind(this);
        this.generateOutput = this.generateOutput.bind(this);
    }

    generateInput(event) {
        event.preventDefault();

        const randomValues = Array.from({length: 36}, () => Math.floor(Math.random() * 255));
        const input = [];
        while(randomValues.length) input.push(randomValues.splice(0,6));

        console.log(randomValues)

        this.setState({
            input
        });
    }

    generateOutput(event) {
        event.preventDefault();

    }

    render () {

        var kernel = [[1,2,3],[1,2,3],[1,2,3]];
        return (
            <div>
                <div className="code">
                    <pre className="code"> 
                        <code>
{`import numpy as np
import tensorflow as tf

image = np.random.rand(6,6)`}
                        </code>
                    </pre>
                    <button className="submit add" onClick={this.generateInput}>Run</button>
                </div>  
                {this.state.input.map(item => 
                <div className="rows">
                    {item.map(item => <div className="columns">{item}</div> )}
                </div>)}
                <div className="code">
                    <pre className="code"> 
                        <code>              
{`class MyModel(tf.keras.Model):
    def __init__(self):
        super(MyModel, self).__init__()
        self.conv1 = Conv2D(32, 3, activation='relu')

    def call(self, x):
        return self.conv1(x)

model = MyModel()

output = model(image)`}
                        </code>
                    </pre>
                    <button className="submit add" onClick={this.generateOutput}>Run</button>
                </div>
                {kernel.map(items =>
                <div className="rows">
                    {items.map(item => <div className="columns">{item}</div>)}
                </div>)}
            </div>
            
        
        );
    }



}

export default SortingVisualizer