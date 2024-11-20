import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Loader2Icon, Notebook } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import GlobalApi from "../../../service/GlobalApi";
import { toast } from "sonner";

export const ResumeCartItem = ({ resume, refreshData }) => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const deleteResumeHandler = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        toast("Resume Deleted!");
        refreshData();
        setLoading(false);
        setOpenDeleteAlert(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  return (
    <div
      className="transition-all
      
      hover:scale-105  cursor-pointer"
    >
      <div
        className="flex items-center hover:shadow-md justify-center 
        bg-secondary px-6 ml-3  py-16 sm:py-24 border  rounded-t-lg max-h-[280px] "
        style={{borderColor:resume.themeColor}}
      >
        <Notebook />
      </div>
      <div className="flex justify-between p-2 items-center rounded-b-lg  ml-3 mb-3  border transition-all">
        <h2 className="text-center whitespace-nowrap text-ellipsis overflow-hidden">
          {resume.titleResume}
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <DotsVerticalIcon className="hover:bg-secondary rounded-xl p-1 w-6 h-6 transition-all" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{resume.firstName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                navigate(`/dashboard/resume/${resume.documentId}/edit`)
              }
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigate(`/my-resume/${resume.documentId}/view`)}
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog open={openDeleteAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenDeleteAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteResumeHandler();
                }}
                disabled={loading}
              >
                {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}{" "}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
