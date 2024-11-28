import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "../../../../context/resumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { AIChatSession } from "../../../../../service/AiModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const prompt =
  " Job titile: {jobTitle} , Depends on job title and {level of ecperience} give me 5-7 line for my experience in resume (Please do not add experince level and No JSON array) , give me result in text and dont use of Ditto mark and any double quotation give me it like a normal text and paragraph"; // const prompt =
const Summary = ({ setnextButton }) => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  const [summery, setsummery] = useState();
  const [Loading, setLoading] = useState();
  const [experienceLevel, setexperienceLevel] = useState();
  const [openDialog, setopenDialog] = useState(false);
  const params = useParams();
  useEffect(() => {
    // setnextButton(false);
    summery && setresumeInfo({ ...resumeInfo, summery: summery });
  }, [summery]);
  const GenerateSummaryFromAi = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle).replace("{level of ecperience}",experienceLevel);
    const result = await AIChatSession.sendMessage(PROMPT);
    const resp = result.response.text();
    const finalResult = resp
      .replace("[", "")
      .replace("]", "")
      .replace("{", "")
      .replace("}", "");
    setsummery(finalResult);
    setLoading(false);
  };
  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setnextButton(true);

    const data = {
      data: {
        summery: summery,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeid, data)
      .then((resp) => {
        setnextButton(true);
        console.log(resp);
        setLoading(false);
        toast("summery Updated.");
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summery</h2>
        <p>Add Summery for your job title</p>
        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between flex-col xs:flex-row xs:items-end gap-y-1">
            <label>Add Summery</label>
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
              onClick={() => setopenDialog(true)}
            >
              <Brain className="h-4 w-4" />
              Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            onChange={(e) => setsummery(e.target.value)}
            value={summery}
            defaultValue={resumeInfo?.summery}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={Loading}>
              {Loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <span>what is your level of experience?</span>
              <span className="block border border-black my-1"></span>
              <div className="flex flex-col">
                <div className="flex items-center text-center  text-black gap-x-1 mt-3">
                  <input
                    type="radio"
                    name="level"
                    id="junior"
                    onChange={() => setexperienceLevel("junior")}
                    className="mt-1"
                  />
                  <label htmlFor="junior">junior</label>
                </div>
                <div className="flex items-center text-center text-black gap-x-1 mt-3">
                  <input
                    type="radio"
                    name="level"
                    id="mid level"
                    onChange={() => setexperienceLevel("mid level")}
                    className="mt-1"
                  />
                  <label htmlFor="mid level">mid level</label>
                </div>
                <div className="flex items-center text-center text-black gap-x-1 mt-3">
                  <input
                    type="radio"
                    name="level"
                    id="senior"
                    onChange={() => setexperienceLevel("senior")}
                    className="mt-1"
                  />
                  <label htmlFor="senior">senior</label>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-x-4">
            <Button onClick={() => {GenerateSummaryFromAi(),setopenDialog(false)}}>Generate </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Summary;
