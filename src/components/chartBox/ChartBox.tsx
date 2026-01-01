import "./ChartBox.scss";
import { Line, LineChart, Tooltip} from 'recharts';
import { Link } from "react-router-dom";

type props ={
  color: string;
  title:string;
  number: number | string;
  chartData: object[];
  dataKey: string;
  percentage: string;
  
  icon: string;
}

const ChartBox = (props: props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color: props.color}}>View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          
          <LineChart
            style={{ width: "99%", height: "100%" }}
            responsive
            data={props.chartData}
          >
            <Tooltip 
            contentStyle={{background:"transparent",  border:"none"}}
            labelStyle={{display:"none"}}
            position={{x:10,y:60}}
            />
            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
          </LineChart>
        </div>
        <div className="texts">
          <span className="percentage" style={{color: Number(props.percentage) < 0 ? "red" : "limegreen"}}>{props.percentage}</span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
