import CommunityImage from '../Images/locked-community.webp'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const Community = ({setCommunity})=>{
    const navigate = useNavigate()

    return(
        <div className="fixed inset-0 flex items-start justify-center mt-24 z-50" onMouseLeave={()=> setCommunity(false)}>
            <div className="border-l border-b w-[22%] h-[220px] pl-4 pt-4 z-50">
            <p className="font-medium">Your people work here</p>
            <p className="w-[80%]">Connect anonymously with professionals about work, pay, life and more</p>
            <button className="border border-gray-900 mt-8  ml-10 p-2 rounded-md hover:bg-blue-600 text-[#20262e]" onClick={()=>navigate('/accounts/login')}>Start using Job Bazaar</button>
            </div>
            <div className="border-r border-b h-[220px]">
                <img src={CommunityImage} alt=""/>
            </div>
            </div>
    )
}
export default Community