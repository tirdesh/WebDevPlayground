import Course from '../models/course.js'

export const search = async (params = {}) => {
    const courses = await Course.find(params).exec();
    return courses;
}

export const save = async (newCourse) => {
    const course = new Course(newCourse);
    return await course.save();
}

export const find = async (id) => {
    const course = await Course.findById(id).exec();
    return course;
}

export const update = async (updatedCourse, id) =>{
    const course = await Course.findByIdAndUpdate(id, updatedCourse).exec();
    return course;
}

export const remove = async (id) =>{
    const course = await Course.findByIdAndDelete(id).exec();
    return course;
}