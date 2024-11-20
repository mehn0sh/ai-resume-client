import { LoaderCircle } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import GlobalApi from "../../../../../service/GlobalApi";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ResumeInfoContext } from "../../../../context/resumeInfoContext";

const PersonalDetail = ({ setnextButton }) => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  const [formData, setformData] = useState({});
  const [Loading, setLoading] = useState();
  const params = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnextButton(true);
    setformData({
      ...formData,
      [name]: value,
    });
    setresumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };
  const onSaveHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.UpdateResumeDetail(params?.resumeid, data)
      .then((resp) => {
        setnextButton(true);
        setLoading(false);
        toast("Details Updated.")

      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-8">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>
      <form action="" onSubmit={onSaveHandler}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label htmlFor="" className="text-sm">
              First Name
            </label>
            <Input name="firstName" required onChange={handleInputChange} defaultValue={resumeInfo?.firstName}/>
          </div>
          <div>
            <label htmlFor="" className="text-sm">
              Last Name
            </label>
            <Input name="lastName" required onChange={handleInputChange} defaultValue={resumeInfo?.lastName}/>
          </div>
          <div className=" col-span-2">
            <label htmlFor="" className="text-sm">
              Job title
            </label>
            <Input name="jobTitle" required onChange={handleInputChange} defaultValue={resumeInfo?.jobTitle}/>
          </div>
          <div className=" col-span-2">
            <label htmlFor="" className="text-sm">
              Address
            </label>
            <Input name="address" required onChange={handleInputChange} defaultValue={resumeInfo?.address} />
          </div>
          <div>
            <label htmlFor="" className="text-sm">
              Phone
            </label>
            <Input name="phone" required onChange={handleInputChange} defaultValue={resumeInfo?.phone} type="number" />
          </div>
          <div>
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <Input
              name="email"
              required
              type="email"
              onChange={handleInputChange}
              defaultValue={resumeInfo?.email}
            />
          </div>
        </div>
        <div className="flex mt-3 justify-end">
          <Button type="submit" disabled={Loading}>
            {Loading ? <LoaderCircle  className="animate-spin"/> : "save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
