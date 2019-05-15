import React from 'react';
import { bool, object } from 'prop-types';
import { View, Modal } from 'react-native';
import styles from './styles';

const CustomModal = ({ visible, children }) =>
  <Modal
    visible={visible}
    transparent
  >
    <View style={styles.container}>
      <View style={styles.modalBox}>
        {children}
      </View>
    </View>
  </Modal>;

CustomModal.propTypes = {
  children: object.isRequired,
  visible: bool.isRequired
};

export default CustomModal;
