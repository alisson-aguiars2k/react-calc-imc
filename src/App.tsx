import poweredImage from "./assets/images/powered.png";
import leftArrowImage from './assets/images/leftarrow.png'
import { useState } from "react";
import { levels, calculateBmi, Level } from "./helpers/bmi";
import { GridItem } from "./components/GridItem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateBmi(heightField, weightField));
    } else {
      alert("Please enter all fields.");
    }
  };

  const handleBackButton = () =>{
    setToShow(null)
    setHeightField(0)
    setWeightField(0)

  }

  return (
    <div>
      <header className="">
        <div className="md:max-w-4xl md:m-auto md:pt-10 md:pb-10 max-w-4xl m-auto pt-10 pb-10 py-0 px-5">
          <img src={poweredImage} alt="Powered" className="w-40 h-30" />
        </div>
      </header>

      {/* Container */}
      <div className="md:flex md:max-w-4xl md:m-auto md:flex-row flex max-w-4xl m-auto py-0 px-5 flex-col">
        {/* Left side */}
        <div className="md:flex-1 md:mr-10 md:mt-5 flex-1 mr-0">
          <h1 className="text-4xl font-black mb-5 text-gray-500">
            Calculate your{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
              <span className="relative text-white">BMI</span>
            </span>
          </h1>
          <p className="my-5 lg:text-base text-gray-500">
            BMI is the acronym for Body Mass Index, a parameter adopted by the
            World Health Organization to calculate the ideal weight of each
            person.
          </p>
          {/* Height useState*/}
          <input
            type="number"
            placeholder="Inform your height. example: 1.6 (in meters)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))} // O value sempre é uma string
            disabled={toShow ? true : false}
            className="w-full outline-0 border-b-2 py-5 px-0.5 mb-5 disabled:opacity-50"
          />
          {/* Weight useState*/}
          <input
            type="number"
            placeholder="Inform your weight. example: 60.5 (in kilograms))"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))} // O value sempre é uma string
            disabled={toShow ? true : false}
            className="w-full outline-none border-b-2 py-5 px-0.5 mb-5 disabled:opacity-50"
          />

          {/* button */}
          <button
            onClick={handleCalculateButton}
            className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 duration-300 text-xl text-white border-0 rounded-r-2xl py-4 px-0 w-full mt-10 cursor-pointer disabled:opacity-50"
            disabled={toShow ? true : false}
          >
            Calculate
          </button>
        </div>

        {/* Right side */}
        <div className="md:flex-1 md:ml-10 md:mt-5 md:flex flex-1 flex ml-0 my-12">
          {!toShow && (
            <div className="flex-1 grid grid-cols-2 gap-5">
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            // rightBig
            <div className="flex-1 flex">
              {/* rightArrow */}
              <div
                className="md:absolute md:bg-opacity-90 md:bg-orange-400  md:hover:bg-orange-500 md:w-20 md:h-20 md:rounded-full md:flex md:justify-center md:items-center md:cursor-pointer md:-ml-10 md:mt-40 absolute bg-opacity-90 bg-orange-500  hover:bg-orange-500 w-20 h-20 rounded-md flex justify-center items-center cursor-pointer ml-0 mt-0"
                onClick={handleBackButton}
              >
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
