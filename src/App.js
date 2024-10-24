import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/users" element={<Users />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
