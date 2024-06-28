const jobDataArr = [
  {
    title: "applicants",
    content: "400",
    svg: "./src/assets/people-icon.svg",
  },
  {
    title: "matches",
    content: "100",
    svg: "./src/assets/match-icon.svg",
  },
  {
    title: "messages",
    content: "147",
    svg: "./src/assets/message-square-01.svg",
  },
  {
    title: "views",
    content: "800",
    svg: "./src/assets/views-icon.svg",
  },
];

const JobApplication = () => {
  return (
    <div className="w-max">
      <div className="flex gap-4">
        <div className="rounded-lg flex gap-[10px] border-[0.8px] border-solid border-accent bg-[#FEF4F2] py-3 px-6">
          <button className="font-general text-base leading-[21.6px] text-accent font-medium ">
            Delete Job
          </button>
        </div>
        <div>
          <button>Edit Job</button>
        </div>
      </div>
      <div className="flex flex-col">
        {jobDataArr.map(({ content, title, svg, index }) => {
          return (
            <div key={index} className="flex justify-between">
              <div>
                <img src={svg} alt={title} />
                <h3>{title}</h3>
              </div>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobApplication;
