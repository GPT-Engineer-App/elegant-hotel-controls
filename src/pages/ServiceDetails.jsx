import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <Box>
      <Text fontSize="xl">Service Details for: {serviceId}</Text>
      {}
    </Box>
  );
};

export default ServiceDetails;
