import MyListItem from "./MyListItem"

export default function MyList() {
  const data = {
    "title": "HTML",
    "imgUrl": "./img/html.png",
    "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
  }
  return (
    <div>
      MyList
      <MyListItem />
    </div>
  )
}
