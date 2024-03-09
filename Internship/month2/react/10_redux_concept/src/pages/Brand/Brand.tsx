

// imported files
import AvailableItems from './AvailableItems/AvailableItem';
import { useAppSelector } from '../../redux/foodSlice';

// css files
import './Brand.css';

const Brand = () => {
  const selectedBrand = useAppSelector(state=>state.brand.BrandState) ;

  return (
    <div>
        <div className="image-header">
      <div className="left">
        <img src="/images/brand-left.png" alt="" />
      </div>
      <div className="right_1">
        <img src="/images/brand-right.png" alt="" className="right-up" />
      </div>
      <div className="right_2">
        <img src="/images/brand-right-down.png" alt="" className="right-down" />
      </div>
    </div>

    {/* <!-- brand --> */}
    <div className="brand">
      <div className="brand-image">
        <img src={`/images/${selectedBrand?.image}`} alt="" />
      </div>
      <div className="brand-content">
        <span className="title">{selectedBrand?.brandtitle }</span>
        <div className="description">
          <p>Pizza, Fast Food, Beverages</p>
          <p>Average Cost: <span>700rs per 2 Person</span></p>
        </div>
        <p>Vesu,Sura</p>
        <p><span className="red">Open Now: </span>11am - 11pm(Today)</p>
        <div className="brand-btns">
          <button>Order Online</button>
          <button>Directions</button>
          <button>Share</button>
        </div>
      </div>
    </div>

    {/* <!-- menu-image section--> */}
    <div className="menu-section">
      <span className="menu-title">Menu</span>
      <div className="menu-image">
        <div className="first-menu">
          <img src="/images/menu.png" alt="" />
          <p>Dinning Menu</p>
        </div>
        <div className="second-menu">
          <img src="/images/menu.png" alt="" />
          <p>Takeaway Menu</p>
        </div>
      </div>
    </div>

    <AvailableItems/>
    </div>
  )
}

export default Brand