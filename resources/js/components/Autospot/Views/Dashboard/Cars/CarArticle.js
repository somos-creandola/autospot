import React from "react";
import {
    Article,
    FigureCard,
    FigureCardIsFeature,
    ImageCart,
} from "../../Website/Styles/Styles";

export const CarArticle = ({
    carsp: { id, vehicle, title, price, city, isFeatured },
}) => {
    return (
        <Article boxs={isFeatured} className="card">
            <div className="card-image featured">
                {isFeatured ? (
                    <CardTwo isFeatured={isFeatured} vehicle={vehicle} />
                ) : (
                    <CardOne isFeatured={isFeatured} vehicle={vehicle} />
                )}
            </div>
            <div className="card-content p-4">
                <div className="media-content">
                    <h5 className="title is-5">{title}</h5>
                    <p className="subtitle is-6">
                        {city.displayName} - {city.state.displayName}
                    </p>
                </div>
                <div className="content">
                    <h4 className="PostsGridElements__PostItemPrice-sc-1wn44yw-1 ikQxWY">
                        {formatter.format(price)}
                    </h4>
                </div>
            </div>
        </Article>
    );
};

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const CardOne = ({ isFeatured, vehicle }) => {
    return (
        <FigureCard boxs={isFeatured} className="image is-square m-0 p-0">
            <ImageCart
                src={vehicle?.photos[0]?.url}
                alt="Explorer Ford - 2016"
            />
        </FigureCard>
    );
};
const CardTwo = ({ isFeatured, vehicle }) => {
    return (
        <FigureCardIsFeature
            boxs={isFeatured}
            className="image is-square m-0 p-0"
        >
            <ImageCart
                src={vehicle?.photos[0]?.url}
                alt="Explorer Ford - 2016"
            />
        </FigureCardIsFeature>
    );
};
