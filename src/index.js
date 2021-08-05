import icon from '@plone/volto/icons/list-bullet.svg';

import RohbergNewsBlockEdit from './blocks/RohbergNewsBlockEdit';
import RohbergNewsBlockView from './blocks/RohbergNewsBlockView';
import NewsBlockWidget from './blocks/NewsBlockWidget';

const applyConfig = (config) => {
  config.blocks.blocksConfig.rohbergnewsblock = {
    id: 'rohbergnewsblock',
    title: 'News Block',
    edit: RohbergNewsBlockEdit,
    view: RohbergNewsBlockView,
    icon: icon,
    group: 'common',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.widgets.widget.newsblockwidget = NewsBlockWidget;

  return config;
};

export default applyConfig;
