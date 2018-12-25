import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';

import SearchFormComponent from '../components/content/SearchFormComponent';
import {
    searchEvents,
    getAllEvents
} from '../actions/search';

const _mapStateToProps = (state) => ({
    searchList: state.searchEvents
});
const _mapDispatchToProps = {
    onSubmit: searchEvents,
    handleReset: getAllEvents,
};

const SearchForm = reduxForm({
    form: 'search'
})(SearchFormComponent)

const ConnectedSearchForm = connect(
  _mapStateToProps,
  _mapDispatchToProps,
)(SearchForm);

export default ConnectedSearchForm;
