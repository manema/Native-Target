import React from 'react';
import { node, number, string } from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setToastMessage } from 'actions/withAsyncActions';
import { getFetchingCounter, getToastMessage } from 'selectors/appSelector';
import CustomToast from 'components/common/CustomToast';
import styles from './styles';

const withAsyncComponents = WrappedComponent => (props) => {
  const { fetchingCounter, setToastMessage, toastMessage } = props;
  return (
    <View style={styles.container}>
      <WrappedComponent {...props} />
      { fetchingCounter !== 0 &&
        <View style={styles.indicator}>
          <ActivityIndicator size="large" />
        </View>
      }
      { !!toastMessage &&
        <CustomToast
          message={toastMessage}
          callbackOnFinish={setToastMessage}
          display={toastMessage}
        />
      }
    </View>
  );
};

withAsyncComponents.propTypes = {
  children: node.isRequired,
  fetchingCounter: number.isRequired,
  toastMessage: string
};

const mapState = state => ({
  fetchingCounter: getFetchingCounter(state),
  toastMessage: getToastMessage(state)
});

const mapDispatch = dispatch => ({
  setToastMessage: () => dispatch(setToastMessage(''))
});

const composedAppWrapper = compose(
  connect(mapState, mapDispatch),
  withAsyncComponents
);

export default composedAppWrapper;
