import {connect} from 'react-redux';

import IndexScreenPage from '../components/IndexScreenPage';
import {
    goToSearch,
    goToStepperRedux,
    goToStepperReact,
    goToHome
} from '../actions/indexScreenPage';

const _mapStateToProps = () => ({});

const _mapDispatchToProps = {
    goToSearch,
    goToStepperRedux,
    goToStepperReact,
    goToHome
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(IndexScreenPage);
