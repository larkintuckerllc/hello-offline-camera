import { connect } from 'react-redux';
import { onlineFetch } from '../../../ducks/online';
import AppImagesState from './AppImagesState';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onlineFetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppImagesState);
