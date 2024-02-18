import Image from "next/image";
import React from "react";
import Block from "../block/Block";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Hearder2 from "../hearder2/Hearder2";

const Header = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-200 items-center h-20 px-10">
      <Image src={"/logo.png"} width={200} height={200} className="w-28 h-28" />
      <div className="h-full flex">
        <Block
          title={"Become a member"}
          para={"Additional 10% off an stays."}
          icon={<PushPinOutlinedIcon />}
        />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
          icon={<ForwardToInboxOutlinedIcon />}
        />
        <Block
          title={"List your property"}
          para={"Start earning in 30 min."}
          icon={<MeetingRoomOutlinedIcon />}
        />
        <Block
          title={"0124-7008291056"}
          para={"Call us to book now."}
          icon={<LocalPhoneOutlinedIcon />}
        />
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full mt-2 ml-2">
            <LogoutOutlinedIcon />
          </div>
          <h3 className="font-bold">Login / Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
