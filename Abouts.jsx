import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import IndexNavBar from '../IndexNavBar'
import Cards from './Cards';
import data from '../data/data'

function Abouts() {
  let properties = data.properties;
  let [property, setIndex] = useState(data.properties[1]);
  
  const nextProperty = () => {
    setIndex = () => this.state.property.index+1;
      property = data.properties[setIndex]
  }

  const prevProperty = () => {
    setIndex = () => properties.index+1;
      property = data.properties[setIndex]
  }
  
    return (
        <>
        <IndexNavBar />
        <div className="section section-dark-blue text-center">
        <div className="filter" />
        <Container>
        <div className="container-fluid">
        <Row>
        <Col className="ml-0">
        <Button 
          onClick={() => prevProperty()} 
          disabled={property.index === 0}
          className="btn-info">Prev</Button>
        </Col>
        <Col className="mr-0">
        <Button
          onClick={() => nextProperty()} 
          disabled={property.index === data.properties.length-1}
          className="btn-info">Next</Button>
        </Col>
        </Row>
        <Row>
            <Col className="justify-content-center">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Cards key={property._id} property={property} />)
                  }
                </div>
              </div>
            </Col>
        </Row>
        </div>
        </Container>
      </div>
      </>
    )
}

Abouts.propTypes = {

}

export default Abouts

