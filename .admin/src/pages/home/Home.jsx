import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const MONTHS = useMemo(() => [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ], []);
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const { data } = await axios.get('/users/stats', {
          headers: {
            token:
              `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`,
          },
        });
        const statsList = data.sort((a, b) => a._id = b._id)
        
        statsList.map((item) =>
          setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'New User': item.total }]),
        );
        
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
