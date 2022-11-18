import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <section className="relative flex justify-center bg-[url('/images/Circles.png')] bg-cover bg-center bg-no-repeat ">
        <div className="absolute max-w-screen-xl inset-0 bg-gray-700/75 sm:bg-transparent sm:bg-gradient-to-b sm:from-gray-700/55 sm:to-gray-600/25"></div>

        <div className="flex flex-col max-w-5xl lg:h-screen lg:items-center justify-between items-center">
          <div className="flex-row py-36 p-3 justify-center items-center text-center gap-9">
            <h1 className="text-gray-500 font-light mb-10 text-xl uppercase">
              Non Fungible Tokens
            </h1>
            <Image className="" src="/images/Frame.png" width={800} height={200} />

            <p className="text-gray-500 font-light mt-10 text-xl uppercase">
              Discover, collect and sell
            </p>
          </div>

          <div className="flex flex-row min-w-full pb-5 items-center justify-around ">
            <Image src="/images/RitterSport.svg" width={60} height={45} />
            <Image src="/images/Nike.svg" width={60} height={45} />
            <Image src="/images/Adidas.svg" width={60} height={45} />
            <Image src="/images/NewHolland.svg" width={60} height={45} />
          </div>
        </div>
      </section>
    </>
  );
}
