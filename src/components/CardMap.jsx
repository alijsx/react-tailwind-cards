import cardsData from '../data.json'; // Import JSON data
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';







function Card({ cardData }) {
    return (
        <div className="relative w-full rounded-xl overflow-hidden px-1">
            <div className="relative">
                <img className="rounded-[30px]" src={cardData.image} alt="" />
                <div className="absolute inset-0 flex flex-col items-center justify-start p-5">
                    <div className="flex justify-between w-full">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white" ><path d="M7.388 9h9.225l-4.613 14-4.612-14zm.612-2h8l-4-5.333-4 5.333zm10.5 0h5.5l-6-6h-4l4.5 6zm-13 0l4.5-6h-3.916l-6.084 6h5.5zm-5.5 2l9.234 12-3.955-12h-5.279zm18.721 0l-3.924 12 9.203-12h-5.279z" /></svg>
                        </div>
                        <div className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg flex flex-col items-center justify-end p-5 rounded-[30px]">
                        <div className="flex justify-between w-full text-white">
                            <div>
                                <p className='text-lg font-medium'>{cardData.name}</p>
                                <p className='text-sm mt-2 opacity-80'>{cardData.description}</p>
                            </div>
                            <div className='cursor-pointer'>
                                <p className='font-medium whitespace-nowrap'>{cardData.profession}</p>
                                <p className='text-end text-md mt-2'>{cardData.followers}</p>
                           
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full text-white">
                            <div>
                            
                                <p className='text-sm  font-medium mt-2'>{cardData.location}</p>
                            </div>
                            <div className='cursor-pointer'>
                               
                                <div className='flex justify-between  gap-2'>
                                    <span className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>

                                    </span>
                                    <span className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </span>
                                    <span className='bg-white rounded-full w-8 h-8 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-black">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>


                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  

function CardMap() {

    
    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        infinite: true,
        speed:500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        arrows: false,
        speed: 500, // Adjust speed for smoothness
        ease: 'linear', // Adjust easing function for smoother transitions
    };
    

    return (
        <div className="grid grid-cols-1  w-full">
            <Slider {...settings} className='w-full' >

                {cardsData.map((card, index) => (
                    <Card key={index} cardData={card} />
                ))}
            </Slider>
        </div>
    );
}

export default CardMap;
