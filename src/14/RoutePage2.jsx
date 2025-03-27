import { useLocation , useSearchParams } from "react-router-dom" ;

export default function RoutePage2() {
  const loc = useLocation() ;
  console.log("loc pathname=", loc) ;

  // let tm = loc.search.replace('?', '').split('&') ;
  // console.log(tm)
  // console.log("loc search=", loc.search) ;

  // let item1 = tm[0].split('=')[1];
  // let item2 = tm[1].split('=')[1];
  // console.log(item1)

  const [sParams] = useSearchParams() ;
  console.log('sParams', sParams);

  // const qlist = [...sParams] ;
  // console.log('sParams', qlist);

  // let item1 = qlist[0][1] ;
  // let item2 = qlist[1][1] ;

  let item1 = sParams.get('item1');
  let item2 = sParams.get('item2');
  return (
    <div className="text-2xl font-bold">
      { !item1 ? "메뉴를 선택하셨습니다." 
                     : `${item1}은 ${item2} 입니다.`}
    </div>
  )
}
