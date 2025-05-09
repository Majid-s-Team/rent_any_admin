import { Avatar, Button, Divider, Dropdown, Menu } from "antd";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import EditProfileModal from "../partial/EditProfileModal";
import ChangePasswordModal from "../partial/ChangePasswordModal";

// const languages = [
//   {
//     lang: "English",
//     value: "en",
//     flag: "/images/english-flag.png",
//   },
//   {
//     lang: "French",
//     value: "fr",
//     flag: "/images/french-flag.png",
//   },
//   {
//     lang: "Spanish",
//     value: "sp",
//     flag: "/images/spanish-flag.png",
//   },
// ];

function ProfileDropdown() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Media query for responsive layout: max-width 768px (mobile)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const DropdownMenu = (
    <Menu className="w-[300px] !py-10 !pb-5 bg-[#F5F9FF]  text-center">
      <Menu.Item className="flex justify-center">
        <Avatar size={64} src={user?.image_url} className="" />
        <p className="text-[#171717] text-[18px] red-bold ">{user?.name}</p>
        <p className="text-[#6A778B] text-[18px] red-regular">{user?.email}</p>
      </Menu.Item>

      <Menu.Item>
        <Divider className="!mt-[20px]" />
        <div className="flex items-center gap-3" onClick={() => setOpen(true)}>
          <img className="w-[20px]" src="/icons/edit-blue.png" alt="" />
          <p className="text-[#171717] text-[15px] red-medium ">Edit Profile</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div
          className="flex items-center gap-3 py-3"
          onClick={() => setIsModalOpen(true)}
        >
          <img className="w-[20px]" src="/icons/lock.png" alt="" />
          <p className="text-[#171717] text-[15px] red-medium ">
            Change Password
          </p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <Button
          onClick={logout}
          className="!text-[#FF3B5F] !bg-[#FEEBEB] text-[15px] red-bold rounded-[11px] h-[47px] w-full border border-[#EDEEEF] hover:!border-[#EDEEEF]"
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center gap-2">
      {/* {!isMobile && (
        <div className="flex items-center gap-3">
          <img className="w-[25px]" src="/icons/notification.png" alt="" />
          <div className="flex  justify-center items-center">
            <Select
              placeholder="Select Language"
              // className="login-select"
              defaultValue="en"
              bordered={false}
              // showSearch={false} // 🔹 Prevent input focus behavior
              // filterOption={false}
              style={{ width: 120, border: "none" }}
            >
              {languages.map(({ lang, value, flag }) => (
                <Select.Option key={value} value={value}>
                  <div className="flex items-center gap-2">
                    <img
                      src={flag}
                      alt={lang}
                      className="w-5 h-5 object-cover rounded-sm"
                    />
                    <span>{lang}</span>
                  </div>
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      )} */}
      <Dropdown
        overlay={DropdownMenu}
        trigger={["click"]}
        className="cursor-pointer"
      >
        <div className="flex gap-4 items-center">
          <Avatar size={50} src={user?.image_url || "/images/user.png"} />
          {!isMobile && (
            <div className="cursior-pointer">
              <p
                className="text-[14px] !text-[#171717] red-bold"
                style={{ lineHeight: 2 }}
              >
                {user?.name || "Admin Portal"}
              </p>
              <p
                className="text-[13px] text-[#4D4D4D] red-regular"
                style={{ lineHeight: 1 }}
              >
                {user?.email || "Admin"}
              </p>
            </div>
          )}
        </div>
      </Dropdown>
      {open && (
        <EditProfileModal
          isModalOpen={open}
          handleCancel={() => setOpen(false)}
        />
      )}
      {isModalOpen && (
        <ChangePasswordModal
          isModalOpen={isModalOpen}
          handleCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ProfileDropdown;
