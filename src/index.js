import icon from '@plone/volto/icons/list-bullet.svg';

import RohbergNewsBlockEdit from './blocks/RohbergNewsBlockEdit';
import RohbergNewsBlockView from './blocks/RohbergNewsBlockView';

const applyConfig = (config) => {
  config.blocks.blocksConfig.rohbergnewsblock = {
    id: 'rohbergnewsblock',
    title: 'News Block',
    edit: RohbergNewsBlockEdit,
    view: RohbergNewsBlockView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default applyConfig;
