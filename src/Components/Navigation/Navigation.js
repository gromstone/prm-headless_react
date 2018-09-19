import React from "react";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const links = ({ data: { loading, error, navigations } }) => {
    if (error) return <h1>Error fetching the post! </h1>;
    if (!loading) {
        return(
            <ul>
                { navigations.map((link) => (
                    <li key={link.linkName}>
                      <a href="">{link.linkName}</a>
                    </li>
                )) }
            </ul>
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
