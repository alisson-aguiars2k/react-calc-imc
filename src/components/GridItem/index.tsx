import { Level } from "../../helpers/bmi";
import downImage from "../../assets/images/down.png";
import upImage from "../../assets/images/up.png";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    // main
    <div
      style={{ backgroundColor: item.color }}
      className="flex-auto text-white rounded-xl flex justify-center items-center flex-col p-5"
    >
      {/* gridIcon */}
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-500 bg-opacity-20">
        <img
          src={item.icon === "up" ? upImage : downImage}
          alt=""
          width="30px"
        />
      </div>
      {/* gridTitle */}
      <div className="text-xl font-bold text-center">{item.title}</div>

      {item.yourBmi && (
        <div className="text-base mt-2.5 mr-0 mb-12 ml-0">
          Seu BMI é de {item.yourBmi} kg/m²
        </div>
      )}

      {/* gridInfo */}
      <div className=" text-xs mt-4 text-center">
        <>
          BMI is between <strong>{item.bmi[0]}</strong> and{" "}
          <strong>{item.bmi[1]}</strong>
        </>
      </div>
    </div>
  );
};
