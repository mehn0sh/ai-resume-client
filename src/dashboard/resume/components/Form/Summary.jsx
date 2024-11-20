import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "../../../../context/resumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { AIChatSession } from "../../../../../service/AiModel";
const prompt =
  "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format send this to me only and only in JSON format. ";
const Summary = ({ setnextButton }) => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);
  const [summery, setsummery] = useState();
  const [Loading, setLoading] = useState();
  const [AIGeneratedSummaryList, setAIGeneratedSummaryList] = useState();
  const params = useParams();
  useEffect(() => {
    // setnextButton(false);
    summery && setresumeInfo({ ...resumeInfo, summery: summery });
  }, [summery]);
  const GenerateSummaryFromAi = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    console.log(resumeInfo?.jobTitle, PROMPT);
    const result = await AIChatSession.sendMessage(PROMPT);

    setAIGeneratedSummaryList(JSON.parse(result.response.text()));
    console.log(result.response.text());
    console.log(JSON.parse(result.response.text()));
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
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
              onClick={() => GenerateSummaryFromAi()}
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
      {AIGeneratedSummaryList ? (
        <div className="mt-5">
          <h2 className="font-bold text-lg">Suggestions</h2>
          {AIGeneratedSummaryList?.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
                onClick={() => setsummery(item?.summary)}
              >
                <h2 className="font-bold my-1 text-primary">
                  Level :{item?.experience_level}
                </h2>
                <p>{item?.summary}</p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Summary;
