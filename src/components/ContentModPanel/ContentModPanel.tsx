import React from 'react';
import PropTypes from 'prop-types';
import { ContentModPanelWrapper } from './ContentModPanel.styles';

interface ContentModPanelProps {
  skin: string,
  store: any,
  client: any,
}

export const ContentModPanel: React.SFC<ContentModPanelProps> = (props: ChatInitProps) => {
return(
  <ContentModPanelWrapper>
    
  </ContentModPanelWrapper>
);

ContentModPanel.propTypes = {
  // bla: PropTypes.string,
};

ContentModPanel.defaultProps = {
  // bla: 'test',
};

};