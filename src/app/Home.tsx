import React from "react";
import { Row } from "antd";
import SalesChart from "../component/partial/Chart";
import { useColors } from "../config/color";
import Statistics from "../component/partial/Statistics";
import { statistics } from "../config/dummy-data/home";
import { PieChart } from "react-minimal-pie-chart";
import LayoutAdmin from "../component/partial/Layout";
import Text from "../component/higherOrder/Text";

const Dashboard: React.FC = () => {
  const colors = useColors();

  // useRequestHook({
  //     url: '/products',
  //     method: 'post',
  // }).withBody({
  //     title: 'test product',
  //     price: 13.5,
  //     description: 'lorem ipsum set',
  //     image: 'https://i.pravatar.cc',
  //     category: 'electronic'
  // }).call();

  return (
    <LayoutAdmin>
      <Text text="Dashboard" className="text-2xl roboto-semibold mb-4" />
      <Row gutter={16}>
        {statistics.map((stat) => (
          <Statistics {...stat} />
        ))}
      </Row>
      <div className="grid lg:grid-cols-2 gap-4">
        <div
          className="p-6 rounded-[20px] mb-6"
          style={{
            boxShadow: colors.boxshadow,
            backgroundColor: colors.backgroundColor,
          }}
        >
          <Text text="Users" className="text-xl mb-4 roboto-semibold" />
          <SalesChart />
        </div>
        <div
          className="p-6 rounded-[20px] mb-6"
          style={{
            boxShadow: colors.boxshadow,
            backgroundColor: colors.backgroundColor,
          }}
        >
          <Text text="Passports" className="text-xl mb-4 roboto-semibold" />
          <SalesChart />
        </div>
      </div>
      {/* <div className="grid lg:grid-cols-2 gap-4">
        <div
          className="p-6 rounded-[20px] mb-6 "
          style={{
            boxShadow: colors.boxshadow,
            backgroundColor: colors.backgroundColor,
          }}
        >
          <Text text="Users" className="text-xl mb-4 roboto-semibold" />
          <PieChart
            className="w-[400px] h-[400px] mx-auto"
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </div>
      </div> */}
    </LayoutAdmin>
  );
};

export default Dashboard;
