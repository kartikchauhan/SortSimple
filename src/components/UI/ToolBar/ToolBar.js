
import React, { Component } from 'react'
import './ToolBar.css'

import 'font-awesome/css/font-awesome.min.css';

class ToolBar extends Component {
    state = {
        value: "0",
    }
    optionChangeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
        return this.props.clicked.ShowAlgorithmHandler(e.target.value)
    }
    sortMethodHandler = () => {
        // console.log(this.state.value)
        if (this.state.value === "1") {
            return this.props.clicked.bubblesorter()
        } else if (this.state.value === "2") {
            return this.props.clicked.selectionSorter()
        } else if (this.state.value === "3") {
            return this.props.clicked.insertionSorter()
        } else if (this.state.value === "4") {
            return this.props.clicked.mergeSorter()
        } else if (this.state.value === "5") {
            return this.props.clicked.cocktailSorter()
        } else if (this.state.value === "6") {
            return this.props.clicked.countSorter()
        } else if (this.state.value === "7") {
            return this.props.clicked.quickSortHelper()
        } else if (this.state.value === "8") {
            return this.props.clicked.oddevenSorter()
        } else {
            alert("Please select Algorithm")
        }
    }
    render() {
        return (
            <div className="tool-container">
                <div className="tool-tip-mobile">
                    <p><i className="fa fa-info-circle"></i>Pro tip: Take a large array and visualise various algorithms at max speed for a fun visual :)</p>
                </div>
                <div className="tool-element tool-array">
                    <button className="tool-button" disabled={this.props.state.disableInput} onClick={this.props.clicked.arrayReset}>New array</button>
                </div>
                <div className="tool-element tool-array-size">
                    <div style={{ color: this.props.state.disableInput ? "gray" : "white" }}>Change Array Size</div>
                    <input type="range" min="10" max="100" defaultValue="25" disabled={this.props.state.disableInput} onChange={this.props.clicked.arraySizeHandler}></input>
                </div>
                <div className="tool-element tool-sort">
                    <div style={{ color: this.props.state.disableInput ? "gray" : "white" }}>Choose Sorting Algorithm</div>
                    <div >
                        <select defaultValue="0" className="selector" disabled={this.props.state.disableInput} onChange={this.optionChangeHandler}>
                            <option className="select-option-disabled" value="0" disabled>Select Algorithm</option>
                            <option className="select-option" value="2">Selection sort</option>
                            <option className="select-option" value="1">Bubble sort</option>
                            <option className="select-option" value="3">Insertion sort</option>
                            <option className="select-option" value="7">Quick sort</option>
                            <option className="select-option" value="4">Merge sort</option>
                            <option className="select-option" value="5">Cocktail sort</option>
                            <option className="select-option" value="8">OddEven sort</option>
                            <option className="select-option" value="6">Counting sort</option>
                        </select>
                    </div>
                </div>
                <div className="tool-element tool-sort-btn">
                    <button className="tool-button" disabled={this.props.state.disableInput} onClick={this.sortMethodHandler}>Sort</button>
                </div>
                <div className="tool-element tool-speed">
                    <div style={{ color: "white" }}>Change Speed</div>
                    <input type="range" min="10" max="401" value={401 - this.props.state.speed} onChange={this.props.clicked.speedChangeHandler}></input>
                </div>
                <div className="tool-tip-desktop">
                    <p><i className="fa fa-info-circle"></i>Pro tip: Take a large array and visualise various algorithms at max speed for a fun visual :)</p>
                </div>
            </div>
        )
    }
}

export default ToolBar
