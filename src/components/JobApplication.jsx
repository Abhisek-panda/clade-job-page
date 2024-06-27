const jobViews = [
  {
    title: "applicants",
    content: "400",
  },
  {
    title: "matches",
    content: "100",
  },
  {
    title: "messages",
    content: "147",
  },
  {
    title: "views",
    content: "800",
  },
];

const JobApplication = () => {
  return (
    <div>
      <button>Delete Job</button>
      <button>Edit Job</button>
      <div>
        {jobViews.map(({ content, title }) => {
          <>
            <h3>{title}</h3>
            <p>{content}</p>
          </>;
        })}
      </div>
    </div>
  );
};

export default JobApplication;
