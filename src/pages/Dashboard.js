import { Link } from "react-router-dom"
import stockData from "../stock-data"

const Dashboard = (props) => {
    return <>
        <h1>Most Active Stocks</h1> 
        <div className="stocks">
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
            </table>
            {stockData.map((stock) => {
                const { name, symbol, lastPrice, change } = stock
                return<>    
                    <Link to={`/stocks/${symbol}`}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{name} {symbol}</td>
                                    <td>{lastPrice}</td>
                                    <td>{change}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Link>
                </>
            })}
        </div>
    </>
}

export default Dashboard;