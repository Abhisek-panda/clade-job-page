const companyDetails = [
  {
    title: "company size",
    content: "1k-2k Employee",
  },
  {
    title: "type",
    content: "private",
  },
  {
    title: "sector",
    content: "information technology, infrastructure",
  },
  {
    title: "funding",
    content: "bootstraped",
  },
  {
    title: "founded in",
    content: "2019",
  },
  {
    title: "founded by",
    content: "scott farquar, mike cannon-brookes",
  },
];

const Company = () => {
  return (
    <div>
      <div>
        <img src="" alt="company logo" />
        <p>Atlassian</p>
      </div>
      <div>
        {companyDetails.map(({ title, content }) => {
          <>
            <p>{title.toLocaleUpperCase()}</p>
            <h3>{content.toUpperCase()}</h3>
          </>;
        })}
      </div>
    </div>
  );
};

export default Company;
