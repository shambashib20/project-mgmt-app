// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Clients from "./components/Clients";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import Home from './pages/Home';
// import Project from './pages/Project';
// import NotFound from './pages/NotFound';


const client = new ApolloClient({
  url: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        {/* <Router> */}
        <Header />
        <div className="container">
          <Clients />
          {/* <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />
            </Routes> */}
        </div>
        {/* </Router> */}
      </ApolloProvider>

    </>

  );
}

export default App;
