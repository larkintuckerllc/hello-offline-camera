import { connect } from 'react-redux';
import StatusConnected from './StatusConnected';
import { dirtyGet, dirtyOff } from '../../ducks/dirty';
import { notificationGet, notificationOff } from '../../ducks/notification';

const mapStateToProps = state => ({
  dirty: dirtyGet(state),
  notification: notificationGet(state),
});

const mapDispatchToProps = {
  dirtyOff,
  notificationOff,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusConnected);
