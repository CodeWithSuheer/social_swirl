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
                <div className="w-full p-12">
                    <div className="flex items-end justify-between mt-14 mb-4 header">
                        <div className="title ml-9">
                            <p className="mb-4 text-4xl font-bold text-gray-800">Our Courses</p>
                            <p className="text-xl text-gray-600">All Courses are made by Experienced Experts</p>
                        </div>
                    </div>

                    {/* ------------ COURSES ------------ */}
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                        {courseData.map((course) => (
                            // <div key={course.id} className="course_card m-auto overflow-hidden rounded-lg shadow-lg h-90 w-60 md:w-80">
                            //     <div className="block w-full h-full">
                            //         <img alt="blog photo" src={course.cover} className="object-cover w-full max-h-48" />

                            //         <div className="w-full p-4 bg-white">
                            //             <p className="font-medium text-indigo-500 text-md pb-1">{course.course_no}</p>
                            //             <p className="mb-2 text-xl font-medium text-gray-800">{course.name}</p>
                            //             <p className="text-gray-800 text-md">{course.instructor}</p>
                            //             <p className="text-gray-800 text-md py-1">Duration: {course.duration}</p>
                            //             <div className="flex items-center mt-5">
                            //                 <div className="flex flex-col justify-between text-sm">
                            //                     <button onClick={() => handleClick(course.id)} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enroll Now</button>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                            <article className="bg-white max-w-xs mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={course.id}>
                                <div className='cursor-pointer' onClick={() => handleClick(course.id)}>
                                    <img src={course.cover} loading="lazy" alt="..." className="w-full h-48 rounded-t-md" />
                                    <div className="flex items-center mt-2 pt-3 ml-4 mr-2 ">
                                        <div className="flex-none w-10 h-10 rounded-full">
                                            <img src={course.instructor_img} className="w-full h-full rounded-full" alt="..." />
                                        </div>
                                        <div className="ml-3">
                                            <span className="block text-gray-900">{course.instructor}</span>
                                            <span className="block text-gray-400 text-sm">{course.instructor_post}</span>
                                        </div>
                                    </div>
                                    <div className="pt-3 ml-4 mr-2 mb-3">
                                        <h1 class="pt-2 pb-1 inline-flex items-center text-lg font-medium text-gray-700">
                                            {course.name}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="ml-2 h-4 w-4"
                                            >
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </h1>
                                        <h3 className="text-md text-gray-500">Duration: {course.duration}</h3>
                                    </div>

                                    <div className="mt-4 mb-3 ml-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #{course.training_type}
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            {course.completion}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section >


        </>
    )
}

export default E_learning
