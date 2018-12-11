import {connect} from 'react-redux';

import ContentComponent from '../components/content/ContentComponent';
import {selectAllEvents} from '../actions/search';

const _mapStateToProps = (state) => ({
  searchList: state.searchEvents,
});
const _mapDispatchToProps = {
  selectAllEvents
};

export default connect(
  _mapStateToProps,
  _mapDispatchToProps,
)(ContentComponent);
