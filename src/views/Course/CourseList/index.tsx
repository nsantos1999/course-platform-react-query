import ReactQueryKeys from 'constants/ReactQueryKeys';
import Course from 'interfaces/Course';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import CourseService from 'services/CourseService';
import CourseLine from './Line';

function CourseList() {
  const { data: courses, isFetching, error } = useQuery<Course[]>(
    ReactQueryKeys.COURSES,
    CourseService.getAll,
  );

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong :(</h1>;
  }

  return (
    <>
      <h1>Courses</h1>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses?.map(course => (
            <CourseLine course={course} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CourseList;
