import peopleLogo from "../assets/people-icon.svg";
import matchIconLogo from "../assets/match-icon.svg";
import messageLogo from "../assets/message.svg";
import viewsLogo from "../assets/views-icon.svg";
import editLogo from "../assets/edit-icon.svg";
import deleteLogo from "../assets/delete-icon.svg";

const jobDataArr = [
  {
    title: "applicants",
    content: "400",
    svg: peopleLogo,
  },
  {
    title: "matches",
    content: "100",
    svg: matchIconLogo,
  },
  {
    title: "messages",
    content: "147",
    svg: messageLogo,
  },
  {
    title: "views",
    content: "800",
    svg: viewsLogo,
  },
];

const JobApplication = () => {
  return (
    <div className="mt-[36px] flex flex-col gap-4 justify-center items-center">
      <div className="flex gap-4 items-center justify-between w-[360px] h-max ">
        <div className="rounded-lg gap-[10px] border-[0.8px] border-solid border-accent bg-[#FEF4F2] py-3 px-6 flex items-center w-[172px] justify-center ">
          <img
            src={deleteLogo}
            alt="delete icon"
            className="h-[15px] w-[15px] "
          />
          <button className="font-general text-base leading-[21.6px] text-accent font-medium ">
            Delete Job
          </button>
        </div>
        <div className="rounded-lg border-2 border-solid border-[#FED3CA] bg-accent  text-white py-3 px-6 flex items-center justify-center gap-[10px] w-[172px] ">
          <img src={editLogo} alt="" className="h-[15px] w-[15px] " />
          <button className="font-general font-medium text-base leading-[21.6px]">
            Edit Job
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-3 rounded-[5px] w-[360px]">
        {jobDataArr.map(({ content, title, svg, index }) => {
          return (
            <div
              key={index}
              className="font-general flex justify-between items-center border-b-[1px] border-b-border border-b-solid"
            >
              <div className="flex gap-[10px] p-[10px]">
                <img src={svg} alt={title} className="" />
                <h3 className="capitalize font-medium text-base leading-[21.6px] text-[#4F4F4F]">
                  {title}
                </h3>
              </div>
              <p className="font-semibold text-primary text-xl leading-[27px] text-center ">
                {content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobApplication;
