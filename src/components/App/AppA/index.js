import { connect } from 'react-redux';
import AppAConnected from './AppAConnected';
import { dirtyGet } from '../../../ducks/dirty';
import { onlineGet } from '../../../ducks/online';
import { notificationGet, notificationOn } from '../../../ducks/notification';

const mapStateToProps = state => ({
  dirty: dirtyGet(state),
  notification: notificationGet(state),
  online: onlineGet(state),
});

const mapDispatchToProps = {
  notificationOn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppAConnected);
