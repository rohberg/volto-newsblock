import React from 'react';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';

import './newsblock.css';

const View = ({ data }) => {
  return (
    <div className="block newsblock">
      {data.news_list?.items.length > 0
        ? data.news_list?.items.map((item, index) =>
            item.newsitem ? (
              <div key={index}>
                <Link to={flattenToAppURL(item.newsitem[0]?.getURL)}>
                  <img
                    src={flattenToAppURL(
                      item.newsitem[0]?.getURL + `/@@images/image/mini`,
                    )}
                    alt="news"
                  />
                  <div>{item.newsitem[0]?.title}</div>
                </Link>
              </div>
            ) : null,
          )
        : 'News block without items selected'}
    </div>
  );
};

export default View;
