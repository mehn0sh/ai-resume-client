import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";
import GlobalApi from "../../../../service/GlobalApi";
import Header from "../../../components/header/Header";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/resumeInfoContext";
import { ResumePreview } from "../../../dashboard/resume/components/ResumePreview";

const View = () => {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeid } = useParams();
  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeid).then((res) => {
      setResumeInfo(res.data.data);
    });
  };
  useEffect(() => {
    GetResumeInfo();
  }, []);
  const HandleDownload = () => {
    window.print();
  };
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Congrats! Your Ultimate AI generates Resume is ready !{" "}
          </h2>
          <p className="text-center text-gray-400">
            Now you are ready to download your resume and you can share unique
            resume url with your friends and family
          </p>
          <div className="flex justify-around  my-10 items-center">
            <div>

            <Button onClick={HandleDownload}>Download</Button>
            </div>
            <div>
            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open url to see it",
                url:
                  import.meta.env.VITE_BASE_URL +
                  "my-resume/" +
                  resumeid +
                  "/view",
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share 🔗</Button>
            </RWebShare>

            </div>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default View;
