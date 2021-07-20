import './App.css'
import Card from './components/card/card.js'
import Content from './components/content/content.js'
import image from './images/image-header-desktop.jpg'

function App() {
    return (
        <Card>
            <Content />
            <img src={image} />
        </Card>
    )
}

export default App
