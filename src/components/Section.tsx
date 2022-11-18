import Image from 'next/image';
import Link from 'next/link';

export default function Section() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8">
          <div className="flex md:flex-row justify-center items-center flex-col-reverse">
            <div className=" flex items-center max-w-[750px]">
              {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 "></span> */}

              <div className="p-8 sm:p-16 lg:p-24 text-lg font-medium">
                <p className="mt-4 text-gray-500 uppercase mb-3">Overline</p>
                <h2 className="font-bold text-5xl ">Sapien ipsum scelerisque convallis fusce</h2>

                <p className="mt-4 text-gray-500 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!
                  Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat
                  totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                </p>

                <div className="sm:flex sm:gap-4 mt-14">
                  <div className="hidden sm:flex">
                    <Link href="/">
                      <a className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">
                        Get started
                      </a>
                    </Link>
                  </div>
                  <Link href="/">
                    <a className="rounded-md border-2 border-gray-500 px-5 py-2.5 text-sm font-medium text-gray-500 shadow">
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" z-10 lg:py-16">
              <div className="">
                <Image src="/images/Right-Image-tint.png" width={650} height={550} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
