import Course from "../models/course";
import * as baseService from "./base-service";
 
const courseResourchPath = "/courses";
 
export const search = async (): Promise<Course[]> => {
  const courses = await baseService.search<Course>(courseResourchPath, {});
  return courses;
};