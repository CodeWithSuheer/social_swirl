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

    const team = [
        {
            id: "01",
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            id: "02",
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            id: "03",
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        }
    ]
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
    ]

    return (
        <>
            {/* ----------- HERO SECTION -----------  */}
            <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left pt-10">
                    <h1 className="hero-title title-font pt-12 lg:pt-4 text-5xl sm:text-7xl md:text-7xl lg:text-7xl mb-4 font-medium">Social Swirl</h1>
                    <p className="mb-8 leading-relaxed">Explore the world of web development with Social Swirl. Join our user-friendly courses led by industry experts, offering hands-on experiences and a clear path to mastering coding. Join us to unlock your coding skills and confidently shape your future success!</p>

                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link to="/" className="px-7 py-3 w-full text-white text-center rounded-md shadow-md block sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                            Feasible Timing
                        </Link>
                        <Link to="/elearning" className="px-7 py-3 w-full text-white text-center rounded-md block sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                            Project Based Learning
                        </Link>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 pt-10">
                    <img src={logo} className="w-full mx-auto sm:w-10/12 lg:w-full" />
                </div>
            </section>


            {/* ----------- SECTION NO 1 -----------  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={hero_img_1} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Social Swirl</h1>
                        <h3 className="title-font sm:text-4xl lg:text-2xl mb-4 font-medium text-blue-600">Best Institute of Pakistan</h3>
                        <p className="mb-8 leading-relaxed">The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals.</p>
                        <div className="flex justify-center">
                            <Link to="/elearning" onClick={handleClick} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ----------- SECTION NO 2 -----------  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 mb-16 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Events and Updates</h1>
                        <p className="mb-8 leading-relaxed">We are delighted to announce an exciting new development at Social Swirl: the launch of our highly anticipated Business Outsourcing Project. At Social Swirl, we have always been committed to delivering exceptional services and innovative solutions to meet the evolving needs of our clients. With our new Business Outsourcing Project, we are taking our commitment to the next level by offering comprehensive outsourcing solutions tailored to enhance the efficiency and productivity of your business operations.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero_img_2} />
                    </div>
                </div>
            </section>


            {/* ----------- SECTION NO 3 -----------  */}
            <section style={{ backgroundColor: "#0066b2" }}>
                <div className="container grid grid-cols-2 gap-8 py-14 mx-auto text-center md:grid-cols-4">
                    <div>
                        <h5 className="text-5xl font-bold text-white animate-value" data-value="1500">
                            <span className="inline text-white" id="animatedValue">
                                1500
                            </span>
                            <span className="text-indigo-200">
                                +
                            </span>
                        </h5>


                        <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Student Enrolled
                        </p>
                    </div>
                    <div>
                        <h5 className="text-5xl font-bold text-white">
                            <span className="inline text-white">
                                14
                            </span>
                            <span className="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Ongoing contracts
                        </p>
                    </div>
                    <div>
                        <h5 className="text-5xl font-bold text-white">
                            <span className="inline text-white">
                                31
                            </span>
                            <span className="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Finished projects
                        </p>
                    </div>
                    <div>
                        <h5 className="text-5xl font-bold text-white">
                            <span className="inline text-white">
                                3
                            </span>
                            <span className="text-indigo-200">
                                +
                            </span>
                        </h5>
                        <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                            Years in business
                        </p>
                    </div>
                </div>
            </section>

            {/* ----------- SECTION NO 4 -----------  */}
            <section className="benefits_section text-gray-600 body-font">

                <div className="container px-5 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Unlock Your Potential with Our Web Development Course</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Are you ready to take your skills to the next level? Our comprehensive web development course offers a unique learning experience with a focus on real-world applications and hands-on projects.</p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Practical Learning</span>
                                    <p className="text-gray-600 mt-2">Gain hands-on experience with real-world projects, ensuring you are well-prepared for the challenges of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Expert Instructors</span>
                                    <p className="text-gray-600 mt-2">Learn from industry experts with years of experience, ensuring you receive top-notch guidance throughout the course.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Job Placement Assistance</span>
                                    <p className="text-gray-600 mt-2">Get assistance in finding job opportunities and internships after completing the course, increasing your chances of success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Industry-Relevant Curriculum</span>
                                    <p className="text-gray-600 mt-2">Stay updated with the latest technologies and trends through our curriculum designed in collaboration with industry experts.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/elearning" onClick={handleClick} className="flex mx-auto mt-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl border-0 py-2 px-8 focus:outline-none  rounded text-lg">Enroll Now</Link>

                    </div>
                </div>
            </section>

            {/* ----------- SECTION NO 4: SLIDER -----------  */}
            {/* <Slider /> */}

            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Waleed Ahmad</h2>
                                    <p className="text-gray-500">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Haris Saeed</h2>
                                    <p className="text-gray-500">Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Suheer Zahid</h2>
                                    <p className="text-gray-500">Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Rehman</h2>
                                    <p className="text-gray-500">WordPress Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Awais</h2>
                                    <p className="text-gray-500">Seo Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center bg-white border-gray-200 border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={WaleedsProfile} />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Numan</h2>
                                    <p className="text-gray-500">Graphic Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Meet our team
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                        </p>
                    </div>
                    <div className="my-20">
                        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {
                                team.map((item, idx) => (
                                    <li key={idx}>
                                        <div className="w-24 h-24 mx-auto">
                                            <img
                                                src={item.avatar}
                                                className="w-full h-full rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                            <p className="text-indigo-600">{item.title}</p>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                            <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                                <a href={item.twitter}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                                <a href={item.linkedin}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>


            {/* <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl sm:text-center md:mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            See what others saying about us
                        </h3>
                        <p className="mt-3 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                        <figure>
                                            <div className="flex items-center gap-x-4">
                                                <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                                <div>
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <p className="mt-6 text-gray-700">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section> */}



        </>
    )
}

export default HomePage
