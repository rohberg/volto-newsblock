import React from 'react';
import { SidebarPortal } from '@plone/volto/components';

const Edit = ({ data, onChangeBlock, block, selected }) => {
  return (
    <div className={'block news'}>
      <SidebarPortal selected={selected}>
      </SidebarPortal>
    </div>
  );
};

export default Edit;
