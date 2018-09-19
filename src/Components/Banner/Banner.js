import React from 'react';

import Aux from '../../hoc/aux';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

//import "../../scss/Components/_banner.scss";

const banner = ({ data: { loading, error, summeryBanners } }) => {
    if (error) return <h1>Error fetching the post! </h1>
    if (!loading) {
        return (
            <Aux>
                { summeryBanners.map((banner) => (
                    <div key={banner.id} className='banner'>
                      <img src={banner.bannerImg.url} alt={banner.bannerImg.fileName}/>
                      <h5>{banner.bannerTitle}</h5>
                    </div>
                )) }
            </Aux>
        )
    }

    return <h2>Loading banner...</h2>
}

export const bannerQuery = gql`
query {
  summeryBanners (where: {status: PUBLISHED}) {
    status, id, bannerTitle, bannerImg {
      id, fileName, url
    }
  }
}
`
export default graphql(bannerQuery, {
    //currently options are not used
/*
    options: ({ match }) => ({
        variables: {
            slug: match.params.slug
        }
    })
*/
})(banner)
