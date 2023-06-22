import { Route, Routes } from 'react-router-dom';

import { HomePage } from '..';

export default function AllRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
    </Routes>
  );
}
