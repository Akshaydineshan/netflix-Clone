
import './App.css';
import Banner from './Components/Banner';
import Row from './Components/Row';
import request from './Request';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
    <Banner />
     <Row title="Netflix originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}></Row>
     <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
     <Row title="Action " fetchUrl={request.fetchActionMovies}></Row>
     <Row title="Comedy " fetchUrl={request.fetchComedyMovies}></Row>
     <Row title="Romance" fetchUrl={request.fetchRomanceMovies}></Row>
     <Row title="Horror" fetchUrl={request.fetchHorrorMovies}></Row>
     <Row title="Documentarie" fetchUrl={request.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
