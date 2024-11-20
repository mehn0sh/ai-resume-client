import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-sm font-bold text-center"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr
        className="border-t-2 border my-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {resumeInfo?.skills?.map((skill, index) => {
          return (
            <div key={index} className='flex justify-evenly items-center'>
              <h2 className="text-xs overflow-auto w-[60px] sm:w-fit" >{skill?.name}</h2>
              <div className="h-2 bg-gray-200 w-[120px]">
                <div className="h-2" style={{width:skill.rating*20+"%",backgroundColor:resumeInfo?.themeColor}}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPreview;
