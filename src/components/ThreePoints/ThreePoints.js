import React, { useState } from 'react';
import './ThreePoints.css';
import { Carousel } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import 'bootstrap/dist/css/bootstrap.min.css';



function ThreePoints() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSelect(index === 2 ? 0 : index + 1),
        onSwipedRight: () => handleSelect(index === 0 ? 2 : index - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    return (
        <div className="container marketing">
            <div className="text-center text-secondary">
                <div className="container py-3">
                    <h1 className="sis">Por que a trabalhar com a Conob</h1>
                    <p className="col-lg-12 mx-auto">
                        Software sob medida. A sua empresa, mais inteligente.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center gap-5 d-none d-lg-flex">
                <div className="col-lg-3 position-relative py-3">
                    <h1 className="numero">01</h1>
                    <div className="box-blue">
                        <h2 className="fw-normal mt-3">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details</a></p>
                    </div>
                </div>
                <div className="col-lg-3 position-relative py-3">
                    <h1 className="numero">02</h1>
                    <div className="box-blue">
                        <h2 className="fw-normal mt-3">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details</a></p>
                    </div>
                </div>
                <div className="col-lg-3 position-relative py-3">
                    <h1 className="numero">03</h1>
                    <div className="box-blue">
                        <h2 className="fw-normal mt-3">Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-secondary" href="#">View details</a></p>
                    </div>
                </div>
            </div>

            <div {...handlers}>
                <Carousel activeIndex={index} onSelect={handleSelect} className="d-lg-none">
                    <Carousel.Item>
                        <div className="col-md-12 position-relative py-3">
                            <h1 className="numero">01</h1>
                            <div className="box-blue">
                                <h2 className="fw-normal mt-3">Heading</h2>
                                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                                <p><a className="btn btn-secondary" href="#">View details</a></p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="col-md-12 position-relative py-3">
                            <h1 className="numero">02</h1>
                            <div className="box-blue">
                                <h2 className="fw-normal mt-3">Heading</h2>
                                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                                <p><a className="btn btn-secondary" href="#">View details</a></p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="col-md-12 position-relative py-3">
                            <h1 className="numero">03</h1>
                            <div className="box-blue">
                                <h2 className="fw-normal mt-3">Heading</h2>
                                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                                <p><a className="btn btn-secondary" href="#">View details</a></p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default ThreePoints;
