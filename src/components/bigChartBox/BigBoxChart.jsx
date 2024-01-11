import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    books: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 3000,
    clothes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    books: 2000,
    clothes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    books: 1890,
    clothes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 2390,
    clothes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    clothes: 4300,
    electronic: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bg-[#121212] p-6 shadow-md rounded-md  h-full">
      <h1 className="text-2xl font-semibold mb-4">Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorElectronic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b91c1c" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#b91c1c" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorClothes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38a169" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#38a169" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBooks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#181818" }} />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#b91c1c"
              fill="url(#colorElectronic)"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#38a169"
              fill="url(#colorClothes)"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#3b82f6"
              fill="url(#colorBooks)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
