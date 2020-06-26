import React from 'react';
import PropTypes from 'prop-types';
import { UserImgWrapper } from './ComposeMessageBox.styles';

export const ComposeMessageBox: React.SFC<ComposeMessageBoxProps> = (props: ComposeMessageBoxProps) => {

return(
  <div>
      <UserImgWrapper src="/images/hostImage@3x.png"/>
      <SendMessageField >

</SendMessageField>
  </div>

);
}

function SendMessageField() {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = React.useRef<HTMLInputElement>(null);
  
  // const sendMessage = useCallback(

  //   async message => {
  //     await props.client.publish({
  //       channel: channels[0],
  //       message,
  //     });

  //     setInput('');
  //   },


  //   [props.client, setInput]
  // );
  const onButtonClick = () => {
    
    
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅

    // if (inputEl && inputEl.current) {
    //   inputEl.current.focus();
    // }
  };
  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
