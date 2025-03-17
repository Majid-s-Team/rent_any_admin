import Statistics from "./Statistics";

function StatisticsComp() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-4 my-5">
      <Statistics
        title="Total User"
        icon="/images/total-user.png"
        value="4000"
        presantage="80%"
      />
      <Statistics
        title="Total Business User"
        icon="/images/total-user.png"
        value="4000"
        presantage="80%"
        down
      />
      <Statistics
        title="Total Sales"
        icon="/images/total-sales.png"
        value="4000"
        presantage="80%"
      />
      <Statistics
        title="Total Ads"
        icon="/images/total-ads.png"
        value="4000"
        down
        presantage="80%"
      />
    </div>
  );
}

export default StatisticsComp;
