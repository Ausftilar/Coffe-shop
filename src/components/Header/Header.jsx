import './Header.css';

const Header = (props) => {
    return (
        <>
            <section className="header">
                <div className="container">
                    <h1 className="header_title">Everything You Love About Coffee</h1>
                    <div className="coffe_wrapper-white">
                        <img className="coffe_hr-white" src="/assets/img-coffe/coffe-white.svg" alt="coffe" />
                    </div>
                    <h2 className="header_subtitle">We makes every day full of energy and taste <br /> Want to try our beans?</h2>
                    <button className="header_btn">More</button>
                </div>
            </section>
        </>
    )
}

export default Header;