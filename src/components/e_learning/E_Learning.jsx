import React from 'react'
import "./E_Learning.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const E_learning = () => {
    const navigate = useNavigate();
    const courseData = useSelector((state) => state.course.courseData);


    const handleClick = (course_id) => {
        navigate(`/selectedCourse/${course_id}`);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section className="elearning">
                <div class="w-full p-12">
                    <div class="flex items-end justify-between mt-14 mb-8 header">
                        <div class="title ml-9">
                            <p class="mb-4 text-4xl font-bold text-gray-800">Our Courses</p>
                            <p class="text-xl font-light text-gray-400">All Courses are made by Experienced Experts</p>
                        </div>
                    </div>

                    {/* ------------ COURSES ------------ */}
                    <div class="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                        {courseData.map((course) => (
                            <div key={course.id} class="course_card m-auto overflow-hidden rounded-lg shadow-lg h-90 w-60 md:w-80">
                                <div class="block w-full h-full">
                                    <img alt="blog photo" src={course.cover} class="object-cover w-full max-h-48" />

                                    <div class="w-full p-4 bg-white">
                                        <p class="font-medium text-indigo-500 text-md pb-1">{course.course_no}</p>
                                        <p class="mb-2 text-xl font-medium text-gray-800">{course.name}</p>
                                        <p class="text-gray-800 text-md">{course.instructor}</p>
                                        <p class="text-gray-800 text-md py-1">Duration: {course.duration}</p>
                                        <div class="flex items-center mt-5">
                                            <div class="flex flex-col justify-between text-sm">
                                                <button onClick={() => handleClick(course.id)} type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default E_learning
