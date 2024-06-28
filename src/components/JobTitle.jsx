import greyDot from "../assets/grey-dot.svg";
import moneyLogo from "../assets/money-icon.svg";
import locationLogo from "../assets/location-icon.svg";
import dotLogo from "../assets/dot.svg";

const JobTitle = () => {
  return (
    <div className="flex flex-col font-general gap-6 mt-9">
      <div className="flex items-center gap-3">
        <h1 className="text-[35px] leading-[47.25px] font-semibold text-primary">
          Senior Product Designer
        </h1>
        <img src={greyDot} alt="" />
        <div className="flex items-center gap-[12px]">
          <p className="text-[14px] leading-[18.9px] font-medium text-[#888888]">
            posted 2 days ago
          </p>
          <div
            className="w-max h-max border-[1px] border-solid border-[#ABEFC6] bg-[#ECFDF3] rounded-full capitalize flex gap-1 pt-1 pr-2 pb-1 pl-[6px]  transition-all text-[#067647] hover:opacity-40 
          "
          >
            <img src={dotLogo} alt="green notification dot" />
            <p className="font-inter text-center text-xs leading-[18px] font-medium  transition-all">
              open
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 font-general font-medium text-xl leading-[27px] text-[#5D5D5D] text-left">
        <div className="flex gap-3 items-center">
          <img src={locationLogo} alt="location icon" />
          <p className="text-nowrap">Delaware, USA</p>
        </div>
        <img src={greyDot} alt="" />
        <div className="flex gap-3 items-center">
          <img src={moneyLogo} alt="" />
          <p>$300k - $400k</p>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
