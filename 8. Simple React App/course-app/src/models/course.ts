interface Course{
    _id: string,
    name: string,
    instructor: string,
    location: {
        room: string,
        building: string
    },
    schedule: {
        startTime: string,
        endTime: string
    }
}

export const courses: Course[] = [
    {
        _id: "Info6150",
        name: "Info 6150",
        instructor: "Amuthan",
        location: {
            room: "102",
            building: "ISEC"
        },
        schedule: {
            startTime: "6:10PM",
            endTime: "9:30PM"
        }
    }
];

export default Course;