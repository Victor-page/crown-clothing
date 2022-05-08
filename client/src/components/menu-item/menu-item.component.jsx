import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  Content,
  Subtitle,
  Title,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { url } = match;

  const menuItemClickHandler = () => history.push(`${url}${linkUrl}`);

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

export default MenuItem;
