const JobPreview = () => {
  return (
    <div className="flex items-center gap-[72px] ml-[100px] w-max h-max leading-[27px] text-[20px] font-medium text-[#888888] font-general relative">
      <p className="font-semibold text-accent text-left">Job preview</p>
      <p>Applicants</p>
      <p>Match</p>
      <p>Messages</p>
      <div className="absolute w-[65px] h-[2px] bg-accent top-[43px] left-[20px]"></div>
    </div>
  );
};

export default JobPreview;
