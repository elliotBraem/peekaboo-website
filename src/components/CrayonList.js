import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const CrayonList = ({ listItems }) => (
  <div className="columns is-multiline">
    {listItems.map((item) => (
      <div key={item} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <Crayon text={item} />
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
)

CrayonList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string)
}

const Crayon = ({ text }) => {
  return (<div>
    <PreviewCompatibleImage imageInfo={text} />
  </div>)
}

Crayon.propTypes = {
  text: PropTypes.string
}

export default CrayonList
