import React from 'react';
import { WHITE, BLACK } from 'constants/styleConstants';
import Button from 'components/common/Button';

const WhiteButton = props =>
  <Button
    textColor={BLACK}
    color={WHITE}
    width="100%"
    {...props}
  />;

export default WhiteButton;
