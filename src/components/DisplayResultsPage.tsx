import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
const DisplayResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // get start round values
  const GeraldoRound = location.state["geraldoRound"];
  const NFTRound = location.state["NFTRound"];
  const NFTPrice = 810;

  // calculate round 1 to round 100 values with formula
  // formula
  // if Geraldo Round < 31
  // NFTPrice= NFTPrice*1.10 from GeraldoRound to Round 30 inclusive
  // if Geraldo Round > 30 and < 81
  // NFTPrice = NFTPrice*1.05 for each Round
  // if Geraldo Round > 80
  // NFTPrice = NFTPrice*1.02

  const data = [];
  let price = NFTPrice;
  for (let round = GeraldoRound; round <= 100; round++) {
    price = Math.round(price);
    data.push({ round, price });
    if (round <= 30) {
      price *= 1.1;
    } else if (round <= 80) {
      price *= 1.05;
    } else {
      price *= 1.02;
    }
  }
  console.log(data);

  // Plot a Table displaying Columns "Round", "NFT Price"
  // The Table row with Round = NFTRound should be highlighted Green
  // Plot a graph of the Table data.
  return (
    <div className="content-container">
      <ResponsiveContainer width="50%" height="50%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="round"
            type="number"
            tickCount={10}
            label={{
              value: "Round",
              position: "insideBottomRight",
              offset: -15,
            }}
          />
          <YAxis
            label={{
              value: "NFT Price",
              angle: -90,
              position: "insideLeft",
              offset: -10,
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            name="NFT Price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine
            x={NFTRound}
            stroke="green"
            label={{ position: "top", fill: "green", r: 15 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <Button
        onClick={() => {
          navigate("/quincynft");
        }}
      >
        {" "}
        Go Back{" "}
      </Button>
    </div>
  );
};

export default DisplayResults;
