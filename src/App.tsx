import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Routes/Home';
import Search from './Routes/Search';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
