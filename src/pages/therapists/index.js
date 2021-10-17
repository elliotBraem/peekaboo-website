import React from 'react'

import Layout from '../../components/Layout'
import TherapistRoll from '../../components/TherapistRoll'

export default class TherapistsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Our Therapists</h1>
              <TherapistRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
