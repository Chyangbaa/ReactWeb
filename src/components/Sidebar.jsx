import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import {useState} from 'react';
import {  AnimatePresence, motion } from "framer-motion";


const routes = [
    {
    path:"/",
    name:"Home",
    icon: <FaHome/>,
},

{
    path:"/users",
    name:"Users",
    icon: <FaUser/>,
},

{
    path:"/messages",
    name:"Messages",
    icon: <MdMessage/>,
},

{
    path:"/analytics",
    name:"Analytics",
    icon: <BiAnalyse/>,
},

{
    path:"/project",
    name:"Project",
    icon: <BsCartCheck/>,
},

{
    path:"/saved",
    name:"Saved",
    icon: <AiFillHeart/>,
},
];
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation ={
        hidden:{
            width: 0,
            padding:0,
            opacity:0,
            transition:{
            duration:0.2,}
        },
        show:{
            padding: "5px 10px",
            width: "140px",
            opacity:1,
            transition:{
            duration:0.3,}
        },

    };
    const showAnimation ={
        hidden:{
            width: 0,
            opacity:0,
            transition:{
            duration:0.2,}
        },
        show:{
            width: 'auto',
            opacity:1,
            transition:{
            duration:0.5,}
        },

    };

    return(
        <div className="main-container">
        <motion.div 
            animate={{ 
                width: isOpen ? "200px" : "36px", 
                transition:{
                duration:0.5,
                type:"spring",
                damping:10,
            },
        }} 
            className="sidebar"
            >

            <div className="top_section">
                {isOpen && (
                            <motion.h1 
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden" 
                                className="logo">
                                College
                            </motion.h1>
                            )}
                <div className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>

            <div className="search">
                <div className="search_icon">
                    <BiSearch/>
                </div>
                <AnimatePresence>
                    {isOpen && (
                    <motion.input 
                    variants={inputAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    placeholder="Search.."
                    />
                    )}
                </AnimatePresence>
            </div>
            <section className="routes">
                {routes.map((route) =>(
                    <NavLink 
                    activeClassName="active"
                    to={route.path}
                    key={route.name}
                    className="link"
                    >
                        <div className="icon">{route.icon}</div>
                        <AnimatePresence>
                            {isOpen && (
                            <motion.div 
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                            >
                            {route.name}</motion.div>
                            )}
                        </AnimatePresence>
                    </NavLink>
                ))}
            </section>
        </motion.div>
        <main>
            {children}
        </main>
    </div> 
    );
};
export default Sidebar;