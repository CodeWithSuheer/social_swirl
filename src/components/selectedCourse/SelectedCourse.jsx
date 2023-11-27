import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "./SelectedCourse.css";
import OtherCourses from "./OtherCourses";


const SelectedCourse = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const courseData = useSelector((state) => state.course.courseData);

    const selectedCourse = courseData.filter((course) => course.id === id);

    const otherCourse = courseData.filter((course) => course.id !== id);

    const redirectToWhatsApp = () => {
        let phoneNumber = '03324700802';
        let whatsappLink = 'https://wa.me/' + phoneNumber;
        window.open(whatsappLink, '_blank');
    }


    return (
        <>
            {/* ----------- COURSE RELATED DETAILS -----------  */}
            <section class="selected_course text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-24 pb-16 md:flex-row flex-col items-center">
                    {selectedCourse.map((course) => (
                        <>
                            <article className='selected_course-article'>
                                <div class="flex items-center mb-4">
                                    <img class="w-10 h-10 me-4 rounded-full" src={course.instructor_img} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <p className='text-xl'>{course.instructor}</p>
                                        <p className='text-sm text-gray-500'>{course.instructor_post}</p>
                                    </div>
                                </div>

                                {/* ----- REVIEWS STARS -----  */}
                                <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <p className='text-sm'>4.9</p>
                                </div>

                                <p class="my-4 pr-8 text-lg text-gray-700">{course.desc}</p>

                                <div className="Features mt-5 mb-5" id='Features'>
                                    <h1 class="title-font sm:text-4xl lg:text-3xl mb-3 font-medium text-gray-900">
                                        <span className='text-blue-900 mr-1'>#</span>Features
                                    </h1>
                                    <ul className='ml-10'>
                                        <li className='text-lg text-gray-700 list-disc'>Training in the supervision of a veteran web developer and freelance</li>
                                        <li className='text-lg text-gray-700 list-disc'>Opportunity to get an internship after training.</li>
                                        <li className='text-lg text-gray-700 list-disc'>Focus on the in-demand technologies</li>
                                        <li className='text-lg text-gray-700 list-disc'>A fast-track training that surely train you in 3 months.</li>
                                    </ul>
                                </div>

                                <div className="Prerequisites mt-5 mb-5">
                                    <h1 class="title-font sm:text-4xl lg:text-3xl mb-2 font-medium text-gray-900">
                                        <span className='text-blue-900 mr-1'>#</span>Prerequisites
                                    </h1>
                                    <ul className='ml-10'>
                                        <li className='text-lg text-gray-700 list-disc'>Basic knowledge of computers.</li>
                                        <li className='text-lg text-gray-700 list-disc'>Basic English reading and writing skills.</li>
                                        <li className='text-lg text-gray-700 list-disc'>Basic communication skills.</li>
                                        <li className='text-lg text-gray-700 list-disc'>1 laptop or PC with general specifications.</li>
                                    </ul>
                                </div>



                                {/* <div className="contact mt-8 mb-5">
                                    <h1 class="title-font sm:text-4xl lg:text-3xl mb-2 font-medium text-gray-900">Contact Us</h1>
                                    <button type="button" onClick={redirectToWhatsApp} style={{ backgroundColor: "#00A884" }} class="py-2 px-4 flex justify-center items-center hover:bg-gray-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792">
                                            <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                            </path>
                                        </svg>
                                        Whatsapp
                                    </button>
                                </div> */}
                            </article>

                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

                                <div className="cover_img">
                                    <img class="object-cover object-center rounded" alt="hero" src={course.cover} />
                                </div>

                                <div className="price_card my-10 mx-auto">
                                    <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course Fee: {course.price}</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">Unlock your potential with our comprehensive web development course. Gain the knowledge required not just to enter the job market, but to stand out and make a lasting impact.</p>

                                        <button class="button mt-5">
                                            <svg viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path></svg>
                                            ENROLL NOW
                                        </button>
                                    </div>

                                </div>



                            </div>
                        </>
                    ))}
                </div>
            </section>

            {/* ----------- EXTRA-COURSE RELATED DETAILS -----------  */}
            <section className="overview text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-2 flex-col">
                    {selectedCourse.map((course) => (
                        <>
                            <h1 class="title-font sm:text-2xl lg:text-4xl mb-1 font-medium text-gray-900">{course.name} Overview</h1>
                            <p class="my-4 pr-8 sm:text-md lg:text-lg text-gray-700">{course.overview_data}</p>
                        </>
                    ))}
                </div>
            </section>

            {/* ----------- STUDENTS REVIEWS -----------  */}
            <section>
                <div class="container mx-auto flex px-5 pt-20 pb-14 flex-col">
                    <h1 class="title-font sm:text-2xl lg:text-4xl mb-8 font-medium text-gray-700 text-center">Our Students Reviews</h1>
                    <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-200 border-b border-gray-300 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Game-Changing Experience</h3>
                                <p class="my-4">This course provided a game-changing experience for me. The hands-on projects and real-world applications significantly enhanced my web development skills.</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center ">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div>Javiad</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400 ">Frontend Developer at ABC Tech</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-200 border-b border-gray-300 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Invaluable Insights</h3>
                                <p class="my-4">The course content was excellent, providing invaluable insights into the latest web development technologies. It prepared me well for real-world projects.</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center ">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div>Obama Jamshed</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer at XYZ Innovations</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-200 border-b border-gray-300 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Practical Skills Gained</h3>
                                <p class="my-4">I gained practical skills that are directly applicable in the industry. The course structure and mentor support were instrumental in my success.</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center ">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div>Trump Malik</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at WebSolutions</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure class="flex flex-col items-center justify-center p-8 text-center bg-gray-200 border-gray-300 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Career-Boosting Course</h3>
                                <p class="my-4">Enrolling in this course was a career-changing decision. The practical approach and industry-relevant projects elevated my coding and problem-solving abilities.</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center ">
                                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div>Sunny Rana</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">Web Developer at Tech Innovate</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            {/* ----------- VIDEO SECTIONS -----------  */}
            <section>
                <div class="container mx-auto px-5 pt-20 pb-14" style={{ maxWidth: "85%" }}>
                    <h1 class="title-font sm:text-2xl lg:text-4xl mb-8 font-medium text-gray-700 text-center"> Success Stories from Our Web Development Course</h1>
                    <iframe className='w-full rounded-lg' height="600px" src="https://www.youtube.com/embed/7fjOw8ApZ1I?si=ld69cphb9w2u9_gJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </section>


            {/* ----------- OTHER COURSES ----------- */}
            <OtherCourses otherCourse={otherCourse} />


        </>
    )
}

export default SelectedCourse
