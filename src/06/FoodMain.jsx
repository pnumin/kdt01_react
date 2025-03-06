import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import { useState } from "react" 
import TailButton from "../UI/TailButton"

export default function FoodMain() {
  const [tags, setTags] = useState([]);

  let category = fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''));
  category = [...new Set(category)];
  console.log(category)

  const handleCategory = (c) => {
    console.log("handleCategory", c)
  }
  const bts = category.map(item => <TailButton 
                                    key = {item}
                                    caption = {item}
                                    color = "lime"
                                    onClick = {() => handleCategory(item)}
                                    />);
  return (
    <div className="w-11/12">
      <div className="w-full flex justify-center items-center
                      p-5 border border-lime-800">
        {bts}
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
      </div>
    </div>
  )
}
