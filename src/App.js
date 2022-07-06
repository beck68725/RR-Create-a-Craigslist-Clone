// Import data
import {postings} from './postings'
import Directory from './components/directory'
import Gallery from './components/gallery'
import Search from './components/search'
import Sidebar from './components/sidebar'
// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
      <Search />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
