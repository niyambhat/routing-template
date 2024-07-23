// src/views/Views.tsx
import React, { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { OpenBackdrop, PageLayout } from '../components/layouts';
import { pageRoutes } from '../shared/routing/routing.config';

function Views() {
  return (
    <Routes>
      <Route
        element={
          <PageLayout>
            <Outlet />
          </PageLayout>
        }
      >
        {pageRoutes.map(({ key, element }) => (
          <Route
            key={key}
            path={key}
            element={
              <Suspense fallback={<OpenBackdrop/>}>
                {element}
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default Views;
