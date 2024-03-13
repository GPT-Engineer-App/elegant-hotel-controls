import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <VStack spacing={4} align="stretch">
      <BackButton />
      <Box>
        <Text fontSize="xl">Service Details for: {serviceId}</Text>
        {}
      </Box>
    </VStack>
  );
};

export default ServiceDetails;
