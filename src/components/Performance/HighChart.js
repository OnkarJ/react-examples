import React from "react";
import Highcharts from "highcharts";
import Chart from "./Charts";
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  title: {
    text: ""
  },
  series: [
    {
      data: [[1, "Highcharts"], [1, "React"], [3, "Highsoft"]],
      keys: ["y", "name"],
      type: "pie"
    }
  ]
};

class Highchart extends React.PureComponent {
    render() {
        return (
            <div>
                <Chart options={chartOptions} highcharts={Highcharts} />
            </div>
        )
    }
}

export default Highchart;