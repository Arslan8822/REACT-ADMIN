import "./barChartBox.scss"
import { BarChart, Bar, Tooltip } from "recharts"

type props ={
    title: string;
    chartData: object[];
    dataKey: string;
    color: string;
}

const barChartBox = (props: props) => {
  return (
    <div className="barChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
             <BarChart
       
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={props.chartData}
    >
      <Tooltip
      contentStyle={{background:"#2a3447" , borderradius:"5px"}}
        labelStyle={{display:"none"}}
        cursor={{fill:"none"}}
      />
      <Bar dataKey={props.dataKey} fill={props.color} />
    </BarChart>
        </div>
    </div>
  )
}

export default barChartBox