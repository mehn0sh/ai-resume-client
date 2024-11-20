import React from "react";

const EducationPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-sm font-bold text-center"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr
        className="border-t-2 border my-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      <div>
        {resumeInfo?.education?.map((education, index) => {
          return (
            <div key={index} className="my-5 ">
              <h2 className="font-bold">{education?.universityName} </h2>

              <h2 className="flex justify-between my-2 text-xs flex-col sm:flex-row gap-y-2">
                {education?.degree} in {education?.major}
                <span>
                  {education?.startDate} 
                  <br/>
                  to
                  <br/>
                   {education?.endDate}
                </span>
              </h2>
              <p className="text-xs font-normal">{education?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationPreview;
