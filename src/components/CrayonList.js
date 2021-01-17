import React from 'react'
import PropTypes from 'prop-types'
import blueCrayon from '../img/crayons/blue-crayon.svg'
import greenCrayon from '../img/crayons/green-crayon.svg'
import orangeCrayon from '../img/crayons/orange-crayon.svg'
import purpleCrayon from '../img/crayons/purple-crayon.svg'
import redCrayon from '../img/crayons/red-crayon.svg'
import yellowCrayon from '../img/crayons/yellow-crayon.svg'

const CrayonList = ({ treatments }) => (
  <div className="columns is-multiline crayon-list-container">
    {
      treatments.map((treatment, index) => (
        <div key={treatment} className="column">
          <Crayon text={treatment} img={getCrayonImg()}/>
        </div>
      ))
    }
  </div >
)

const getCrayonImg = () => {
  const crayonImgs = [
    blueCrayon,
    greenCrayon,
    orangeCrayon,
    purpleCrayon,
    redCrayon,
    yellowCrayon
  ];
  return crayonImgs[Math.floor(Math.random() * crayonImgs.length)];
}

CrayonList.propTypes = {
  treatments: PropTypes.arrayOf(PropTypes.string)
}

CrayonList.defaultProps = {
  treatments: []
}

const Crayon = ({ text, isFlipped }) => {
  return (
    <div className="crayon-container">
      <img src={getCrayonImg()} alt="Child" />
      <p>{text}</p>
    </div>
  )
}

Crayon.propTypes = {
  text: PropTypes.string,
  isFlipped: PropTypes.bool
}

export default CrayonList
