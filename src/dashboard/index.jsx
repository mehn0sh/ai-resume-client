import { useUser } from "@clerk/clerk-react";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../service/GlobalApi";
import { AddResume } from "./components/AddResume";
import { ResumeCartItem } from "./components/ResumeCartItem";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setresumeList] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    themeColor: "",
    summery: "",
    experience: [],
    education: [],
    skills:[]
  });
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    user && GetUserResumeList();
  }, [user]);
  const GetUserResumeList = () => {
    setisLoading(true);
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress)
      .then((res) => {
        setresumeList(res.data.data);
      })
      .finally(setisLoading(false));
  };

  return (
    <div className="p-10 md:px-20 lg:px-32 ">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p>Generate a new resume for your next job role</p>
      <div className="grid md:grid-cols-4 grid-cols-2 my-7 gap-x-2">
        <AddResume />

        {resumeList.length > 0 &&
          resumeList.map((resume, index) => {
            return <ResumeCartItem key={resume.id} resume={resume} refreshData={GetUserResumeList} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
