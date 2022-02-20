import "./WidgetSm.css"
import photo from "../images/magdi.jpeg";
import { Visibility } from "@material-ui/icons";
export default function WidgetSm() {
    return (
        <div className="WidgetSm">
            <span className="WidgetSmTittle">New Join Members</span>
            <ul className="WidgetSmList">
                <li className="WidgetSmListItem">
                    <img src={photo} alt="" className="WidgetSmImg"  />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Mohamed Magdi</span>
                        <span className="WidgetSmUserTittle">Software Engineer</span>

                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src={photo} alt="" className="WidgetSmImg" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Mohamed Magdi</span>
                        <span className="WidgetSmUserTittle">Software Engineer</span>

                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src={photo} alt="" className="WidgetSmImg" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Mohamed Magdi</span>
                        <span className="WidgetSmUserTittle">Software Engineer</span>

                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src={photo} alt="" className="WidgetSmImg" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Mohamed Magdi</span>
                        <span className="WidgetSmUserTittle">Software Engineer</span>

                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src={photo} alt="" className="WidgetSmImg" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Mohamed Magdi</span>
                        <span className="WidgetSmUserTittle">Software Engineer</span>

                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
