import Course from 'interfaces/Course';
// import coursesMock from 'mock/courses.mock.json';
import axios from 'axios';

class CourseService {
  static async getAll(): Promise<Course[]> {
    const {
      data: { courses },
    } = await axios.get('/api/courses');

    return courses;
  }

  static async save(course: Course): Promise<Course> {
    const newCourse = await axios.post('/api/courses', course);
    console.log(newCourse);
    return course;
  }
}

export default CourseService;
