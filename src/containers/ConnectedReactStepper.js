import React, { PureComponent } from 'react';

export default class ConnectedReactStepper extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {result: 0};
    }

    _addNumber = () => {
        this.setState(({result: oldResult}) => ({
            result: oldResult + 1
        }));
    }

    _subtractNumber = () => {
        this.setState(({result: oldResult}) => ({
            result: oldResult - 1
        }));
    }

    _resetNumber = () => {
        this.setState({result: 0});
    }

    render() {
        let {result} = this.state;

        return (
            <div className="calculate-content">
                <h2 className="calculate-content__react">React</h2>
                <p className="calculate-content__result">{result}</p>
                <div className="button-content">
                    <button className="calculate-content__button" onClick={this._addNumber}>+</button>
                    <button className="calculate-content__button" onClick={this._subtractNumber}>-</button>
                    <button className="calculate-content__button" onClick={this._resetNumber}>&#x21bb;</button>
                </div>
            </div>
        );
    }
}
