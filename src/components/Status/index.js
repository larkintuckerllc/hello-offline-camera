import { connect } from 'react-redux';
import StatusView from './StatusView';
import { notificationGet, notificationOff } from '../../ducks/notification';
import { onlineGet, onlineGetRequested } from '../../ducks/online';

const mapStateToProps = state => ({
  notification: notificationGet(state),
  online: onlineGet(state),
  onlineRequested: onlineGetRequested(state),
});

const mapDispatchToProps = {
  notificationOff,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusView);
