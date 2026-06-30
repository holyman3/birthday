import './Splash.css'
import balloonSvg from '../src/assets/baloon.svg' // adjust path

const Splash = () => {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-title">🎂</div>
      {/* Six balloons using your SVG */}
      <div className="balloon">
        <img src={balloonSvg} alt="" />
      </div>
      <div className="balloon">
        <img src={balloonSvg} alt="" />
      </div>
      <div className="balloon">
        <img src={balloonSvg} alt="" />
      </div>
      <div className="balloon">
        <img src={balloonSvg} alt="" />
      </div>
      <div className="balloon">
        <img src={balloonSvg} alt="" />
      </div>
      <div className="balloon">
        <img src={balloonSvg} alt="" />
      </div>
    </div>
  )
}

export default Splash
