import { render } from '@testing-library/react';
import React from 'react';

import './Tool.css';

class ConvVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [[]],
            kernel: [[]],
            output: [[]]

        };
        
        this.generateInput = this.generateInput.bind(this);
        this.generateOutput = this.generateOutput.bind(this);
        this.generateKernel = this.generateKernel.bind(this);
    }

    generateInput(event) {
        event.preventDefault();

        const randomValues = Array.from({length: 36}, () => Math.floor(Math.random() * 255));
        const input = [];
        while(randomValues.length) input.push(randomValues.splice(0,6));

        this.setState({
            input
        });
    }

    generateKernel(event) {
        event.preventDefault();

        const randomValues = Array.from({length: 9}, () => Math.random().toFixed(1));
        const kernel = [];
        while(randomValues.length) kernel.push(randomValues.splice(0,3));

        this.setState({
            kernel
        })

    }

    generateOutput(event) {
        event.preventDefault();

        const hi = this.state.input[0].length;
        const wi = this.state.input[1].length;
        const hk = this.state.kernel[0].length;
        const wk = this.state.kernel[1].length;

        const paddedInput = Array(8).fill(0).map(x => Array(8).fill(0))
        const output = Array(6).fill(0).map(x => Array(6).fill(0))

        for (let i = 0; i < hi; i++) {
            for (let j = 0; j < wi; j++) {
                paddedInput[i+1][j+1] = this.state.input[i][j]
            }
        }
    
        for (let i = 0; i < hi; i++) {
            for (let j = 0; j < wi; j++) {
                for (let k = 0; k < hk; k++) {
                    for (let l = 0; l < wk; l++) {
                        console.log(output)
                        output[i][j] += paddedInput[i+k][j+l]*this.state.kernel[k][l];
                       
                    }
                }
            }
        }

        this.setState({
            output
        })
    }

    render () {
        return (
            <div className="full-width">
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
        initializer = tf.keras.initializers.RandomUniform(minval=0., maxval=1.)
        self.conv1 = Conv2D(filters=1,
                            kernel_size=3, 
                            strides=(1,1), 
                            activation=none,
                            use_bias=False, 
                            kernel_initializer=initializer)`}
                        </code>
                    </pre>
                    <button className="submit add" onClick={this.generateKernel}>Run</button>
                </div>
                <div className="flex">
                    <div className="input">
                        {this.state.input.map(item => 
                        <div className="rows">
                            {item.map(item => <div className="columns">{item}</div> )}
                        </div>)}
                    </div>
                    <div className="kernel">
                        {this.state.kernel.map(items =>
                        <div className="rows">
                            {items.map(item => <div className="columns">{item}</div>)}
                        </div>)}
                    </div>
                </div>
                <div className="code">
                    <pre className="code"> 
                        <code>              
{`  def call(self, x):
        x = self.conv1(x)

model = MyModel()

output = model(image)`}
                        </code>
                    </pre>
                    <button className="submit add" onClick={this.generateOutput}>Run</button>
                </div>
                <div className="output">
                    {this.state.output.map(items =>
                    <div className="rows">
                        {items.map(item => <div className="columns">{item.toFixed(0)}</div>)}
                    </div>)}
                </div>
            </div>
            
        );
    }



}

export default ConvVisualizer