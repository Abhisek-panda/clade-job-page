const JobTitle = () => {
  return (
    <div className="flex flex-col font-general gap-6 mt-9">
      <div className="flex items-center gap-3">
        <h1 className="text-[35px] leading-[47.25px] font-semibold text-primary">
          Senior Product Designer
        </h1>
        <img src="./src/assets/grey-dot.svg" alt="" />
        <div className="flex items-center gap-[12px]">
          <p className="text-[14px] leading-[18.9px] font-medium text-[#888888]">
            posted 2 days ago
          </p>
          <div className="w-max border-[1px] border-solid border-[#ABEFC6] bg-[#ECFDF3] rounded-full text-[#067647] capitalize flex gap-1 p-1">
            <img src="./src/assets/dot.svg" alt="green notification dot" />
            <p className="font-inter text-center text-xs leading-[18px] font-medium ">
              open
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 font-general font-medium text-xl leading-[27px] text-[#5D5D5D] text-left">
        <div className="flex gap-3 items-center">
          <img src="./src/assets/location-icon.svg" alt="location icon" />
          <p className="text-nowrap">Delaware, USA</p>
        </div>
        <img src="./src/assets/grey-dot.svg" alt="" />
        <div className="flex gap-3 items-center">
          <img src="./src/assets/money-icon.svg" alt="" />
          <p>$300k - $400k</p>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
