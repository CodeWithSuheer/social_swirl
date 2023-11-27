import { Swiper, SwiperSlide } from 'swiper/react';
import sliderData from "./SliderData";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Controller } from 'swiper/modules';

const Slider = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 my-24 mx-auto">
                <h1 class="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-700 text-center">Our testimonial</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    CenteredSlide={true}
                    loop={true}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }
                    }
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {sliderData.map((slider) => (
                        <SwiperSlide>
                            <div key={slider.id} class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                <p class="leading-relaxed text-lg">{slider.text}</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="text-gray-500">{slider.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper >
            </div>
        </section>
    );
}

export default Slider


