import { render } from '@testing-library/react';
import React from 'react';

import 'zingchart/es6';
import ZingChart from 'zingchart-react';

import './Tool.css';

class Conv2DTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSize: '',
            kernelSize: '',
            stride: '',
            padding: '',
            receptiveField: '',
            outputSize: '',
            items: [],
            config: {
                title: {
                    text: "Test"
                },
                series: [{
                    values: []
                }],
                type: 'line'
            },
        };

        this.chart = React.createRef()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeEntries = this.removeEntries.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: Number(value)
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let items = [...this.state.items]

        items.push({
            kernelSize: this.state.kernelSize,
            stride: this.state.stride,
            padding: this.state.padding,
        });

        this.setState({
            items,
            inputSize: this.state.inputSize,
        })
    }

    removeEntries(event) {
        event.preventDefault();
        this.setState({
            items: []
        })
    }

    removeEntry(event, index) {
        event.preventDefault();
        const items = [...this.state.items]
        items.splice(index, 1) // remove item at index
        this.setState({ items });
    }

    render() {
        const items = this.state.items.reduce((items, { padding, stride, kernelSize, ...item }, index) => {
            const inputSize = index === 0 ? this.state.inputSize : items[index - 1].outputSize
            items.push({
                inputSize,
                padding,
                stride,
                kernelSize,
                ...item,
                receptiveField: index === 0 ? stride : stride * items[index - 1].receptiveField + kernelSize - stride,
                outputSize: Math.floor(((inputSize - kernelSize + 2 * padding) / (stride)) + 1)
            })
            return items
        }, [])

        const values = items.map((item) => item.receptiveField)

        return (
            <div className="user-input">
                <h1>Conv2D Calculator</h1>
                    <p>
                        A convolutional layer operates over a local region of the input to that layer with the size of this local 
                        region usually specified directly. You can also compute the effective receptive field of a convolutional 
                        layer which is the size of the input region to the network that contributes to a layers’ activations. 
                        For example, if the first convolutional layer has a receptive field of 3x3 then it’s effective receptive field 
                        is also 3x3 since it operates directly on the input. However if the second layer of a 
                        convolutional network also has a 3x3 filter, then it’s (local) receptive field is 3x3, but it’s 
                        effective receptive field is 5x5.
                    </p> 
                <form onSubmit={this.handleSubmit}>
                    <label className="user-input_form">
                        <h4>Network Input</h4>
                        Input Size:
                        <input name="inputSize" type="number" value={this.state.inputSize} onChange={this.handleChange} />
                    </label>
                    <label className="user-input_form">
                        <h4>Layer Properties</h4>
                        Kernel Size:
                        <input name="kernelSize" type="number" value={this.state.kernelSize} onChange={this.handleChange} />
                    </label>
                    <label className="user-input_form">
                        Stride:
                        <input name="stride" type="number" value={this.state.stride} onChange={this.handleChange} />
                    </label>
                    <label className="user-input_form">
                        Padding:
                        <input name="padding" type="number" value={this.state.padding} onChange={this.handleChange} />
                    </label>
                    <input className="submit add" type="submit" value="Add Layer" />
                </form>
                <button className="submit delete" onClick={this.removeEntries}>Remove All Layers</button>
                <div id="Table">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Input Size</th>
                                <th scope="col">Kernel Size</th>
                                <th scope="col">Stride</th>
                                <th scope="col">Padding</th>
                                <th scope="col">Output Size</th>
                                <th scope="col">Receptive Field</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.inputSize}</td>
                                        <td>{item.kernelSize}</td>
                                        <td>{item.stride}</td>
                                        <td>{item.padding}</td>
                                        <td>{item.outputSize}</td>
                                        <td>{item.receptiveField}</td>
                                        <td><button className="submit delete" onClick={(event) => this.removeEntry(event, index)}>Delete</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <ZingChart ref={this.chart} data={{ type: 'line', series: [{ values }], title: { text: "Receptive Field Growth"} }} />
                </div>
            </div>
        );
    };
}

export default Conv2DTool