import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  Content,
  Subtitle,
  Title,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const menuItemClickHandler = () => history.push(`${match.url}${linkUrl}`);

  return (
    <MenuItemContainer size={size} onClick={menuItemClickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
