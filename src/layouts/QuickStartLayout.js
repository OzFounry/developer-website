import React from 'react';
import {
  Layout,
  GlobalHeader,
  MobileHeader,
} from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import '../components/styles.scss';

const QuickStartLayout = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <MobileHeader>New sidebar here</MobileHeader>
      <Layout>
        <Layout.Sidebar>New sidebar here</Layout.Sidebar>
        <Layout.Main
          css={css`
            min-height: 100vh;
          `}
        >
          {children}
        </Layout.Main>
      </Layout>
    </>
  );
};

QuickStartLayout.propTypes = {
  children: PropTypes.node,
};

export default QuickStartLayout;
