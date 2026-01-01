import "./piChartBox.scss"
import { PieChart, Pie, Cell, Tooltip } from "recharts"
const data = [
    { name: 'Group A', value: 400, color: '#0088FE' },
    { name: 'Group B', value: 300, color: '#00C49F' },
    { name: 'Group C', value: 300, color: '#FFBB28' },
    { name: 'Group D', value: 200, color: '#FF8042' },
];
const PiChartBox = () => {
    return (
        <div className="piChartBox">
            <h1>Leads by source</h1>
            <div className="chart">
                    <PieChart
                    style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                    responsive
                >
                    <Tooltip
                        contentStyle={{ background: "white", borderRadius: "5px" }}

                    />

                    <Pie
                        data={data}
                        outerRadius={90}
                        innerRadius={70}
                        labelLine={false}
                        dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>

            </div>
            <div className="options">
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        
                        
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PiChartBox