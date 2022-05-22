import { useContext } from 'react';

import DirectoryContext from '../../contexts/directory/directory.context';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenu } from './directory.styles';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
