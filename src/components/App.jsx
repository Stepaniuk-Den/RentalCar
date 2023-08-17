// import CatalogPage from 'pages/CatalogPage/CatalogPage';
// import SearchForm from './SearchForm/SearchForm';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import HomePage from 'pages/HomePage/HomePage';
// import FavoritePage from 'pages/FavoritePage/FavoritePage';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage'));
const Favorite = lazy(() => import('pages/FavoritePage/FavoritePage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
    // <div>
    //   <h1>React homework template</h1>
    //   <SearchForm/>
    //   <CatalogPage/>
    // </div>
  );
};
