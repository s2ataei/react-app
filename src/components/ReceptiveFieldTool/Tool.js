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
          dilation: '',
          items: []
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

        items.push({
            inputSize: this.state.inputSize,
            kernelSize: this.state.kernelSize,
            stride: this.state.stride,
            padding: this.state.padding,
            dilation: this.state.dilation
        });

        this.setState({
            items
        })

        alert('A name was submitted: ' + this.state.dilation);
        event.preventDefault();
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
                    <label className="user-input_form">
                        Dilation:
                        <input name="dilation" type="number" value={this.state.dilation} onChange={this.handleChange} />
                    </label>
                    <input className="submit" type="submit" value="Add Layer" />
                </form>
                <Table items={this.state.items} />
            </div>
        );
    };
}

export default NameForm

class Table extends React.Component {
    render() {
        const items = this.props.items;
        return (
            <div id="Table">
                <table>
                    <tbody> 
                        <tr>
                        <th>Input Size</th>
                        <th>Kernel Size</th>
                        <th>Stride</th>
                        <th>Dilation</th>
                        <th>Padding</th>
                        <th>Output Size</th>
                        <th>Receptive Field</th>
                        </tr>
                        {items.map(item => {
                            return (
                                <tr>
                                    <td>{item.inputSize}</td>
                                    <td>{item.kernelSize}</td>
                                    <td>{item.stride}</td>
                                    <td>{item.dilation}</td>
                                    <td>{item.padding}</td>
                                    <td>{item.stride * 2}</td>
                                    //  if first item: r = stride, else: r= (stride * r_prev) + (kernelSize - stride)
                                    <td>gooz</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );  
    }
}