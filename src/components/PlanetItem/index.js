import Slider from 'react-slick'
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
  }

  return (
    <>
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <div className="planet-item-container">
            <img
              src={eachPlanet.imageUrl}
              alt={`planet ${eachPlanet.name}`}
              className="planet-img"
            />
            <h1 className="planet-name">{eachPlanet.name}</h1>
            <p className="planet-description">{eachPlanet.description}</p>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default PlanetItem
