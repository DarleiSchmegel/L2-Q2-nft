import Image from 'next/image';

interface CardProps {
  imageLink: string;
  isLiked: boolean;
  likes: number;
  peoplesBidding: number;
  time: string;
  description: string;
  price: string;
  peoplesAvatarLinks: string[];
}

export default function Card({
  imageLink,
  isLiked,
  likes,
  peoplesAvatarLinks,
  peoplesBidding,
  description,
  price,
  time,
}: CardProps) {
  return (
    <>
      {/* <div className="flex justify-center"> */}
      <div className="flex-col rounded-lg shadow-lg p-5 border-[1px] border-gray-500 w-[400px]">
        {/* <a href="#!">
            <img className="rounded-t-lg" alt="" />
          </a> */}

        <Image className="rounded-lg" src={imageLink} width={480} height={520} objectFit="fill" />

        <div>
          <div>
            <div className="flex flex-row my-4">
              <p className="font-bold text-white text-left pr-3 text-base">{description}</p>
              <p className="rounded bg-gray-600 h-8 flex justify-center items-center text-blue-400 font-bold w-28">
                {price}
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 border-b-[1px] pb-3 border-gray-500">
              <svg
                width="12"
                height="15"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 0.5C5.22386 0.5 5 0.723858 5 1C5 1.27614 5.22386 1.5 5.5 1.5H9.5C9.77614 1.5 10 1.27614 10 1C10 0.723858 9.77614 0.5 9.5 0.5H5.5ZM13.1563 2.42899C12.961 2.23373 12.6444 2.23373 12.4492 2.42899C12.2539 2.62426 12.2539 2.94084 12.4492 3.1361L13.8634 4.55031C14.0587 4.74558 14.3752 4.74558 14.5705 4.55031C14.7658 4.35505 14.7658 4.03847 14.5705 3.84321L13.1563 2.42899ZM7.5 4.5C7.22386 4.5 7 4.72386 7 5V10C7 10.2761 7.22386 10.5 7.5 10.5C7.77614 10.5 8 10.2761 8 10V5C8 4.72386 7.77614 4.5 7.5 4.5ZM7.5 16.5C11.366 16.5 14.5 13.366 14.5 9.5C14.5 5.63401 11.366 2.5 7.5 2.5C3.63401 2.5 0.5 5.63401 0.5 9.5C0.5 13.366 3.63401 16.5 7.5 16.5ZM7.5 15.5C4.18629 15.5 1.5 12.8137 1.5 9.5C1.5 6.18629 4.18629 3.5 7.5 3.5C10.8137 3.5 13.5 6.18629 13.5 9.5C13.5 12.8137 10.8137 15.5 7.5 15.5Z"
                  fill="white"
                />
              </svg>
              <p className="text-white text-xs">{time} min left</p>
            </div>
            <br className="" />
          </div>

          <div className="flex flex-row items-center justify-between gap-1">
            <div className="flex flex-row items-center gap-1">
              <div className="flex flex-row ml-[15px]">
                {peoplesAvatarLinks.map((avatar, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center w-[47px] h-[47px] z-10 rounded-[50%] bg-gray-700 m-1 ml-[-15px]"
                  >
                    <Image
                      className="rounded-[50%] border-gray-700"
                      src={avatar}
                      alt="Bordered avatar"
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">{peoplesBidding} people are bidding</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              {isLiked ? (
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.83268 0C2.53185 0 0.666016 1.84667 0.666016 4.125C0.666016 5.96417 1.39518 10.3292 8.57268 14.7417C8.70125 14.8199 8.84885 14.8613 8.99935 14.8613C9.14985 14.8613 9.29745 14.8199 9.42602 14.7417C16.6035 10.3292 17.3327 5.96417 17.3327 4.125C17.3327 1.84667 15.4668 0 13.166 0C10.8652 0 8.99935 2.5 8.99935 2.5C8.99935 2.5 7.13352 0 4.83268 0Z"
                    fill="#FB4539"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.83268 1C2.53185 1 0.666016 2.84667 0.666016 5.125C0.666016 6.96417 1.39518 11.3292 8.57268 15.7417C8.70125 15.8199 8.84885 15.8613 8.99935 15.8613C9.14985 15.8613 9.29745 15.8199 9.42602 15.7417C16.6035 11.3292 17.3327 6.96417 17.3327 5.125C17.3327 2.84667 15.4668 1 13.166 1C10.8652 1 8.99935 3.5 8.99935 3.5C8.99935 3.5 7.13352 1 4.83268 1Z"
                    stroke="#7780A1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              <p className="text-xs text-gray-500">{likes}</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
