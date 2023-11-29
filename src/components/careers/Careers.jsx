import React from "react";
import heroImg3 from "../../assets/images/hero-img-2.png";
import { Link } from "react-router-dom";

const Careers = () => {
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
            <h2 className="text-5xl p-2 font-bold text-center  ">Careers</h2>
            <p className="font-semibold"> Home / Careers </p>
          </span>
        </div>
      </section>

      {/* ------- Section no 1 -------Career at social swirl */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-32 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://designsvalley.com/wp-content/uploads/2021/12/career-at-dv.jpg"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Career at Social Swirl
              </p>
              <p className="mt-3 text-gray-600 text-lg">
                Social Swirl is an established and well-reputed Web Design firm
                in USA and PAK. We are really talent lovers and always try to
                find talent and train people who join us. Social Swirl is really
                a mentoring place as well as an excellent company. If you are a
                fresh graduate and have a real passion for web design, HTML,
                CSS, or Web programming. We will invite you to join our platform
                to start your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------Openings at Socail swirl ----------------------*/}
      <section class="text-gray-600 body-font px-16 bg-white">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-bold title-font mb-4 text-gray-900 tracking-widest">
              Openings at Social Swirl
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 gap-x-16 gap-y-5 justify-center">
            <div class="p-4 lg:w-1/3 bg-[#D8F7FF] shadow-md ">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Ui/UX Designer
                  </h2>
                  <span className="flex justify-between pr-20">
                    <a href="">See Details</a>
                    <a href="">Apply Here</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 bg-[#D8F7FF] shadow-md ">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8 ">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Full Stack Web Developer
                  </h2>
                  <span className="flex justify-between pr-20">
                    <a href="">See Details . . .</a>
                    <a href="">Apply Here</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 bg-[#D8F7FF] shadow-md">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Front End Developer
                  </h2>
                  <span className="flex justify-between pr-20">
                    <a href="">See details</a>
                    <a href="">Apply Here</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 bg-[#D8F7FF] shadow-md">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Nextjs Developer
                  </h2>
                  <span className="flex justify-between pr-20">
                    <a href="">See Details</a>
                    <a href="">Apply Here</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 bg-[#D8F7FF] shadow-md">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    SEO Expert
                  </h2>
                  <span className="flex justify-between pr-20">
                    <a href="">See Details</a>
                    <a href="">Apply Here</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3 bg-[#D8F7FF] shadow-md">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div class="flex-grow sm:pl-8">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Data Scientist
                  </h2>
                  <span className="flex justify-between pr-20">
                    <a href="">See Details</a>
                    <a href="">Apply Here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------Section no 3- News Letter */}
      <section className="py-14 bg-[#0066b2]">
        <div className="max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
          <div className="flex-1 max-w-xl">
            <h3 className="text-3xl font-bold text-white">
              Embark on a transformative journey with us
            </h3>
            <p className=" mt-3 text-white">
              Ready to turn your ideas into reality? Call us now to schedule an
              online appointment and kickstart the journey to successfully bring
              your project to life!
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block"
            >
              <Link to={"/contact"}>
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

export default Careers;
