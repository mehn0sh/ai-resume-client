import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { LoaderCircle } from "lucide-react";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import GlobalApi from "../../../../../service/GlobalApi";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ResumeInfoContext } from "../../../../context/resumeInfoContext";

const Skills = () => {
  const [skillList, setSkillList] = useState([
    {
      name: "",
      rating: null,
    },
  ]);
  const { resumeid } = useParams();
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState();


  const handleChange = (index, name, value) => {
    const newEntries = [...skillList];
    newEntries[index][name] = value;
    setSkillList(newEntries);
  };
  const AddNewSkills = () => {
    setSkillList([...skillList, { name: "", rating: 0 }]);
  };
  const RemoveSkills = () => {
    setSkillList((skillList) => skillList.slice(0, -1));
  };
  useEffect(() => {
    setresumeInfo({ ...resumeInfo, skills: skillList });
  }, [skillList]);
  useEffect(()=>{
    resumeInfo&&setSkillList(resumeInfo?.skills)
  },[])
  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skillList.map(({ id, ...rest }) => rest)
      },
    };
    GlobalApi.UpdateResumeDetail(resumeid, data).then(
      (res) => {
        setLoading(false);
        toast("Details updated !");
      },
      (error) => {
        setLoading(false);
        console.log(error);
      }
    );
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add Your Top Skills</p>
      <div>
        {skillList?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between mb-2 border rounded-lg p-3 "
            >
              <div>
                <label className="text-xs">Name</label>
                <Input
                  className="w-full"
                  defaultValue={item.name}
                  name="name"
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </div>
              <Rating
                style={{ maxWidth: 120 }}
                value={item.rating}
                defaultValue={item.rating}
                onChange={(v) => handleChange(index, "rating", v)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            {" "}
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="text-primary"
          >
            {" "}
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default Skills;
