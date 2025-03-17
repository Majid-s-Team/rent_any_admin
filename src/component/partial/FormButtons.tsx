import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  onSubmit?: () => void;
  path?: string | undefined;
  title?: string;
  loading?: boolean;
};

export default function FormButtons({ onSubmit, path, title, loading }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row flex-col gap-4 mt-5">
      <Button
        onClick={() => path && navigate(path)}
        className="lg:w-[148px] w-full h-[50px] border border-[#232323] bg-transparent rounded-[10px] text-[14px] text-[#232323] red-regular"
      >
        Cancel
      </Button>
      <Button
        onClick={onSubmit}
        loading={loading}
        className="lg:w-[148px] w-full h-[50px] bg-[#EA2C4C] rounded-[10px] text-[14px] text-white red-regular"
      >
        {title}
      </Button>
    </div>
  );
}
