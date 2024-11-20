import React from "react";

const ExpriencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-sm font-bold text-center"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Expriense{" "}
      </h2>
      <hr
        className="border-t-2 border my-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      <div>
        {resumeInfo?.Experience?.map((experience, index) => {
          return (
            <div key={index} className="my-4">
              <h2 className="font-bold">{experience?.title}</h2>
              <h2 className="flex justify-between my-2 text-xs flex-col sm:flex-row gap-y-2">
                {experience?.companyName},{experience?.city},{experience?.state}
                ,
                <span>
                  {experience?.startDate}
                  <br/>
                   to
                   <br/>
                  {experience?.currentlyWorking
                    ? " Present"
                    : experience?.endDate}
                </span>
              </h2>
              {/* <p className="text-xs font-normal">{experience?.workSummery}</p> */}
              <div className="text-sm" dangerouslySetInnerHTML={{__html:experience?.workSummery}}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpriencePreview;
