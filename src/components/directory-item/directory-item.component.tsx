import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { Categories } from '../../store/categories/categories.types';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';
import { DirectoryCategory } from '../directory/directory.component';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route, size } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler} size={size}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
