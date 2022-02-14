import Charts from "../../Charts/Charts";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo";
import "./Home.css";
import {userData} from "./DummyData";
import WidgetLg from "../../WidgetLg/WidgetLg";
import WidgetSm from "../../WidgetSm/WidgetSm";
import SideBar from "../../SideBar/SideBar";
import Navbar from "../../Navbar/Navbar"
export default function Home() {
    return (
        <>
        <Navbar/>
        <div className="home">
             <SideBar />
             <div className="container">
        <FeaturedInfo/>
        <Charts data={userData} tittle='User Analytics' grid dataKey="Active User"/>
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
        </div>
            </div>
        </div>
        </>
    )
}
