import "./home.scss"
import TopBox from "../../components/topBox/TopBox"
import ChartBox from "../../components/chartBox/ChartBox"
import BarChartBox from "../../components/barChartBox/barChartBox"
import { barChartBoxVisit,barChartBoxRevenue, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import PiChartBox from "../../components/piChartBox/PiChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox {...{...chartBoxUser, percentage: String(chartBoxUser.percentage)}} /></div>
      <div className="box box3"><ChartBox {...{...chartBoxProduct, percentage: String(chartBoxProduct.percentage)}} /></div>
      <div className="box box4"><PiChartBox /></div>
      <div className="box box5"><ChartBox {...{...chartBoxRevenue, percentage: String(chartBoxRevenue.percentage)}} /></div>
      <div className="box box6"><ChartBox {...{...chartBoxConversion, percentage: String(chartBoxConversion.percentage)}} /></div>
      <div className="box box7"><BigChartBox {...BigChartBox}/></div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue} /></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit} /></div>
    </div>
  )
}

export default Home