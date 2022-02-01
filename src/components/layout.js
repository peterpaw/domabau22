import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
