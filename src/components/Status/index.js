import { connect } from 'react-redux';
import StatusView from './StatusView';
import { notificationGet, notificationOff } from '../../ducks/notification';

const mapStateToProps = state => ({
  notification: notificationGet(state),
});

const mapDispatchToProps = {
  notificationOff,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusView);
