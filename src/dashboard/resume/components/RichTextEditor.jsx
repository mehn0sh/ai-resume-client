import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { toast } from "sonner";
import { AIChatSession } from "../../../../service/AiModel";
import { Button } from "../../../components/ui/button";
import { ResumeInfoContext } from "../../../context/resumeInfoContext";

const PROMPT =
  "position titile: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume (Please do not add experince level and No JSON array) , give me result in HTML tags";
const RichTextEditor = ({ onRichTextEditorChange, index, defaultValue }) => {
  const [value, setvalue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext);

  const generateExperienceSummaryFromAi = async () => {
    if (!resumeInfo?.Experience[index]?.title) {
      toast("Please Add Position Title");
      return;
    }
    setLoading(true);
    const prompt = PROMPT.replace(
      "{positionTitle}",
      resumeInfo.Experience[index].title
    );
    const result = await AIChatSession.sendMessage(prompt);
    const resp = result.response.text();
    const finalResul = resp
      .replace("[", "")
      .replace("]", "")
      .replace("{", "")
      .replace("}", "");
    setvalue(finalResul);
    setLoading(false);
  };
  return (
    <div>
      <div className="flex justify-between my-4 flex-col md:flex-row">
        <label>summary of your experience</label>
        <Button
          className="flex gap-2"
          onClick={generateExperienceSummaryFromAi}
          variant="outline"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
