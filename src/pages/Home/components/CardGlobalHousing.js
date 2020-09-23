import  React  from  'react';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';


export const CardGlobalHousing = (props) => (
    <Link className='link-global-housing'  to={`/detail/${props.id}`}>
        <div className="card">
            <div className="col1">
                <img src="https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg" />
            </div>
            <div className="col2">
                <h2> description</h2>
                <h5> Place </h5>
                <h6> Y evening 151 </h6>
                <div className="star-section">
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/> 
                    <h6>189</h6>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="col1">
                <img src="https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg" />
            </div>
            <div className="col2">
            <h2> description</h2>
                <h5> Place </h5>
                <h6> Y evening 151 </h6>
                <div className="star-section">
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/> 
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/>
                    <StarIcon color="primary" style={{ width: 20 }}/> 
                    <h6>182</h6>
                </div>
            </div>
        </div>
    </Link>
)