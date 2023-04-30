import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container, Header } from 'components';

const PricesPage = lazy(() => import('../pages/pricesPage/PricesPage'));
const TablePage = lazy(() => import('../pages/tablePage/TablePage'));

export const App = () => {
  return (
    <>
      <Container>
        {/* <Suspense fallback={<Loader />}> */}
        <Header />
        <Suspense>
          <Routes>
            <Route path="/" element={<PricesPage />} />
            <Route path="prices" index element={<PricesPage />} />
            <Route path="table" element={<TablePage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
