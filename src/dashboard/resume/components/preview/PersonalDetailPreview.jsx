import React from "react";

export const PersonalDetailPreview = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="text-center text-lg font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2 className="text-xs font-normal text-center">{resumeInfo?.address}</h2>
      <div className="flex justify-between mt-3 flex-col sm:flex-row">
        <span className="text-xs font-normal text-center">
          {resumeInfo?.phone}
        </span>
        <span className="text-xs font-normal text-center overflow-x-auto">
          {resumeInfo?.email}
        </span>
      </div>
      <hr
        className="border-t-2 border my-4"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
};
