import Course from 'interfaces/Course';
import coursesMock from 'mock/courses.mock.json';

class CourseService {
  static async getAll(): Promise<Course[]> {
    return coursesMock;
  }

  static async save(course: Course): Promise<Course> {
    return course;
  }
}

export default CourseService;
