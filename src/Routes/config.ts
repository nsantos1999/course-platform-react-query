import CourseForm from 'views/Course/CourseForm';
import CourseList from 'views/Course/CourseList';

interface IRoutesConfig {
  path: string;
  component: React.FC;
  //   routes?: IRoutesConfig[];
}

const routes: IRoutesConfig[] = [
  {
    path: '/courses',
    component: CourseList,
    // routes: [
    //   {
    //     path: '/courses/form',
    //     component: CourseForm,
    //   },
    // ],
  },
  {
    path: '/courses/form',
    component: CourseForm,
  },
];

export default routes;

export type { IRoutesConfig };
