import React, {Fragment, useState} from "react";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types'
import StarIcon from '@material-ui/icons/Star';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from "@material-ui/core/Typography";
import fn from "../src/utils/functions";

import moment from 'moment'

const ProductItem = (props) => {
    const {
        product
    } = props

    const [overview, setOverview] = useState(false)

    const renderRating = () => {
        const rating = parseInt(product.rating)
        let response = []
        for (let i = 0; i < rating; i++) {
            response.push(<StarIcon className="rating" key={i}/>)
        }
        return response
    }

    const renderPassengerInfo = () => {
        return <Typography component="p" variant="body1">
            {product.adults} Adults, {product.children} children
            {product.infant && ` ${product.infant} infant`}
        </Typography>
    }

    const renderProductInfo = () => {
        return (
            <Fragment>
                <Typography component="p">
                    {moment(product.date, 'DD-MM-YYYY').format('ll')} for {product.durationInDay} days
                </Typography>

                <Typography component="p">
                    departing from {product.departingFrom}
                </Typography>
            </Fragment>
        )
    }

    const renderBookNow = () => {
        return (
            <div className="bookNow">
                <p>Book now</p>
                <p className="price">£ {fn.numberWithCommas(parseFloat(product.price).toFixed(2))}</p>
            </div>
        )
    }

    const handleToggleOverview = () => {
        setOverview(prevState => !prevState)
    }

    const renderReadMore = () => {
        if (overview) {
            return ' less '
        }

        return ' more '
    }

    return (
        <article>
            <Grid container className="productWrapper">
                <Grid item xs={7} className="productImageSection">
                    <div className="productImage"
                         style={{backgroundImage: `url('${product.image}')`}}
                         aria-label={product.title}/>

                    <div className="toggleOverView"
                         onClick={handleToggleOverview}>
                        <Typography variant="body1" className="textPrimary" component="p">
                            Read {renderReadMore()} about this hotel
                        </Typography>
                        <KeyboardArrowRightIcon
                            className={`accordion ${overview && 'rotate'}`}/>
                    </div>
                </Grid>

                <Grid item xs={5}>
                    <div className="productContent">
                        <h2>{product.title}</h2>
                        <h4>{product.subtitle}</h4>

                        <div className="rating">
                            {renderRating()}
                        </div>

                        <div className="productInfo">
                            {renderPassengerInfo()}
                            {renderProductInfo()}
                        </div>

                        {renderBookNow()}

                    </div>
                </Grid>

                <Grid item xs={12}>
                    <article className={`productOverview ${!overview && 'collapsed'}`}>
                        <div className="productOverviewContent">
                            <Typography component="h3" variant="h6" className="textPrimary">Overview</Typography>

                            <Typography variant="body1" componet="p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad architecto atque consequatur
                                distinctio harum laudantium nemo, non officia, praesentium quasi quia, unde veniam. Animi
                                debitis distinctio facilis mollitia velit.
                            </Typography>
                        </div>
                    </article>
                </Grid>
            </Grid>
        </article>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem
