import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Contact from './Contact';
import SinglePage from './SinglePage';
import Footer from './Footer';
import Header from './Header';
import LogIn from './LogIn';
import Register from './SignIn';
import NotFound from './NotFound';
import Account from './Account';
import EditAccount from './EditAccount'; 
import Shop from './Shop';
import AllUsersList from './AllUsersList';

function MyRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/editpost/:id' element={<EditPost />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/post/:id' element={<SinglePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editaccount/:id" element={<EditAccount />} /> 
        <Route path="/allusers" element={<AllUsersList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MyRoutes;
