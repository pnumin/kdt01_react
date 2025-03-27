import { useParams } from "react-router-dom" ;

export default function RoutePage1() {
  const {item1 , item2} = useParams();
  // const items = useParams() ;

  console.log(useParams());
  console.log(item1, item2)
  // console.log(items.item1, items.item2)
  return (
    <div className="text-2xl font-bold">
      { item1 == 'm' ? "메뉴를 선택하셨습니다." 
                     : `${item1}은 ${item2} 입니다.`}
    </div>
  )
}
