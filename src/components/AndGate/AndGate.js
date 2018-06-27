import React from 'react';
import './AndGate.css';

const andGate = (props) => (
  <form className="AndGate-form" onChange={props.formChangedHandler} onSubmit={props.predictOutput}>
    <h2>Train</h2>
    <div className="AndGate-input">
      <label htmlFor="firstInput">First Input: </label>
      <select name="firstInput" defaultValue={props.firstInput}>
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </div>
    <div className="AndGate-input">
      <label htmlFor="secondInput">Second Input: </label>
      <select name="secondInput" defaultValue={props.secondInput}>
        <option value="0">0</option>
        <option value="1">1</option>
      </select>
    </div>
    <div className="AndGate-input">
      <label htmlFor="predictedOutput">Predicted Output: </label>
      <input type="text" name="predictedOutput" size="10" placeholder="..." value={props.predictedOutput} readOnly />
    </div>
    <h2>Configure</h2>
    <div className="AndGate-input">
      <label htmlFor="epochs">Epochs: </label>
      <input type="number" name="epochs" placeholder="Epochs" min="0" max="10000" defaultValue={props.epochs} />
    </div>
    <div className="AndGate-input">
      <label htmlFor="learningRate">Learning Rate: </label>
      <input type="number" name="learningRate" placeholder="Learning Rate" step="0.01" defaultValue={props.learningRate} />
    </div>
    <div className="AndGate-buttons">
      <button id="trainButton">Train Model</button>
      <button id="resetButton" onClick={props.resetModel}>Reset Model</button>
    </div>
  </form>
);

export default andGate;
