import React from 'react';
import { node, number, string } from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { clearFetchingError } from 'actions/withAsyncActions';
import { getFetchingCounter, getError } from 'selectors/appSelector';
import CustomToast from 'components/common/CustomToast';
import styles from './styles';

const withAsyncComponents = WrappedComponent => (props) => {
  const { fetchingCounter, clearFetchingError, error } = props;
  return (
    <View style={styles.container}>
      <WrappedComponent {...props} />
      { fetchingCounter !== 0 &&
        <View style={styles.indicator}>
          <ActivityIndicator size="large" />
        </View>
      }
      { !!error &&
        <CustomToast
          message={error}
          callbackOnFinish={clearFetchingError}
          display={error}
        />
      }
    </View>
  );
};

withAsyncComponents.propTypes = {
  children: node.isRequired,
  fetchingCounter: number.isRequired,
  error: string
};

const mapState = state => ({
  fetchingCounter: getFetchingCounter(state),
  error: getError(state)
});

const mapDispatch = ({ clearFetchingError });

const composedAppWrapper = compose(
  connect(mapState, mapDispatch),
  withAsyncComponents
);

export default composedAppWrapper;
