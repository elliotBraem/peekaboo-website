import React from 'react'

import Layout from '../../components/Layout'
import CourseReel from '../../components/CourseReel'

export default class CoursesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Our Courses</h1>
              <CourseReel />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
