import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { map } from 'lodash';

import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import config from '@plone/volto/registry';

import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const PersonView = ({ content, intl, location }) => {
  return (
    <>
      <Container id="person">
        <h2>PersonView</h2>
        <h1 className="documentFirstHeading">
          {content.first_name} {content.last_name}
        </h1>
        {content.companyposition && (
          <p className="personCompanyposition">{content.companyposition}</p>
        )}
        {content.bio?.data && (
          <div dangerouslySetInnerHTML={{ __html: content.bio.data }} />
        )}
        <div>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula
          ut id elit. Maecenas faucibus mollis interdum.
        </div>
      </Container>
    </>
  );
};

export default injectIntl(PersonView);
