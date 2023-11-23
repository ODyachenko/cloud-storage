import React, { FC } from 'react';
import Btn from '@/UI/Btn/Btn';
import SidebarFilters from './SidebarFilters';
import './styles.scss';

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <Btn className="sidebar__btn" type="button" value="Upload the files" />
      <SidebarFilters />
    </aside>
  );
};

export default Sidebar;
