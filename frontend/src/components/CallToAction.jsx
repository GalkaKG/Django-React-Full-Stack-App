import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <div className="call-to-action">
      <h2>Ready to Start Learning?</h2>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/register")}>
        Sign Up Now
      </Button>
    </div>
  );
}

export default CallToAction;
