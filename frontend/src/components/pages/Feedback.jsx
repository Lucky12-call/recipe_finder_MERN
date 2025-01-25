import { useEffect } from "react";
import { useRef } from "react";
import { animateBox } from "./animation/animation";

const Feedback = () => {
  const feedback = useRef();

  useEffect(() => {
    animateBox(feedback);
  }, []);

  return (
    <div
      ref={feedback}
      className="relative w-full flex flex-col gap-5 md:flex-row justify-between items-center mt-20 md:mt-44 p-2 md:p-0"
    >
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/027/148/373/small_2x/arrow-icons-symbol-arrow-dot-style-png.png"
        alt="burger"
        className="h-20 md:h-28 absolute -top-20  md:-left-20 left-2 "
      />
      {/* Comments and reviews */}
      <div className="w-full md:w-96 flex p-2 gap-5 items-center shadow-lg  hover:scale-110 transition-transform">
        <img
          src="https://bpimediagroup.com/wp-content/uploads/2021/07/CustomerLoyalty-01.png"
          alt="review-img"
          className="h-28 w-28"
        />

        <div className=" text-lg md:text-xl">
          <div>
            <div className="font-medium">6k+</div>
            <div className="font-medium text-gray-500">Review</div>
          </div>

          <div>
            <div className="font-medium">500+</div>
            <div className="font-medium text-gray-500">Comments</div>
          </div>
        </div>
      </div>

      {/* happy customers */}
      <div className="w-full md:w-96 flex p-2 gap-5 items-center rounded-lg shadow-lg hover:scale-110 transition-transform">
        <img
          src="https://ebi.gov.eg/wp-content/uploads/2023/11/Feedback.png"
          alt="customer-img"
          className="h-28 w-28"
        />

        <div className="h-full">
          <div className="relative top-0">
            <img
              src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
              alt="user-1"
              className="h-10 w-10 flex justify-center items-center absolute top-0 left-0 rounded-full bg-red-500 border-2 border-white"
            />

            <img
              src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY="
              alt="user-2"
              className="h-10 w-10 flex justify-center items-center absolute top-0 left-[30px] rounded-full bg-blue-500 border-2 border-white"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3pcRO1aRe2hb2Jj_xHB9IFELEzhsV8uXew&usqp=CAU"
              alt="user-3"
              className="h-10 w-10 flex justify-center items-center absolute top-0 left-[60px]  rounded-full bg-green-500 border-2 border-white"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8oNuDl-XH0-Jk0iml47q2VlhsyQHmCTiFQ&usqp=CAU"
              alt="user-4"
              className="h-10 w-10 flex justify-center items-center absolute top-0 left-[90px] rounded-full bg-cyan-500 border-2 border-white"
            />
          </div>
          <div className="mt-12 text-lg md:text-xl">
            <div className="font-medium">500+ Happy Customer</div>
            <div className="font-medium text-gray-500">4.7 Rating</div>
          </div>
        </div>
      </div>

      {/* delicious food  */}
      <div className="w-full md:w-96 flex p-2 gap-5 items-center rounded-lg shadow-lg  hover:scale-110 transition-transform">
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/250/350/original/yummy-fried-chicken-cartoon-illustrations-and-clipart-of-tasty-fast-food-meal-generative-ai-png.png"
          alt="review-img"
          className="h-28 w-28"
        />

        <div className=" text-lg md:text-xl">
          <div>
            <div className="font-medium">Best Delicious Food</div>
            <div className="font-medium text-gray-500">
              We are best collection of food recipes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
