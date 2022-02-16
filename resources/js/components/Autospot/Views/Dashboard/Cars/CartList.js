import React from "react";
import { useHistory } from "react-router-dom";
import { ShowAllVips } from "../../Website/Styles/Styles";
import { CarArticle } from "./CarArticle";

export const CartList = ({ carsp, isFeatured = false }) => {
    const history = useHistory();
    return (
        <>
            {isFeatured && <IsFeatureCards carsp={carsp} history={history} />}
            <div className="row">
                {carsp.length &&
                    carsp.map((car, i) => {
                        if (!car.isFeatured)
                            return (
                                <div
                                    key={i}
                                    className="col-md-3 p-2"
                                    onClick={() =>
                                        history.push(`/publicacion/${car.id}`)
                                    }
                                >
                                    <CarArticle carsp={car} />
                                </div>
                            );
                    })}
            </div>
        </>
    );
};

const IsFeatureCards = ({ carsp, history }) => {
    const cars = carsp.filter((item) => item.isFeatured == true);
    return (
        <>
            <div className="row">
                {cars.length &&
                    cars.slice(0, 4).map((car, i) => {
                        if (car.isFeatured)
                            return (
                                <div
                                    key={i}
                                    className="col-md-3 p-2"
                                    onClick={() =>
                                        history.push(`/publicacion/${car.id}`)
                                    }
                                >
                                    <CarArticle carsp={car} />
                                </div>
                            );
                    })}
            </div>
            <div className="row d-flex align-items-center justify-content-end mb-3 px-2">
                <ShowAllVips>Ver todos los VIPs</ShowAllVips>
            </div>
        </>
    );
};
