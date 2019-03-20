import { connect } from 'react-redux';
import StatusView from './StatusView';
import { onlineGet, onlineGetRequested } from '../../ducks/online';

const mapStateToProps = state => ({
  online: onlineGet(state),
  onlineRequested: onlineGetRequested(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusView);
