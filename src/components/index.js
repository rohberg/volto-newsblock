import { defineMessages } from 'react-intl';

import HistoryWidget from './widgets/HistoryWidget/HistoryWidget';
import FooComponent from './FooComponent/FooComponent';

// Did you customize Volto components? Override here!
const messages = defineMessages({
  home: {
    id: 'Home',
    defaultMessage: 'Home',
  },
});

export { HistoryWidget, FooComponent };
