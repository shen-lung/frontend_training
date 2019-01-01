import {connect} from 'react-redux';

import ContentComponent from '../components/content/ContentComponent';
import {selectAllEvents} from '../actions/search';
import {goToHome} from '../actions/indexScreenPage';

const _mapStateToProps = (state) => ({
  searchList: state.searchEvents,
});
const _mapDispatchToProps = {
  selectAllEvents,
  goToHome
};

export default connect(
  _mapStateToProps,
  _mapDispatchToProps,
)(ContentComponent);
