import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Page404 from './pages/Page404';
import ProjectDetails from './pages/ProjectDetails';
import ProjectList from './pages/ProjectList';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="projects" element={<ProjectList />}/>
        <Route path="projects/:projectId" element={<ProjectDetails/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Layout>
  );
}
