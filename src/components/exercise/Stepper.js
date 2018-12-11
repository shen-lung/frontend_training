import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ConnectedReactStepper extends PureComponent {
    static PropTypes = {
        result: PropTypes.number.isRequired,
        addNumber: PropTypes.func.isRequired,
        subtractNumber: PropTypes.func.isRequired,
        resetNumber: PropTypes.func.isRequired,
    }

    render() {
        let {
            result,
            addNumber,
            subtractNumber,
            resetNumber
        } = this.props;

        return (
            <div className="calculate-content">
                <h2 className="calculate-content__redux">React with Redux</h2>
                <p className="calculate-content__result">{result}</p>
                <div className="button-content">
                    <button className="calculate-content__button" onClick={addNumber}>+</button>
                    <button className="calculate-content__button" onClick={subtractNumber}>-</button>
                    <button className="calculate-content__button" onClick={resetNumber}>&#x21bb;</button>
                </div>
            </div>
        );
    }
}
