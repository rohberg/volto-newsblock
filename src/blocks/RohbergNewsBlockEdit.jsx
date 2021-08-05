import React from 'react';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
import InlineForm from '@plone/volto/components/manage/Form/InlineForm';

export const NewsBlockSchema = {
  title: 'News block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['news_list'],
    },
  ],
  properties: {
    news_list: {
      title: 'Some News',
      type: 'list',
      widget: 'newsblockwidget',
    },
  },
  required: [],
};

const Edit = ({ data, onChangeBlock, block, selected }) => {
  return (
    <>
      <div className={'block newsblock'}>
        {data.news_list?.items.length > 0
          ? data.news_list.items.map((item, index) =>
              item.newsitem ? (
                <div key={index}>
                  <img
                    src={flattenToAppURL(
                      item.newsitem[0]?.getURL + `/@@images/image/mini`,
                    )}
                    alt="news"
                  />
                  <div>{item.newsitem[0]?.title}</div>
                </div>
              ) : null,
            )
          : 'News block without items selected'}
      </div>
      <SidebarPortal selected={selected}>
        <InlineForm
          schema={NewsBlockSchema}
          title={NewsBlockSchema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
