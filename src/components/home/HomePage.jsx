import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png";
import hero_img_1 from "../../assets/images/hero-img-1.jpeg";
import hero_img_2 from "../../assets/images/hero-img-2.png";
import Slider from './Slider';
import "./HomePage.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WaleedsProfile from "../../assets/images/WaleedsProfile.jpeg";


const HomePage = () => {
    const dispatch = useDispatch();

    const courseData = useSelector((state) => state.course.courseData);

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            {/* ----------- HERO SECTION -----------  */}
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 sm:py-19 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="hero-title title-font sm:text-4xl lg:text-7xl mb-4 font-medium">Social Swirl</h1>
                        <p class="mb-8 leading-relaxed">Explore the world of web development with Social Swirl. Join our user-friendly courses led by industry experts, offering hands-on experiences and a clear path to mastering coding. Join us to unlock your coding skills and confidently shape your future success!</p>

                        <div class="flex justify-center md:flex-col lg:flex-row flex-row">
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Feasible Timing</button>
                            <Link to="/elearning" type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Project Based Learning</Link> </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={logo} />
                    </div>
                </div>
            </section>


            {/* ----------- SECTION NO 1 -----------  */}
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={hero_img_1} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Social Swirl</h1>
                        <h3 class="title-font sm:text-4xl lg:text-2xl mb-4 font-medium text-blue-600">Best Institute of Pakistan</h3>
                        <p class="mb-8 leading-relaxed">The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals.</p>
                        <div class="flex justify-center">
                            <Link to="/elearning" onClick={handleClick} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ----------- SECTION NO 2 -----------  */}
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 mb-16 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Events and Updates</h1>
                        <p class="mb-8 leading-relaxed">We are delighted to announce an exciting new development at Social Swirl: the launch of our highly anticipated Business Outsourcing Project. At Social Swirl, we have always been committed to delivering exceptional services and innovative solutions to meet the evolving needs of our clients. With our new Business Outsourcing Project, we are taking our commitment to the next level by offering comprehensive outsourcing solutions tailored to enhance the efficiency and productivity of your business operations.</p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={hero_img_2} />
                    </div>
                </div>
            </section>


            {/* ----------- SECTION NO 3 -----------  */}
            <section class="" style={{ backgroundColor: "#0066b2" }}>
                <div class="container grid grid-cols-2 gap-8 py-14 mx-auto text-center md:grid-cols-4">
                    <div>
                        <h5 class="text-5xl font-bold text-white">
                            <span class="inline text-white">
                                1500
                            </span>
                            <span class="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Student Enrolled
                        </p>
                    </div>
                    <div>
                        <h5 class="text-5xl font-bold text-white">
                            <span class="inline text-white">
                                14
                            </span>
                            <span class="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Ongoing contracts
                        </p>
                    </div>
                    <div>
                        <h5 class="text-5xl font-bold text-white">
                            <span class="inline text-white">
                                31
                            </span>
                            <span class="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Finished projects
                        </p>
                    </div>
                    <div>
                        <h5 class="text-5xl font-bold text-white">
                            <span class="inline text-white">
                                3
                            </span>
                            <span class="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p class="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Years in business
                        </p>
                    </div>
                </div>
            </section>

            {/* ----------- SECTION NO 4 -----------  */}
            <section class="benefits_section text-gray-600 body-font">

                <div class="container px-5 mx-auto">
                    <div class="text-center mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Unlock Your Potential with Our Web Development Course</h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Are you ready to take your skills to the next level? Our comprehensive web development course offers a unique learning experience with a focus on real-world applications and hands-on projects.</p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span class="title-font font-medium">Practical Learning</span>
                                    <p class="text-gray-600 mt-2">Gain hands-on experience with real-world projects, ensuring you are well-prepared for the challenges of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span class="title-font font-medium">Expert Instructors</span>
                                    <p class="text-gray-600 mt-2">Learn from industry experts with years of experience, ensuring you receive top-notch guidance throughout the course.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span class="title-font font-medium">Job Placement Assistance</span>
                                    <p class="text-gray-600 mt-2">Get assistance in finding job opportunities and internships after completing the course, increasing your chances of success.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 sm:w-1/2 w-full">
                            <div class="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span class="title-font font-medium">Industry-Relevant Curriculum</span>
                                    <p class="text-gray-600 mt-2">Stay updated with the latest technologies and trends through our curriculum designed in collaboration with industry experts.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/elearning" onClick={handleClick} class="flex mx-auto mt-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl border-0 py-2 px-8 focus:outline-none  rounded text-lg">Enroll Now</Link>

                    </div>
                </div>
            </section>

            {/* ----------- SECTION NO 4: SLIDER -----------  */}
            {/* <Slider /> */}

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Waleed Ahmad</h2>
                                    <p class="text-gray-500">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Haris Saeed</h2>
                                    <p class="text-gray-500">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Suheer Zahid</h2>
                                    <p class="text-gray-500">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Rehman</h2>
                                    <p class="text-gray-500">WordPress Developer</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Awais</h2>
                                    <p class="text-gray-500">Seo Expert</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 title-font font-medium">Numan</h2>
                                    <p class="text-gray-500">Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HomePage
