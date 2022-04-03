import './Our-best.css';

const OurBest = (props) => {
    return (
        <>
            <section className="our_best">
                <div className="container">
                    <h2 className="our_besr-title title">Our best</h2>
                    <div className="our_best-wpapper">
                        <div className="our_best-cart">
                            <img className="our_best-img" src="/assets/img-coffe/coffe-cart-2.jpg" alt="coffe" />
                            <div className="our_best-descr">
                                Solimo Coffee Beans 2 kg
                            </div>
                            <div className="our_besr-price">10.73$</div>
                        </div>
                        <div className="our_best-cart">
                            <img className="our_best-img" src="/assets/img-coffe/coffe-cart-1.jpg" alt="coffe" />
                            <div className="our_best-descr">
                                Presto Coffee Beans 1 kg
                            </div>
                            <div className="our_besr-price">15.99$</div>
                        </div>
                        <div className="our_best-cart">
                            <img className="our_best-img" src="/assets/img-coffe/coffe-cart.jpg" alt="coffe" />
                            <div className="our_best-descr">
                                AROMISTICO Coffee 1 kg
                            </div>
                            <div className="our_besr-price">6.99$</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurBest;