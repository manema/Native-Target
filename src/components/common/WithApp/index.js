import React from 'react';
import { node, number } from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFetchingCounter } from 'selectors/appSelector';
import styles from './styles';

const WithApp = WrappedComponent => (props) => {
  const { fetchingCounter } = props;
  return (
    <View style={styles.container}>
      <WrappedComponent {...props} />
      { fetchingCounter !== 0 &&
        <View style={styles.indicator}>
          <ActivityIndicator size="large" />
        </View>
      }
    </View>
  );
};

WithApp.propTypes = {
  children: node.isRequired,
  fetchingCounter: number.isRequired
};

const mapState = state => ({
  fetchingCounter: getFetchingCounter(state)
});

const composedAppWrapper = compose(
  connect(mapState, null),
  WithApp
);

export default composedAppWrapper;
