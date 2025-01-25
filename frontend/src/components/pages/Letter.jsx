import { useDispatch } from "react-redux";
import { setLetter } from "../slices/mealSlice";
import { Link } from "react-router-dom";
import { TbListLetters } from "react-icons/tb";
import { useRef } from "react";
import { useEffect } from "react";
import { animateBox } from "./animation/animation";

// letter array
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Letter = () => {
  const letter = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    animateBox(letter);
  }, []);

  return (
    <div ref={letter} className="mt-20 md:mt-40">
      <h1 className="flex gap-2 md:gap-4 justify-center items-center text-3xl md:text-4xl text-center font-semibold text-yellow-500 mt-5 md:mt-10 ">
        SEARCH BY LETTER <TbListLetters className="text-yellow-400" />
      </h1>
      <div className="flex flex-wrap gap-2 justify-center my-20">
        {alphabets.map((letter, i) => (
          <Link
            to={"/search_by_letter"}
            className="h-24 min-w-20 flex justify-center items-center rounded-lg shadow-lg text-3xl cursor-pointer hover:scale-125 transition-transform"
            key={i}
            onClick={() => dispatch(setLetter(letter.toLowerCase()))}
          >
            {letter}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Letter;
