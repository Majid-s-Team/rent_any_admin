import Statistics from "./Statistics";

function StatisticsComp({ data }: any) {
  console.log(data);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-4 my-5">
      <Statistics
        title="Total User"
        icon="/images/total-user.png"
        value={data?.user_count || "0"}
      />
      <Statistics
        title="Total Business User"
        icon="/images/total-user.png"
        value={data.bussiness_count || "0"}
      />
      {/* <Statistics
        title="Total Sales"
        icon="/images/total-sales.png"
        value="4000"
        presantage="80%"
      /> */}
      <Statistics
        title="Total Ads"
        icon="/images/total-ads.png"
        value={data.ad_count || "0"}
      />
    </div>
  );
}

export default StatisticsComp;
