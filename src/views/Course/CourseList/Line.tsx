import ReactQueryKeys from 'constants/ReactQueryKeys';
import React, { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import CourseService from 'services/CourseService';
import Course from '../../../interfaces/Course';

interface Props {
  course: Course;
}

function CourseLine({ course }: Props) {
  const queryClient = useQueryClient();

  const mutation = useMutation(CourseService.save, {
    onSuccess: () => {
      console.log('Teste');
      queryClient.invalidateQueries(ReactQueryKeys.COURSES);
    },
  });

  const handleUpdatePress = useCallback(() => {
    mutation.mutate({
      id: 4545,
      name: 'Teste',
      duration: 1000,
    });
  }, [mutation]);

  return (
    <tr>
      <td>{course.id}</td>
      <td>{course.name}</td>
      <td>{course.duration} minutos</td>
      <td>
        <button type="button" onClick={handleUpdatePress}>
          Edit
        </button>
      </td>
    </tr>
  );
}

export default CourseLine;
