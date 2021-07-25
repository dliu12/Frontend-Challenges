import './App.css'
import Card from './components/card/card.js'
import Content from './components/content/content.js'
import image from './images/image-header-desktop.jpg'

function App() {
    return (
        <Card>
            <div className="card-content">
                <Content />
                <div className="card-img">
                    <div className="img-overlay" />
                    <img src={image} alt="workers sitting at table" />
                </div>
            </div>
        </Card>
    )
}

export default App
