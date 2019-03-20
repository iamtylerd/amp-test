import React from 'react';
import { StaticQuery, graphql } from 'gatsby';




const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryTest {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div>
       {children}
      </div>
    )}
  />
);


export default Layout;
