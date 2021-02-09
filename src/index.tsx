import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import courses from 'mock/courses.mock.json';
import { Model, Server } from 'miragejs';

import App from './App';
// import Course from 'interfaces/Course';

// import reportWebVitals from './reportWebVitals';

const mirajeServer = new Server({
  models: {
    course: Model,
  },
  seeds(server) {
    server.create('course', { id: 1, name: 'PHP', duration: 1000 } as any);
    server.create('course', { id: 2, name: 'JS', duration: 1000 } as any);
    server.create('course', { id: 3, name: 'TS', duration: 1000 } as any);
  },
  routes() {
    this.namespace = 'api';

    this.get('/courses', (schema: any) => schema.courses.all());

    this.post('/courses', (schema: any, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.courses.create(attrs);
    });

    this.patch('/courses/:id', (schema, request) => {
      const course = JSON.parse(request.requestBody);
      return schema.db.courses.update(course.id, course);
    });
  },
});

console.log('Fake api started', mirajeServer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
