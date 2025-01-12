import { AiFillBank, AiFillAndroid, AiFillApi, AiFillBell, AiFillFacebook } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
     flex flex-col
     bg-primary text-secondary shadow-lg" >
        <i><SidebarIcon icon={<AiFillBank/>} /></i>
        <i><SidebarIcon icon={<AiFillAndroid/>} /></i>
        <i><SidebarIcon icon={<AiFillApi/>} /></i>
        <i><SidebarIcon icon={<AiFillBell/>} /></i>
        <i><SidebarIcon icon={<AiFillFacebook/>} /></i>
    </div>
  )
}

const SidebarIcon = ({icon, text = "tooltip 💡"}:{icon: any, text?: string}) => {
  return (
    <div className="sidebar-icon group" >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100" >
        {text}
      </span>
    </div>
  )
}

export default Sidebar