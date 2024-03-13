import React from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button leftIcon={<FaArrowLeft />} onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};

export default BackButton;
