import React, { useState } from "react";
import { Loader, Loader2, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import CreateResume from "../../../service/GlobalApi";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const AddResume = () => {
  const [openDialog, setopenDialog] = useState(false);
  const [resumeTitle, setresumeTitle] = useState();
  const [isLoading, setisLoading] = useState();
  const navigate =useNavigate()
  const { user } = useUser();
  const onCreate = () => {
    setisLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        titleResume: resumeTitle,
        resumeID: uuid,
        userName: user?.fullName,
        UserEmail: user?.primaryEmailAddress?.emailAddress,
      },
    };
    GlobalApi.CreateResume(data).then((res) => {
      navigate(`/dashboard/resume/${res.data.data.documentId}/edit`)
   
    }).finally(()=>{
      setisLoading(false)
    });
  };
  return (
    <div>
      <div
        className="flex items-center justify-center bg-secondary px-6 ml-3 mb-3 py-16 sm:py-24 border transition-all
      
      hover:scale-105 hover:shadow-md cursor-pointer rounded-lg max-h-[280px] border-dashed"
        onClick={() => setopenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Resume</DialogTitle>
            <DialogDescription>
              <span>Enter a title for your new resume</span>

              <Input
                className="my-4"
                placeholder="Ex.Frontend resume"
                onChange={(e) => setresumeTitle(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-x-4">
            <Button variant={"ghost"} onClick={() => setopenDialog(false)}>
              Cancel
            </Button>
            <Button  disabled={!resumeTitle || isLoading} onClick={() => onCreate()}>
              {isLoading? <Loader2 className="animate-spin"/>:"create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
