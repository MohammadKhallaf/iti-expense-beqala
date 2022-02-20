import "./WidgetLg.css"
import photo from "../images/magdi.jpeg";
export default function WidgetLg() {

const Button = ({type}) =>{
    return <button className={"WidgetLgBtn " +type}>{type}</button>
}

    return (
        <div className="WidgetLg">
            <h3 className="WidgetLgTittle">Latest Transactions</h3>
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img className="WidgetLgImg" src={photo} alt="" />
                        <span className="WidgetLgNamre">Mohamed Magdi</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2022</td>
                    <td className="WidgetLgAmount">$122.00</td>
                    <td className="WidgetLgStatus"> <Button type="Approved"/></td>


                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img className="WidgetLgImg" src={photo} alt="" />
                        <span className="WidgetLgNamre">Mohamed Magdi</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2022</td>
                    <td className="WidgetLgAmount">$122.00</td>
                    <td className="WidgetLgStatus"> <Button type="Decline"/></td>


                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img className="WidgetLgImg" src={photo} alt="" />
                        <span className="WidgetLgNamre">Mohamed Magdi</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2022</td>
                    <td className="WidgetLgAmount">$122.00</td>
                    <td className="WidgetLgStatus"> <Button type="Pending"/></td>


                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img className="WidgetLgImg" src={photo} alt="" />
                        <span className="WidgetLgNamre">Mohamed Magdi</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2022</td>
                    <td className="WidgetLgAmount">$122.00</td>
                    <td className="WidgetLgStatus"> <Button type="Approved"/></td>


                </tr>
                <tr className="WidgetLgTr">
                    <td className="WidgetLgUser">
                        <img className="WidgetLgImg" src={photo} alt="" />
                        <span className="WidgetLgNamre">Mohamed Magdi</span>
                    </td>
                    <td className="WidgetLgDate">2 Jun 2022</td>
                    <td className="WidgetLgAmount">$122.00</td>
                    <td className="WidgetLgStatus"> <Button type="Approved"/></td>


                </tr>
            </table>
        </div>
    )
}
