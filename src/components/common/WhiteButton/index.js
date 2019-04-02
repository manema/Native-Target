import React from 'react';
import Button from 'components/common/Button';
import styles from './styles';

const WhiteButton = props =>
  <Button
    addedContainerStyle={styles.addedContainerStyle}
    addedTouchableStyle={styles.addedTouchableStyle}
    addedTextStyle={styles.addedTextStyle}
    {...props}
  />;

export default WhiteButton;
