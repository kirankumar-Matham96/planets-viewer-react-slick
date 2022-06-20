import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-container">
      <div className="planetSlider-container" testid="planets">
        <PlanetItem planetsList={planetsList} />
      </div>
    </div>
  )
}

export default PlanetsSlider
