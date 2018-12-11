import {connect} from 'react-redux';

import Stepper from '../components/exercise/Stepper';
import {
    addNumber,
    subtractNumber,
    resetNumber,
} from '../actions/stepper';

const _mapStateToProps = (state) => ({
    result: state.calculation,
});

const _mapDispatchToProps = {
    addNumber,
    subtractNumber,
    resetNumber
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Stepper);
