import { render } from '@testing-library/react';
import React from 'react';

import './Tool.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          inputSize: '',
          kernelSize: '',
          stride: '',
          padding: '',
          receptiveField: '',
          outputSize: '',
          items: []
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.removeEntries = this.removeEntries.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
      this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
        let items = [...this.state.items]
        let receptiveField;
        let outputSize;

        if (items.length == 0) {
            receptiveField = this.state.stride;
        } else {
            receptiveField = this.state.stride * items[items.length - 1].receptiveField + (this.state.kernelSize - this.state.stride); 
        }

        outputSize = Math.floor(((this.state.inputSize - this.state.kernelSize + 2*this.state.padding) / (this.state.stride)) + 1);

        items.push({
            inputSize: this.state.inputSize,
            kernelSize: this.state.kernelSize,
            stride: this.state.stride,
            padding: this.state.padding,
            receptiveField,
            outputSize,
        });

        this.setState({
            items
        })

        event.preventDefault();
    }

    removeEntries (event) {
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
        return (
            <div className="user-input">
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
                    <input className="submit" type="submit" value="Add Layer" />
                </form>
                <button onClick={this.removeEntries}>Remove All Layers</button>
                <div id="Table">
                    <table class= "table table-dark">
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
                            {this.state.items.map((item, index) =>  {
                                return (
                                    <tr>
                                    <td>{item.inputSize}</td>
                                    <td>{item.kernelSize}</td>
                                    <td>{item.stride}</td>
                                    <td>{item.padding}</td>
                                    <td>{item.outputSize}</td>
                                    <td>{item.receptiveField}</td>
                                    <td><button onClick={(event) => this.removeEntry(event, index)}>Delete</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>     
            </div>
        );
    };
}

export default NameForm
