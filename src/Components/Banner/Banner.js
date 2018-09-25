import React from 'react';

import Aux from '../../hoc/aux';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const banner = ({ data: { loading, error, summeryBanners } }) => {
    if (error) return <h1>Error fetching the post! </h1>
    if (!loading) {
        return (
            <Aux>
              { summeryBanners.map((banner) => (
                <div key={banner.id} className='banner'>
                  <img
                    src={`https://media.graphcms.com/${banner.bannerImg.handle}`}
                    alt={banner.bannerImg.fileName}/>
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
    id
    bannerTitle
    leftsidebullets
    rightsidebullets
    bannerImg {
      id
      fileName
      handle
    }
  }
}
`
export default graphql(bannerQuery)(banner);
