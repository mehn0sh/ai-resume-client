import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import { ResumeInfoContext } from "../../../../context/resumeInfoContext";
import FormSection from "../../components/FormSection";
import { ResumePreview } from "../../components/ResumePreview";
import dummydata from "../../data/dummydata";

const EditResume = () => {
  const {resumeid} = useParams();
  const [resumeInfo, setresumeInfo] = useState();
  const [data, setdata] = useState([]);
  const { user } = useUser();
const GetResumeInfo=()=>{
  GlobalApi.GetResumeById(resumeid).then((res)=>{
    setresumeInfo(res.data.data)
  })
}
  useEffect(() => {
GetResumeInfo()
  }, []);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setresumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
