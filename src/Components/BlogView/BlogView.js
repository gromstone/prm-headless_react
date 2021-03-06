import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const POSTS_PER_PAGE = 4;

const blog = ({data:{loading, error, posts, postsConnection, networkStatus}, loadMorePosts }) => {
  if (error) return <h1>Error fetching posts!</h1>;

  if(posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count
    return(
      <section className='blog'>
        <ul className='blog-ul row'>
          { posts.map(post => (
            <li className="blog-li col" key={`post-${post.id}`}>
              <Link to={`/post/${post.id}`} className='blog-link row'>
                <div className='placeholder col'>
                  <img className='blog-img' src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`} alt={post.title}/>
                </div>
                <div className='col'>
                  <h3>{post.title}</h3>
                  <p>written by: {post.author.name}</p>
                  { post.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className='showMore'>
          { areMorePosts ? <button className='blog-btn' disabled={loading} onClick={() => loadMorePosts()} >{ loading ? 'loading more posts...' : 'Show More Posts' }</button> : '' }
        </div>
      </section>
    )
  }
  return <h2>loading posts...</h2>
}

export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      coverImage {
        handle
      }
      tags
      author {
        name
      }
    },
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(posts, {
  options: {
    variables: postsQueryVars
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allPosts: [...previousResult.posts, ...fetchMoreResult.posts]
          })
        }
      })
    }
  })
})(blog)
