import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './StyledCheckBox.styles';


interface Props extends React.Props<Checkbox> {
  label : string;
  style: any;
  defaultChecked?: boolean;
  checkedIcon?: any;
  uncheckedIcon?: any;
};

const StyledCheckBox = (props) => (
  <div className="StyledCheckBoxWrapper">
    Test content
  </div>
);

StyledCheckBox.propTypes = {
  // bla: PropTypes.string,
};

StyledCheckBox.defaultProps = {
  // bla: 'test',
};

export default StyledCheckBox;
