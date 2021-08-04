import React from 'react';
import { defineMessages } from 'react-intl';

import ObjectListWidget from '@plone/volto/components/manage/Widgets/ObjectListWidget';

const messages = defineMessages({
  historyitemtitle: {
    id: 'Manual History Item',
    defaultMessage: 'History-Eintrag',
  },
  addHistoryItem: {
    id: 'Add manual history item',
    defaultMessage: 'History-Eintrag erstellen',
  },
  historydate: {
    id: 'Manual History Date',
    defaultMessage: 'Datum',
  },
  historytopic: {
    id: 'Manual History Subject',
    defaultMessage: 'Was',
  },
  historyversion: {
    id: 'Manual History Version',
    defaultMessage: 'Version',
  },
  historyauthor: {
    id: 'Manual History Author',
    defaultMessage: 'Wer',
  },
});

// TODO translation
// historydate, historytopic, historyversion, historyauthor
// const LineSchema = {
//   title: 'History-Eintrag',
//   properties: {
//     historydate: {
//       title: 'Geändert am',
//       widget: 'date',
//     },
//     historytopic: {
//       title: 'Was',
//     },
//     historyversion: {
//       title: 'Version',
//     },
//     historyauthor: {
//       title: 'Wer',
//     },
//   },
//   fieldsets: [
//     {
//       id: 'default',
//       title: 'History-Eintrag',
//       fields: [
//         'historydate',
//         'historytopic',
//         'historyversion',
//         'historyauthor',
//       ],
//     },
//   ],
// };
const ItemSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.historyitemtitle),
    addMessage: intl.formatMessage(messages.addHistoryItem),
    properties: {
      historydate: {
        title: intl.formatMessage(messages.historydate),
        widget: 'date',
      },
      historytopic: {
        title: intl.formatMessage(messages.historytopic),
      },
      historyversion: {
        title: intl.formatMessage(messages.historyversion),
      },
      historyauthor: {
        title: intl.formatMessage(messages.historyauthor),
      },
    },
    fieldsets: [
      {
        id: 'default',
        title: 'History-Eintrag',
        fields: [
          'historydate',
          'historytopic',
          'historyversion',
          'historyauthor',
        ],
      },
    ],
    required: [],
  };
};

// TODO defaultData
const HistoryWidget = (props) => {
  // TODO intl
  return (
    <ObjectListWidget
      schema={ItemSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default HistoryWidget;
