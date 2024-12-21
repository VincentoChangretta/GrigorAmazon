import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { Test } from "../Pages/Test/Test"
import { PATHNAMES } from '../../public/Constants';

export const Navigation = () => {
    return (
        <Routes>
            <Route path={PATHNAMES.home} element={<Home />} />
            <Route path={PATHNAMES.test} element={<Test />} />
        </Routes>
    );
}
