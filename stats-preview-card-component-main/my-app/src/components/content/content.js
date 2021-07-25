import './content.css'
import '../../index.css'

const Content = () => {
    return (
        <div className="content">
            <div className="content-msg">
                <h2 className="content-mainMsg">
                    Get <span>insights</span> that help your business grow.{' '}
                </h2>
                <p className="content-subMsg">
                    Discover the benefits of data analytics and make better decisions regarding
                    revenue, customer experience, and overall efficiency.
                </p>
            </div>
            <ul className="content-data">
                <li>
                    <span className="content-data-bold">10k+</span>
                    <p>companies</p>
                </li>
                <li>
                    <span className="content-data-bold">314</span>
                    <p>templates</p>
                </li>
                <li>
                    <span className="content-data-bold">12M+</span>
                    <p>queries</p>
                </li>
            </ul>
            {/* <div>
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                    Frontend Mentor
                </a>
            </div> */}
        </div>
    )
}

export default Content
