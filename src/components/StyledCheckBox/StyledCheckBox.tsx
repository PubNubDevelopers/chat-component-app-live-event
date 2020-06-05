import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCheckBoxTheStyle } from './StyledCheckBox.styles';


interface CheckBoxProps {
  text: string,
  setChange: {}

}

export const StyledCheckBox: React.FC<CheckBoxProps> = (props) => {
  
  const [text, setText] = useState(
    'tbd'
  );  
  return (
    <StyledCheckBoxTheStyle >
<label>
          <input
            type="checkbox"
            onChange={event => props.setChange}
            // checked={null} 
            // onClick={null}
            //id={"test"}
            //data-id="0"
          />
          {props.text}
</label>
</StyledCheckBoxTheStyle> 


  )
}



