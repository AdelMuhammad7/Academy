import React from "react";
import { Course } from "@/types/TypesForTypeScript"; 

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-gray-600">{course.description}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">
        {course.buttonText ?? "View More"}
      </button>
    </div>
  );
};

export default CourseCard;
