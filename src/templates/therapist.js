import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TherapistTemplate = ({
  content,
  contentComponent,
  name,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {name}
            </h1>
            <p>{title}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

TherapistTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Therapist = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TherapistTemplate
        content={post.html}
        contentComponent={HTMLContent}
        name={post.frontmatter.name}
        title={post.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Therapist">
            <title>{`${post.frontmatter.name}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.title}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

Therapist.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Therapist

export const pageQuery = graphql`
  query TherapistByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        title
      }
    }
  }
`
