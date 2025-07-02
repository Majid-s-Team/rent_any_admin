import { Carousel } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import HomeLayout from "../component/shared/HomeLayout";
import { useRequest } from "../hooks/useRequest";
import { advertisements } from "../repositories";
import { Advertisement } from "../types";
import { useParams } from "react-router-dom";

const AdDetail = () => {
  const { id } = useParams();
  const { data, loading }: { data: Advertisement | null; loading: boolean } =
    useRequest(advertisements.url, advertisements.method, {
      type: "mount",
      routeParams: id,
    });

  if (loading || !data) {
    return (
      <HomeLayout>
        <div className="min-h-[300px] flex items-center justify-center text-gray-500">
          Loading ad details...
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT - Images + Description */}
        <div className="lg:col-span-2">
          {/* Carousel */}
          {data.media?.length > 0 && (
            <Carousel autoplay className="rounded-lg overflow-hidden mb-6">
              {data.media.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.file}
                    alt={`media-${index}`}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              ))}
            </Carousel>
          )}

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {data.title}
          </h1>
          <p className="text-sm text-white inline-block bg-green-500 px-3 py-1 rounded mb-4 capitalize">
            {data.ad_status}
          </p>
          <p className="text-gray-700 text-[18px] mb-4">
            <strong>Description:</strong> {data.description}
          </p>

          <div className="text-[18px] text-gray-600 space-y-2">
            <p>
              <strong>Brand:</strong> {data.brand}
            </p>
            <p>
              <strong>Category:</strong> {data.category?.name}
            </p>
            <p>
              <strong>Price per Day:</strong> Rs. {data.price_per_day}
            </p>
            <p>
              <strong>Price per Slot:</strong> Rs. {data.price_per_slot}
            </p>
            <p>
              <strong>Peak Slot:</strong> {data.peak_start_time} -{" "}
              {data.peak_end_time} (Rs. {data.peak_price_per_slot})
            </p>
            <p>
              <strong>Slot Duration:</strong> {data.slot_duration} mins
            </p>
            <p>
              <strong>Available Time:</strong> {data.start_time} -{" "}
              {data.end_time}
            </p>
            <p>
              <strong>Advance Booking:</strong> {data.advance_booking_duration}
            </p>
          </div>
        </div>

        {/* RIGHT - Quick Info */}
        <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-sm space-y-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Quick Info
          </h2>

          <div className="text-sm text-gray-600">
            <p>
              <EnvironmentOutlined className="mr-2" /> {data.address}
            </p>
            <p>
              <strong>City:</strong> {data.city}
            </p>
            <p>
              <strong>Country:</strong> {data.country}
            </p>
          </div>

          {data.tags?.length > 0 && (
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-xs px-3 py-1 rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default AdDetail;
