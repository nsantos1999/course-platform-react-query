import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CourseList from 'views/Course/CourseList';
import CourseForm from 'views/Course/CourseForm';

function Router() {
  return (
    <BrowserRouter>
      <div>
        {/* <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav> */}

        {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/course">
            <CourseList />
          </Route>
          <Route path="/course/form">
            <CourseForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
