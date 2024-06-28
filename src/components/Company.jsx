const companyDetails = [
  {
    title: "company size",
    content: "1k-2k Employee",
  },
  {
    title: "sector",
    content: "information technology, infrastructure",
  },
  {
    title: "founded in",
    content: "2019",
  },
  {
    title: "type",
    content: "private",
  },
  {
    title: "funding",
    content: "bootstrapped",
  },
  {
    title: "founded by",
    content: "scott farquar, mike cannon-brookes",
  },
];

const Company = () => {
  return (
    <div className="flex flex-col gap-12 mt-[33px]">
      <div className="flex items-center gap-[10px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s"
          alt="atlassian log"
          className="h-[40px] w-[40px] object-fit rounded-[4px]"
        />
        <p className="font-general font-medium text-xl leading-[27px] text-[#4F4F4F]">
          Atlassian
        </p>
      </div>
      <div className="flex gap-12 font-general">
        <div className="flex flex-col gap-4">
          {companyDetails.slice(0, 3).map(({ title, content, index }) => {
            return (
              <div key={index} className="flex flex-col gap-2 h-max w-max">
                <p className="capitalize font-medium text-sm leading-[18.9px] text-secondary">
                  {title}
                </p>
                <h3 className="capitalize font-medium text-base leading-[21.6px] text-primary">
                  {content}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          {companyDetails.slice(3, 6).map(({ title, content, index }) => {
            return (
              <div key={index} className="flex flex-col gap-2 h-max w-max">
                <p className="capitalize font-medium text-sm leading-[18.9px] text-secondary">
                  {title}
                </p>
                <h3 className="capitalize font-medium text-base leading-[21.6px] text-primary">
                  {content}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Company;
