import React from "react";
import { NavLink } from 'react-router-dom';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const links = ({ data: { loading, error, navigations } }) => {
    if (error) return <h1>Error fetching the post! </h1>;
    if (!loading) {
        return(
            <nav className='nav col row'>
              { navigations[0].linkName.map((link) => (
                <NavLink
                  key={link}
                  exact to={link === 'Home' ? '/' : `/${link}`}
                  className='navLink col'
                  activeClassName='link-isActive'
                >
                  {link}
                </NavLink>
              )) }
            </nav>
        )
    }

    return <h2>Loading post...</h2>
}

export const linksQuery = gql`
query {
  navigations {
    linkName
  }
}
`
export default graphql(linksQuery, {
    //currently options are not used
/*
    options: ({ match }) => ({
        variables: {
            slug: match.params.slug
        }
    })
*/
})(links)
