import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Routing Components */
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
// Routing Pages
const Banners = lazy(() => import('./pages/Banners'));
// Routing Product
const Men = lazy(() => import('./product/Men'));
const Women = lazy(() => import('./product/Women'));
const App = () => (
<Router>
 <Suspense fallback={<div>Loading...</div>}>
 <Routes>
 {/* Routing Components */}
 <Route path="/" element={<Home />} />
 <Route path="Navbar" element={<Navbar />} />
 <Route path="Home" element={<Home />} />
 <Route path="Login" element={<Login />} />
 {/* Routing Pages */}
 <Route path="Banners" element={<Banners />} />
 {/* Routing Product */}
 <Route path="Men" element={<Men />} />
 <Route path="Women" element={<Women />} />
 </Routes>
 </Suspense>
</Router>
);
export default App;