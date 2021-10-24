import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class CourseReel extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <article
                className="blog-list-item tile is-child box notification"
              >
                <header>
                  {post.frontmatter.image ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
                          alt: `${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <a
                      className="title has-text-primary is-size-4"
                      href={post.frontmatter.url}
                    >
                      {post.frontmatter.title}
                    </a>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Learn More →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

CourseReel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CourseReelQuery {
        allMarkdownRemark(
          # sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "course" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                url
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CourseReel data={data} count={count} />}
  />
)
