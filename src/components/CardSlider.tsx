import { useState, useRef, useEffect } from 'react';
import Card from '../Atoms/Card';

// Data
const data = [
  {
    imageLink: 'https://i.pinimg.com/564x/1e/0f/45/1e0f4558efaf450597e4520d1c30eb92.jpg',
    peoplesAvatarLinks: [
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '3.19 ETH',
    time: '2:41',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 101,
    likes: 502,
    isLiked: true,
  },
  {
    imageLink: 'https://i.pinimg.com/564x/b1/c2/e7/b1c2e780201d41239c6cabf128857f37.jpg',
    peoplesAvatarLinks: [
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '1.13 ETH',
    time: '1:41',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 30,
    likes: 302,
    isLiked: false,
  },
  {
    imageLink: 'https://i.pinimg.com/564x/f4/fb/71/f4fb71332a3bd7a5a58224d6631851b2.jpg',
    peoplesAvatarLinks: [
      'https://i.pinimg.com/564x/f4/fb/71/f4fb71332a3bd7a5a58224d6631851b2.jpg',
      'https://i.pinimg.com/564x/b1/c2/e7/b1c2e780201d41239c6cabf128857f37.jpg',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '7.13 ETH',
    time: '5:41',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 320,
    likes: 902,
    isLiked: true,
  },
  {
    imageLink: 'https://i.pinimg.com/564x/1e/0f/45/1e0f4558efaf450597e4520d1c30eb92.jpg',
    peoplesAvatarLinks: [
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '3.19 ETH',
    time: '2:41',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 101,
    likes: 502,
    isLiked: true,
  },
  {
    imageLink: 'https://i.pinimg.com/564x/df/82/86/df82868c3dd4b59b038dbe0d1c6e62e6.jpg',
    peoplesAvatarLinks: [
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
      'https://i.pinimg.com/564x/df/82/86/df82868c3dd4b59b038dbe0d1c6e62e6.jpg',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '1.93 ETH',
    time: '3:31',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 211,
    likes: 392,
    isLiked: true,
  },
  {
    imageLink: 'https://i.pinimg.com/564x/f4/fb/71/f4fb71332a3bd7a5a58224d6631851b2.jpg',
    peoplesAvatarLinks: [
      'https://i.pinimg.com/564x/f4/fb/71/f4fb71332a3bd7a5a58224d6631851b2.jpg',
      'https://i.pinimg.com/564x/b1/c2/e7/b1c2e780201d41239c6cabf128857f37.jpg',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '7.13 ETH',
    time: '5:41',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 320,
    likes: 902,
    isLiked: true,
  },
  {
    imageLink: 'https://i.pinimg.com/564x/f4/fb/71/f4fb71332a3bd7a5a58224d6631851b2.jpg',
    peoplesAvatarLinks: [
      'https://i.pinimg.com/564x/f4/fb/71/f4fb71332a3bd7a5a58224d6631851b2.jpg',
      'https://i.pinimg.com/564x/b1/c2/e7/b1c2e780201d41239c6cabf128857f37.jpg',
      'https://avatars.githubusercontent.com/u/48039442?s=400&u=f2b71badc3fd29d1698cb523d20f1a82bd8f49d9&v=4',
    ],
    price: '7.13 ETH',
    time: '5:41',
    description: 'Vulputate felis purus viverra morbi facilisi eget',
    peoplesBidding: 320,
    likes: 902,
    isLiked: true,
  },
];

export default function CardSlider() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel text-center my-32 mx-auto py-1">
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-white">Latest live auctions</h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between items-center absolute top left w-full h-full ">
          <button
            onClick={movePrev}
            className="hover:bg-gray-700/75 ml-11 flex justify-center items-center bg-gray-600 text-white w-28 h-28 rounded-[50%] text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.13969 5.06064L5.54907 0.305449C5.92593 -0.100939 6.53788 -0.101926 6.9159 0.303163C7.29388 0.708303 7.29484 1.36612 6.91803 1.77251L2.50565 6.53082C2.13483 6.92733 1.93246 7.45123 1.93289 8.00904C1.93333 8.56686 2.13652 9.09034 2.50507 9.48306L6.91692 14.2264C7.29436 14.6322 7.29431 15.29 6.91687 15.6957C6.53947 16.1015 5.92752 16.1014 5.55013 15.6957L1.14133 10.9556C0.407319 10.1734 0.000930992 9.12649 1.28746e-05 8.01081C-0.000905243 6.89513 0.40384 5.84744 1.13969 5.06064Z"
                fill="white"
              />
            </svg>

            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-gray-700/75 mr-12 flex justify-center items-center bg-gray-600 text-white w-28 h-28 rounded-[50%] text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.06033 10.9394L1.65095 15.6946C1.27408 16.1009 0.662133 16.1019 0.28411 15.6968C-0.0938641 15.2917 -0.0948308 14.6339 0.281984 14.2275L4.69436 9.46918C5.06518 9.07267 5.26756 8.54877 5.26712 7.99096C5.26669 7.43314 5.06349 6.90966 4.69494 6.51694L0.283096 1.77359C-0.0943471 1.36782 -0.0942985 0.710009 0.283144 0.304297C0.660539 -0.101467 1.27249 -0.101415 1.64988 0.304349L6.05868 5.04443C6.79269 5.82655 7.19908 6.87351 7.2 7.98919C7.20092 9.10487 6.79617 10.1526 6.06033 10.9394Z"
                fill="white"
              />
            </svg>

            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div key={index} className="carousel-item  relative w-[480px] snap-start">
                <Card
                  imageLink={resource.imageLink}
                  peoplesAvatarLinks={resource.peoplesAvatarLinks}
                  price={resource.price}
                  time={resource.time}
                  peoplesBidding={resource.peoplesBidding}
                  description={resource.description}
                  likes={resource.likes}
                  isLiked={resource.isLiked}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
