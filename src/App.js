import './App.css';
import './css/style.css';
import './css/modal.css';

// Importing JavaScript files
import './js/menu.js';
import './js/scrollbar.js';
import './js/scrolling.js';
import './js/searchbox.js';
import './js/sliders.js';
import './js/filters.js';
import {Routes} from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
