import React from "react";
import heroImg3 from "../../assets/images/hero-img-3.jpg";
import heroImg2 from "../../assets/images/hero-img-2.png";
import logo from "../../assets/images/logo.png";
import member1 from "../../assets/images/image1.jpeg";
import member5 from "../../assets/images/image5.jpeg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const team = [
    {
      avatar: member1,
      name: "Suheer",
      title: "Senior Frot End Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: member5,
      name: "Mustafa Tawab",
      title: "Junior Front End Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Brown Luis",
      title: "Full stack engineer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Lysa sandiago",
      title: "Head of designers",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Daniel martin",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Vicky tanson",
      title: "Product manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <>
      {/* -------------- Banner --------- */}
      <section className="">
        <div className=" pt-20">
          <img
            src={heroImg3}
            alt="Hero Image"
            className="w-full h-[500px]  object-cover object-bottom opacity-50 relative"
          />
          <span className="container -mt-72 absolute mx-auto text-center">
            <h2 className="text-5xl p-2 font-bold text-center  ">About Us</h2>
            <p className="font-semibold"> Home / About Us </p>
          </span>
        </div>
      </section>

      {/* -----------Section no 2 - Social Swirl History ---------------- */}

      <section className="py-14 ">
        <div className="max-w-screen-xl mx-auto  md:px-8">
          <div className="items-center gap-x-12 flex-row-reverse sm:px-4  md:px-0 lg:flex">
            <div className="flex-1  sm:hidden lg:block">
              <img
                src={heroImg2}
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-indigo-700 font-semibold">Since 2021</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Social Swirl History
              </p>
              <p className="mt-3 text-gray-600 text-lg">
                Social Swirl, founded with a vision for digital excellence, has
                evolved into a trailblazer in the tech industry. Since our
                inception, we've been committed to delivering top-notch services
                in UI/UX design, web app development, SEO, marketing, and
                customer service support. Our journey is a testament to
                innovation, client satisfaction, and a passion for crafting
                seamless online experiences
              </p>
              {/* <a
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* --------------Section no 3 - Message from CEO ---------- */}
      <section className="">
        <div className="max-w-screen-xl mx-auto  md:px-8">
          <div className="items-center gap-x-32  sm:px-4  md:px-0 lg:flex">
            <div className="flex-1  sm:hidden lg:block">
              <img
                src={logo}
                className="md:max-w-lg sm:rounded-lg lg:max-w-xl"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              {/* <h3 className="text-indigo-700 font-semibold">
                Since 2010
              </h3> */}
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Message From CEO
              </p>
              <p className="mt-3 text-gray-600 text-lg ">
                As the CEO of Social Swirl, I extend a warm welcome to aspiring
                minds seeking to delve into the realms of UI/UX design, web app
                development, SEO, marketing, and customer service support. Our
                courses are crafted to ignite your passion, equipping you with
                the skills needed to thrive in the dynamic world of digital
                innovation. Join us on a transformative learning journey, where
                knowledge meets practical expertise, paving the way for your
                success in the ever-evolving tech landscape
              </p>
              {/* <a
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* --------------Section no 4 - Our Team  */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Meet our team
            </h3>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-24 h-24 mx-auto">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-700 font-semibold sm:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-indigo-600">{item.title}</p>
                    {/* <p className="text-gray-600 mt-2">{item.desc}</p> */}
                    <div className="mt-4 flex justify-center gap-4 text-gray-400">
                      <a href={item.twitter}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_80)">
                            <path
                              fill="currentColor"
                              d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_80">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.linkedin}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_68)">
                            <path
                              fill="currentColor"
                              d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_68">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------- Section no 5 - News Letter */}
      <section className="py-14 bg-[#0066b2]">
        <div className="max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
          <div className="flex-1 max-w-xl">
            <h3 className="text-3xl font-bold text-white">
              Start a project with us today
            </h3>
            <p className=" mt-3 text-white">
              Call us now to schedule an online appointment and get your project
              successfully completed
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block"
            >
              
              <Link to={"/careers"}>
                <button className="block w-full py-3 px-4 font-semibold text-sm text-center text-indigo-800 hover:text-white  bg-indigo-100 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:w-auto md:w-full">
                  Get Started
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
