const skillsArr = [
  {
    title: "Figma",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/a057/18e5/8cef2281a092b562908b4c6c49b90170?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOCrkOT~mVKoMo0lX6BvO3HBZAyumj8o5E-rRhrgIhy3jBNbej0zdsUmjVz3lJdTeh5W4GBatzEu4BMCFHeY2o8PTwltt6stxNWLTJEhZLkz9XfOuXBZfzvc73igGbqXSEE2cmSaZw-hrG-C6kc-j9Nuy3rUMUSLnNt6WQ~5yuTz~J026z7o7~-5Z~v24ZJUO2r346dRZ94HRFP9KJJunt1eShfM9Aok~GEmsWybUp-yF4hDjxs79rEsGN3xP7xDNWFFXNwfC0~w7q2nBfp5M1lhBK-jo2A0UDCzopY2TmPU0kyCj49yoyAyBM2xu6ALjZC9Z36enTOtbFnlI1j57A__",
  },
  {
    title: "Adobe Illustrator",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/2a9e/347a/670a5f99deb267ece6bbca706e140b2e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbtxqtUW5D~Le83Zm4EHsIg-u6DTtR7~e0uDrMx~zp4KkoEk81147TNQh-LF9VCQrL56Lf8lkZq~NCtBCQd6xMNOeEMQ84xSE2eJSg0d7QJt24Eyv9jrIcOGxc4MvlC3PM4F~gy7P7U8kS~xwZda96bI0LilLcJSYMbldmgRTzSb8e1uo0BVQvYN-wMHNgszwQOfGT6clVh-XRw6fdDRfs0yXyr~XJGPgdNwVME-4cdHiV9GjDl6b7ICx~hClkoOfmtg~gmyQprRjKsPG8SqseLib~q3Q5spTvdokB~3lMYoub1rjLPlwkt0n-cTb~5ZyAbtB1D2mp26UNCVU0ObWQ__",
  },
  {
    title: "Adobe XD",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5193/29bf/3209900f02282f5bf4650dc4e0e5e138?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kukk3M2xErA7m-hIOrvFVvnGa31jb4F5Coufo9CxaNGkQyWXycOYfBRNooiltShWa2PbrgRxR4~uLV2quuMfCXB3WAoocLA2kQrZXCVePIm3qG9cAXiAt~2ktFUb79v6xdOQMtRMUjZq7SEvpPb1RqSxLIw3dQXMEVoGVRSwDq3OFiVRFqhdMEsRcEB0zBDfwwQRed0RhNfgv42bMCzIX89ffwNGTdnBDCG7V0BZYZsOM8pKYmwl--eENbiDy~R9KeSb59dCSD80nU0eBhaq3t9ukT835Uh2Rena0--5jkK5zueuZ8etipqbj~6s4BJVawKPjca2XdIt7geIPXArZg__",
  },
];

const JobRequirement = () => {
  return (
    <div className="flex w-max gap-16 mt-[33px]">
      <div className="flex flex-col gap-2">
        <p className="font-general font-medium text-[14px] leading-[18.9px] text-[#6E6D6D]">
          Skills Required
        </p>
        <div className="flex flex-col gap-2">
          {skillsArr.map(({ title, imageUrl }) => {
            return (
              <div
                key={title}
                className="w-max flex border-[1px] border-solid border-[#D0D5DD] rounded-md gap-[8px] font-general px-1.5 py-1 bg-[#ffffff] hover:opacity-40"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-4 h-4 object-fill"
                />
                <p className="text-[12px] leading-[16.2px] text-center font-medium text-[#344054]">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="font-general flex flex-col gap-2">
        <p className="font-medium text-[14px] leading-[18.9px] text-[#6E6D6D]">
          Preferred language
        </p>
        <h3 className="font-semibold text-base leading-[21.6px] text-[#3D3D3D]">
          English
        </h3>
      </div>
      <div className="font-general flex flex-col gap-2">
        <p className="font-medium text-[14px] leading-[18.9px] text-[#6E6D6D]">
          Type
        </p>
        <h3 className="font-semibold text-base leading-[21.6px] text-[#3D3D3D]">
          Full Time
        </h3>
      </div>
      <div className="font-general flex flex-col gap-2">
        <p className=" font-medium text-[14px] leading-[18.9px] text-[#6E6D6D]">
          Years of Expeience
        </p>
        <h3 className="font-semibold text-base leading-[21.6px] text-[#3D3D3D]">
          3+ years of Exp.
        </h3>
      </div>
    </div>
  );
};

export default JobRequirement;
