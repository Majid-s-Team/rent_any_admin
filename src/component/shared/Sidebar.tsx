import { Menu, MenuProps } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../config";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };

  return (
    <div className="flex flex-col bg-[#fff]">
      <Link to="/dashboard" className="cursor-pointer">
        <img
          className="w-[180px] mx-auto py-5"
          src="/images/logo2.png"
          alt="Logo"
        />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        className="bg-transparent border-none flex flex-col gap-6"
        items={sidebarLinks.map((item) => {
          const isActive = location.pathname === item.key;

          // ||
          // location.pathname.startsWith(`${item.key}/`);

          return {
            ...item,
            label: (
              <p
                className={`text-[14px] red-semibold ${
                  isActive ? "text-white" : "text-[#6D777A]"
                }`}
              >
                {item.label}
              </p>
            ),
            icon: (
              <img
                className="w-[22px] h-[22px]"
                src={isActive ? item.iconactive : item.icon}
                alt={item.label}
              />
            ),
          };
        })}
        onClick={handleClick}
      />
    </div>
  );
};
