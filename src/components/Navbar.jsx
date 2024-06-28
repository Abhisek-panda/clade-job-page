const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center">
      {/* logo-nav */}
      <div className="bg-[#E7E7E7]  text-xl font-bold w-[100px] h-[61px] flex justify-center items-center ml-[40px]">
        <p className="font-satoshi text-accent leading-[27px]">Logo</p>
      </div>
      {/* jobs-messages-nav */}
      <div className="flex w-[538px] h-[74px] items-center justify-between gap-4 rounded-[36px] border-solid border-[0.5px] border-[#D1D1D1] font-general  ">
        <div className="w-[109px] h-[58px] border-solid border-[2px] border-[#FCB4A5] rounded-[49px] flex justify-center items-center bg-accent text-white gap-2 ml-2">
          <img src="./src/assets/job-icon.svg" alt="job-icon" />
          <p className="leading-[27px] text-xl">Jobs</p>
        </div>
        <div className="text-xl leading-[27px]flex text-[#B0B0B0] flex gap-2">
          <img src="./src/assets/message-square-01.svg" alt="" />
          <p>Messages</p>
        </div>
        <div className="text-xl leading-[27px] flex text-[#B0B0B0] mr-2 gap-2">
          <img src="./src/assets/coins-hand.svg" alt="" />
          <p>Payments</p>
        </div>
      </div>
      {/* notification-nav */}
      <div className="flex gap-4">
        <img src="./src/assets/notification.svg" alt="notification-log" />
        <div className="flex gap-1.5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s"
            alt="atlassian log"
            className="h-[40px] w-[40px] object-fit rounded-[60px]"
          />
          <img src="./src/assets/drop-down.svg" alt="drop-down" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
