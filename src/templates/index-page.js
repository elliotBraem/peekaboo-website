import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import child from '../img/children/boy-red-shirt.svg'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  services,
  rates,
  description,
  intro,
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="content">
                <h4>Occupational therapy services to children birth to 3 years old and their families in the Denver-metro area.</h4>
                <h4>We provide services in environments where your child experiences the most; your home, your daycare or in the community.</h4>
                <h4>We are named Peek-a-boo Pediatric Therapy because every child should have the opportunity to play the game of peek-a-boo with their parents, siblings, grandparents and any other person in their life.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bde5ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,128C672,171,768,245,864,266.7C960,288,1056,256,1152,213.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div class="behind-container">
        <img src={child} alt="Child" className="child red-shirt" />
      </div>
    </div>
    {/* end mainpitch */}
    {/* start services */}
    <section className="section section--gradient blue-background-color front-container">
      <div className="container">
        <div className="section">
          <div className="column is-mobile is-centered">
            <div className="column is-6">
              <div className="content has-text-centered">
                <h1 className="title">{services.heading}</h1>
                <div className="tile">
                  <h6 className="subtitle">{services.subheading}</h6>
                </div>
                <div className="tile">
                  <h6 className="subtitle">{services.intro}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end services */}
    {/* start rates */}
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="content">
              <h1 className="title">{rates.heading}</h1>
              {/* <div className="tile">
                  <h3 className="subtitle">{rates.subheading}</h3>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{rates.intro}</h3>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <div className="content has-text-centered">
                    <h1 className="title">{rates.heading}</h1>
                    <br />
                    <div className="tile">
                      <h4 className="title">{rates.ei}</h4>
                      <h5 className="subtitle">{rates.subheading}</h5>
                    </div>
                    <br />
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.line2}</h3>
                    </div>
                    <br />
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.line3}</h3>
                    </div>
                  </div> */}
    {/* end rates */}
    {/* start team */}
    {/* end team */}
    {/* <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div> */}
    {/* <CrayonList listItems={intro.blurbs} /> */}
    {/* <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                    </Link>
                    </div>
                  </div> */}
    {/* <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                    </Link>
                    </div>
                  </div> */}
  </div >
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        services={frontmatter.services}
        description={frontmatter.description}
        intro={frontmatter.intro}
        rates={frontmatter.rates}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          heading
          line1
          line2
          line3
        }
        services {
          heading
          subheading
          intro
          list
        }
        rates {
          heading
          ei
          subheading
        }
        description
        intro {
          heading
          description
        }
      }
    }
  }
`
