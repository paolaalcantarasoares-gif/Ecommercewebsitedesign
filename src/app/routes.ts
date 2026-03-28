import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'products', Component: ProductsPage },
      { path: 'product/:id', Component: ProductPage },
      { path: 'about', Component: AboutPage },
    ],
  },
]);
