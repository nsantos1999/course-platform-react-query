import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import CourseList from 'views/Course/CourseList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CourseList />
    </QueryClientProvider>
  );
}

export default App;
