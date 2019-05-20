import React from 'react';
import { string, func, bool } from 'prop-types';
import { View, Text, Image } from 'react-native';
import translate from 'utils/i18n';
import CustomModal from 'components/common/CustomModal';
import targetIcon from 'assets/target/target.png';
import Button from 'components/common/Button';
import styles from './styles';

const DeleteTargetModal = ({ visible, targetName, onPressDelete, onPressCancel }) =>
  <CustomModal
    visible={visible}
    transparent
  >
    <View style={styles.contentContainer}>
      <Text style={styles.header}>{translate('TARGETS.deleteTarget')}</Text>
      <View style={styles.iconContainer}>
        <Image source={targetIcon} style={styles.targetIcon} />
      </View>
      <Text style={styles.targetName}>{targetName}</Text>
    </View>
    <Button
      title={translate('COMMON.delete')}
      addedContainerStyle={[styles.btnContainer, styles.deleteBtnContainer]}
      addedTouchableStyle={styles.btn}
      onPress={onPressDelete}
    />
    <Button
      title={translate('COMMON.cancel')}
      addedContainerStyle={[styles.btnContainer, styles.cancelBtnContainer]}
      addedTouchableStyle={[styles.btn, styles.cancelBtn]}
      addedTextStyle={styles.cancelBtnText}
      onPress={onPressCancel}
    />
  </CustomModal>;

DeleteTargetModal.propTypes = {
  visible: bool.isRequired,
  targetName: string.isRequired,
  onPressDelete: func.isRequired,
  onPressCancel: func.isRequired
};

export default DeleteTargetModal;
