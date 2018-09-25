import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown';

const Post = ({data: {loading, error, post } }) => {
  if (error) return <h1>Error fetching the post!</h1>
  if(!loading) {
    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.dateAndTime} | {post.tags.map(tag => (
          <span className='tag' key={tag}>{tag}</span>
          ))}</p>
        <div className='placeholder'>
          <img alt={post.title} src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`} />
        </div>
        <Markdown source={post.content} escapeHtml={false} />
      </article>
    )
  }
  return <h2>Loading post...</h2>
}

export const singlePost = gql`
  query Post($id: ID!) {
    post(where: { id: $id }) {
      id
      slug
      title
      coverImage{
        handle
      }
      content
      dateAndTime
      tags
    }
  }
`

export default graphql(singlePost,{
  options:({match}) => ({
    variables: {
      id:match.params.slug
    }
  })
})(Post)
