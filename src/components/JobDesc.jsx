const JobDesc = () => {
  return (
    <section className=" font-general flex gap-2 flex-col mt-[36px]">
      <p className="font-medium text-sm leading-[18.9px] text-secondary">
        About the job
      </p>
      <div className="text-base leading-[28px] text-primary font-medium">
        <ol className=" text-left list-decimal ml-4">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs and trends
          </li>
          <li>Work on conception and vizualizing </li>
          <li>Work on graphics content and other graphic related work</li>
        </ol>
        <p>Benefits:</p>
        <ul className="list-disc ml-6">
          <li>Health Insurance</li>
          <li>Provident Fund</li>
        </ul>
        <p>Schedule:</p>
        <ul className="list-disc ml-6">
          <li>Day Shift</li>
        </ul>
        <p>Supplemental Pay types:</p>
        <ul className="list-disc ml-6">
          <li>Perfomance Bonus</li>
          <li>Yearly Bonus</li>
        </ul>
        <p>Work Location: In person</p>
      </div>
    </section>
  );
};

export default JobDesc;
