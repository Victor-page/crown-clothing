import { useHistory } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  Content,
  Subtitle,
  Title,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();

  const menuItemClickHandler = () => history.push(`/${linkUrl}`);

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
