import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import Layout from '../containers/layout';

const App = () => {
  return (
           <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index path="/" element={<Home/>} />
                        <Route path="*" element={<NotFound/>} /> 
                    </Routes> 
                </Layout>       
            </BrowserRouter>

        )
        }

export default App