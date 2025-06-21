import React,{useState,useEffect} from "react";
import ReduxIcon from '../media/carouselIcons/icons8-redux-480.png'
import TailwindIcon from '../media/carouselIcons/icons8-tailwind-css-480.png'
import ReactIcon from '../media/carouselIcons/programing.png'
import TypescriptIcon from '../media/carouselIcons/typescript.png'
interface ListLibrery{
  id: number
  poster: string
}
const Libraries = () => {
  const [list, setList] = useState<ListLibrery[]>([])
  useEffect(() => {
    setList([{
      id: 1,
      poster: ReactIcon
    },{
      id: 2,
      poster: TypescriptIcon
    },{
      id: 3,
      poster: TailwindIcon
    },{
      id: 4,
      poster: ReduxIcon
    }])
  }, [])
  
  return (
    <div className=" flex justify-center gap-10 sm:my-3">
        {list.map((element, index) => (
          <img key={element.id} src={element.poster} className="lg:w-14 md:w-20 sm:w-14" />
        ))}
  </div>
  );
};
export default Libraries