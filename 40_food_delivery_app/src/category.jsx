import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="text-green-500 text-5xl" />
    },
    {
        id: 2,
        name: "breakfast",
        icon: <MdOutlineFreeBreakfast className="text-green-500 text-5xl" />
    },
    {
        id: 3,
        name: "soups",
        icon: <TbSoup className="text-green-500 text-5xl" />
    },
    {
        id: 4,
        name: "pasta",
        icon: <CiBowlNoodles className="text-green-500 text-5xl" />
    },
    {
        id: 5,
        name: "main_course",
        icon: <MdOutlineFoodBank className="text-green-500 text-5xl" />
    },
    {
        id: 6,
        name: "pizza",
        icon: <GiFullPizza className="text-green-500 text-5xl" />
    },
    {
        id: 7,
        name: "burger",
        icon: <GiHamburger className="text-green-500 text-5xl" />
    },
]

export default categories