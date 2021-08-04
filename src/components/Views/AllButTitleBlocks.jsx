import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';

import { Container, Form, Image, List } from 'semantic-ui-react';
import { map } from 'lodash';

import config from '@plone/volto/registry';

import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
  getBaseUrl,
} from '@plone/volto/helpers';

const messages = defineMessages({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}',
  },
});

const AllButTitleBlocks = ({ content, intl, location }) => {
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);

  return map(
    content[blocksLayoutFieldname].items.filter(
      (block) => content[blocksFieldname]?.[block]?.['@type'] !== 'title',
    ),
    (block) => {
      const Block =
        config.blocks.blocksConfig[
          content[blocksFieldname]?.[block]?.['@type']
        ]?.['view'] || null;
      return Block !== null ? (
        <Block
          key={block}
          id={block}
          properties={content}
          data={content[blocksFieldname][block]}
          path={getBaseUrl(location?.pathname || '')}
        />
      ) : (
        <div key={block}>
          {intl.formatMessage(messages.unknownBlock, {
            block: content[blocksFieldname]?.[block]?.['@type'],
          })}
        </div>
      );
    },
  );
};

export default AllButTitleBlocks;
