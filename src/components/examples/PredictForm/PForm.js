import React from 'react';
// import './PForm.css';

const PForm = (props) => (
    <form className="Predict-form" onChange={props.formChangedHandler} onSubmit={props.predictOutput}>
        <div className="Predict-input">
            <label htmlFor="firstInput">Critic Rating</label>
        </div>
        <div className="Predict-input">
            <label htmlFor="secondInput">Action Movie</label>
            <select name="secondInput" defaultValue={props.secondInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="thirdInput">Exclusive Rights</label>
            <select name="thirdInput" defaultValue={props.thirdInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="fourthInput">Portable</label>
            <select name="fourthInput" defaultValue={props.fourthInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="fithInput">Role Playing</label>
            <select name="fithInput" defaultValue={props.fifthInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="sixthInput">Is A Sequel</label>
            <select name="sixthInput" defaultValue={props.sixthInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="seventhInput">Is Sports</label>
            <select name="seventhInput" defaultValue={props.seventhInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="eigthInput">Suitable for Kids</label>
            <select name="eighthInput" defaultValue={props.eighthInput}>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
        </div>
        <div className="Predict-input">
            <label htmlFor="ninthInput">Unit Price</label>
        </div>
        <div className="Predict-input">
            <label htmlFor="predictedOutput">Predicted Output: </label>
            <input type="text" name="predictedOutput" size="10" placeholder="..." value={props.predictedOutput} readOnly />
        </div>
        <div className="AndGate-buttons">
            <button id="getButton">get Prediction</button>
            <button id="resetButton" onClick={props.reset}>Reset</button>
        </div>
    </form>

);
export default PForm;