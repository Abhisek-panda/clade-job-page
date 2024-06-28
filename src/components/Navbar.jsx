import jobIcon from "../assets/job-icon.svg";
import coinLogo from "../assets/coins-hand.svg";
import messageLogo from "../assets/message-square-01.svg";
import notificationLogo from "../assets/notification.svg";
import dropDownLogo from "../assets/drop-down.svg";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      {/* logo-nav */}
      <div className="bg-[#E7E7E7]  text-xl font-bold w-[100px] h-[61px] flex justify-center items-center ml-[40px]">
        <p className="font-satoshi text-accent leading-[27px]">Logo</p>
      </div>
      {/* jobs-messages-nav */}
      <div className="flex w-[538px] h-[74px] items-center justify-between gap-4 rounded-[36px] border-solid border-[0.5px] border-[#D1D1D1] font-general  ">
        <div className="w-[109px] h-[58px] border-solid border-[2px] border-[#FCB4A5] rounded-[49px] flex justify-center items-center bg-accent text-white gap-2 ml-2">
          <img src={jobIcon} alt="job-icon" />
          <p className="leading-[27px] text-xl">Jobs</p>
        </div>
        <div className="text-xl leading-[27px]flex text-[#B0B0B0] flex gap-2">
          <img src={messageLogo} alt="" />
          <p>Messages</p>
        </div>
        <div className="text-xl leading-[27px] flex text-[#B0B0B0] mr-2 gap-2">
          <img src={coinLogo} alt="" />
          <p>Payments</p>
        </div>
      </div>
      {/* notification-nav */}
      <div className="flex gap-4">
        <img src={notificationLogo} alt="notification-log" />
        <div className="flex gap-1.5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s"
            alt="atlassian log"
            className="h-[40px] w-[40px] object-fit rounded-[60px]"
          />
          <img src={dropDownLogo} alt="drop-down" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
