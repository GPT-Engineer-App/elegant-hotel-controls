import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <VStack spacing={4} align="stretch">
      <BackButton />
      <Box p={5}>
        <Text fontSize="2xl" mb={5}>
          Service Details for: {serviceId}
        </Text>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={5}>
          {}
          <Button height="100px" width="100px">
            Option 1
          </Button>
          <Button height="100px" width="100px">
            Option 2
          </Button>
          <Button height="100px" width="100px">
            Option 3
          </Button>
          <Button height="100px" width="100px">
            Option 4
          </Button>
          <Button height="100px" width="100px">
            Option 5
          </Button>
          <Button height="100px" width="100px">
            Option 6
          </Button>
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default ServiceDetails;
