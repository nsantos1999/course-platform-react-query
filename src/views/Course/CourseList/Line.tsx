import ReactQueryKeys from 'constants/ReactQueryKeys';
import React, { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import CourseService from 'services/CourseService';
import Course from '../../../interfaces/Course';

interface Props {
  course: Course;
}

function CourseLine({ course }: Props) {
  return (
    <tr>
      <td>{course.id}</td>
      <td>{course.name}</td>
      <td>{course.duration} minutos</td>
    </tr>
  );
}

export default CourseLine;
