import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App ()  {
    return (
        <Router>
            <Routes>
                <Route path="/login" component={Login} />
                <Route path="/" element={<ProtectedRoute component={Home} />} />
            </Routes>
        </Router>
    );
};

export default App;
