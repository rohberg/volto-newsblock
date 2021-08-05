import React from 'react';
import ObjectListWidget from '@plone/volto/components/manage/Widgets/ObjectListWidget';

const ItemSchema = () => {
  return {
    title: 'News item',
    properties: {
      newsitem: {
        title: 'News Item',
        widget: 'object_browser',
        mode: 'link',
        widgetOptions: {
          pattern_options: {
            maximumSelectionSize: 1,
            selectableTypes: ['News Item'],
          },
        },
      },
    },
    fieldsets: [
      {
        id: 'default',
        title: 'News Items',
        fields: ['newsitem'],
      },
    ],
    required: [],
  };
};

const NewsBlockWidget = (props) => {
  return (
    <ObjectListWidget
      schema={ItemSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default NewsBlockWidget;
