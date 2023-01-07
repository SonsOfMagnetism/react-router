import { useParams } from "react-router-dom"
import stockData from "../stock-data"

const Stock = (props) => {
    let { symbol } = useParams()
    for (let i = 0; i < stockData.length; i++) {
        if (symbol === stockData[i].symbol) {
            return<>
            <div>
                <h2>{stockData[i].name}</h2>
                <h2>{stockData[i].symbol}</h2>
                <h2>{stockData[i].lastPrice}</h2>
                <h2>{stockData[i].change}</h2>
                <h2>{stockData[i].high}</h2>
                <h2>{stockData[i].low}</h2>
                <h2>{stockData[i].open}</h2>
            </div>
            </>
        }
    }
}


export default Stock;