import { connect } from 'react-redux';
import { onlineFetch, onlineSubscribe } from '../../../ducks/online';
import AppImagesState from './AppImagesState';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onlineFetch,
  onlineSubscribe,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppImagesState);
