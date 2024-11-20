import React from "react";
import PersonalDetail from "./Form/PersonalDetail";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Summary from "./Form/Summary";
import Experience from "./Form/Experience";
import Education from "./Form/Education";
import Skills from "./Form/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "./Form/ThemeColor";
const FormSection = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [nextButton, setnextButton] = useState(false);
  const { resumeid } = useParams();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-x-3">
          <Button>
            <Link to={"/dashboard"}>
              <Home />
            </Link>
          </Button>
          <ThemeColor />
        </div>

        <div className="flex gap-3">
          {activeButton > 1 && (
            <Button
              size="sm"
              className="flex gap-2"
              onClick={() => setActiveButton(activeButton - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          {activeButton < 5 ? (
            <Button
              size="sm"
              className="flex gap-2"
              disabled={!nextButton}
              onClick={() => setActiveButton(activeButton + 1)}
            >
              Next
              <ArrowRight />
            </Button>
          ) : (
            <Button
              size="sm"
              className="flex gap-2"
              onClick={() => setActiveButton(activeButton + 1)}
            >
              View
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
      {activeButton == 1 ? (
        <PersonalDetail setnextButton={setnextButton} />
      ) : activeButton == 2 ? (
        <Summary setnextButton={setnextButton} />
      ) : activeButton == 3 ? (
        <Experience />
      ) : activeButton == 4 ? (
        <Education />
      ) : activeButton == 5 ? (
        <Skills />
      ) : (
        <Navigate to={`/my-resume/${resumeid}/view`} />
      )}
    </div>
  );
};

export default FormSection;
