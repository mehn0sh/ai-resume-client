import React from "react";
import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/resumeInfoContext";
import EducationPreview from "./preview/EducationPreview";
import ExpriencePreview from "./preview/ExpriencePreview";
import { PersonalDetailPreview } from "./preview/PersonalDetailPreview";
import SkillsPreview from "./preview/SkillsPreview";
import SummaryPreview from "./preview/SummaryPreview";

export const ResumePreview = () => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg border-t-[20px] p-14 h-full "
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      <SummaryPreview resumeInfo={resumeInfo} />
      <ExpriencePreview resumeInfo={resumeInfo} />
      <EducationPreview resumeInfo={resumeInfo}/>
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  );
};
