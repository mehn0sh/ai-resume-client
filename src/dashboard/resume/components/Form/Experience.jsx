import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import GlobalApi from "../../../../../service/GlobalApi";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ResumeInfoContext } from "../../../../context/resumeInfoContext";
import RichTextEditor from "../RichTextEditor";

const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};
const Experience = () => {
  const [experinceList, setExperinceList] = useState([]);
  const [loading, setLoading] = useState();
  const params = useParams();
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  const handleChange = (index, event) => {
    const newEntries = [...experinceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperinceList(newEntries);
  };
  useEffect(() => {
    console.log(resumeInfo?.Experience  , experinceList);
    resumeInfo && setExperinceList(resumeInfo?.Experience );
  }, []);
  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        Experience: experinceList.map(({ id, ...rest }) => rest),
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeid, data).then(
      (res) => {
        setLoading(false);
        toast("Details updated !");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const addNewExperience = () => {
    setExperinceList([
      ...experinceList,
      {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        workSummery: "",
      },
    ]);
  };
  const RemoveExperience = () => {
    setExperinceList((experinceList) => experinceList.slice(0, -1));
  };
  const handleRichTextEditor = (e, name, index) => {
    const newEntries = [...experinceList];
    newEntries[index][name] = e.target.value;
    setExperinceList(newEntries);
  };
  useEffect(() => {
    setresumeInfo({
      ...resumeInfo,
      Experience: experinceList,
    });
  }, [experinceList]);
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
          {experinceList?.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg"
              >
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.title}
                  />
                </div>
                <div>
                  <label className="text-[10px] xs:text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.companyName}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.city}
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.state}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.startDate}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event) => handleChange(index, event)}
                    defaultValue={item?.endDate}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    index={index}
                    defaultValue={item?.workSummery}
                    onRichTextEditorChange={(event) =>
                      handleRichTextEditor(event, "workSummery", index)
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-between lg:flex-row gap-y-3 ">
          <div className="flex gap-2 flex-col lg:flex-row">
            <Button variant="outline" onClick={addNewExperience}>
              + Add More Experience
            </Button>
            <Button variant="outline" onClick={RemoveExperience}>
              - Remove Experience
            </Button>
          </div>
          <Button disabled={loading} onClick={() => onSave()}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Experience;
