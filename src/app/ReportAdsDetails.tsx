import { Card, Descriptions, Image } from "antd";
import { VideoCameraOutlined, PictureOutlined } from "@ant-design/icons";
import HomeLayout from "../component/shared/HomeLayout";
import { useRequest } from "../hooks/useRequest";
import { useParams } from "react-router-dom";
import { ReportAds } from "../types";
import { reportAds } from "../repositories";

const ReportDetail = () => {
  const { id } = useParams();
  const { data, loading }: { data: ReportAds | null; loading: boolean } =
    useRequest(reportAds.url, reportAds.method, {
      type: "mount",
      routeParams: id,
    });

  const { user, advertisement, note } = data || {};

  return (
    <HomeLayout loading={loading}>
      <div className="lg:max-w-5xl lg:mx-auto space-y-6">
        <Card title="Reported Advertisement" bordered={false}>
          <Descriptions
            column={2}
            size="middle"
            labelStyle={{ fontWeight: 600 }}
          >
            {/* <Descriptions.Item label="Status">
              <Badge
                status={report_status === "rejected" ? "error" : "success"}
                text={report_status?.toUpperCase()}
              />
            </Descriptions.Item> */}
            <Descriptions.Item label="Note">{note}</Descriptions.Item>
          </Descriptions>
        </Card>

        <Card title="User Info" bordered={false}>
          <div className="flex items-center gap-4">
            <Image
              width={80}
              src={user?.image_url}
              preview={false}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-lg">{user?.name}</p>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-gray-500">
                Username: {user?.username}
              </p>
              <p className="text-sm text-gray-500">Phone: {user?.mobile_no}</p>
              {/* <p className="text-sm text-gray-500 capitalize">
                Role: {user?.role}
              </p> */}
            </div>
          </div>
        </Card>

        <Card title="Ad Details" bordered={false}>
          <Descriptions
            // column={1}
            className="grid grid-cols-1 gap-4 w-full mb-10"
            size="middle"
            labelStyle={{ fontWeight: 600 }}
          >
            <Descriptions.Item label="Title">
              {advertisement?.title}
            </Descriptions.Item>
            <Descriptions.Item label="Brand">
              {advertisement?.brand}
            </Descriptions.Item>
            <Descriptions.Item label="Price / Slot">
              ${advertisement?.price_per_slot}
            </Descriptions.Item>
            <Descriptions.Item label="Peak / Slot">
              {advertisement?.peak_price_per_slot || "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Timing">
              {advertisement?.start_time} - {advertisement?.end_time}
            </Descriptions.Item>
            <Descriptions.Item label="City">
              {advertisement?.city}
            </Descriptions.Item>
            <Descriptions.Item label="Country">
              {advertisement?.country}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={2}>
              {advertisement?.description}
            </Descriptions.Item>
            <Descriptions.Item label="Location">
              {advertisement?.address}
            </Descriptions.Item>
          </Descriptions>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {advertisement?.media.map((media, index) => (
              <div key={index} className="rounded shadow h-[340px]">
                {media.type === "image" ? (
                  <Image
                    src={media.file}
                    alt="Ad Image"
                    width={"100%"}
                    height={300}
                    style={{
                      objectFit: "contain",
                    }}
                    className="!w-full object-conatin"
                  />
                ) : (
                  <video
                    controls
                    className="w-full h-[300px] object-contain"
                    poster={media.thumbnail || ""}
                  >
                    <source src={media.file} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="p-2 text-center bg-gray-100">
                  {media.type === "image" ? (
                    <PictureOutlined className="text-xl text-blue-500" />
                  ) : (
                    <VideoCameraOutlined className="text-xl text-purple-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </HomeLayout>
  );
};

export default ReportDetail;
