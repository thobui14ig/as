import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import LoginForm from './Component/Login';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<LoginForm />} />z
        </Routes>
      </BrowserRouter>  

    </QueryClientProvider>
  

  );
}

export default App;
