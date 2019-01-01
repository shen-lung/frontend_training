import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from 'eventbrite_design_system/button/Button';

class IndexScreenPage extends Component {
    static propTypes = {
        goToSearch: PropTypes.func.isRequired,
        goToStepperRedux: PropTypes.func.isRequired,
        goToStepperReact: PropTypes.func.isRequired,
    }

    render() {
        let {
            goToSearch,
            goToStepperRedux,
            goToStepperReact
        } = this.props;

        return (
            <div>
                <p>
                    <Button onClick={goToSearch}>Search Events</Button>
                </p>
                <p>
                    <Button onClick={goToStepperRedux}>Stepper with Redux</Button>
                </p>
                <p>
                    <Button onClick={goToStepperReact}>Stepper with React</Button>
                </p>
            </div>
        );
    }
}

export default IndexScreenPage;
