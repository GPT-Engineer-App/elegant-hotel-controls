import React, { useState, useEffect } from "react";
import { Box, Center, Container, Progress, Text, VStack } from "@chakra-ui/react";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return Math.min(oldProgress + 12.5, 100);
      });
    }, 1000);
  }, [onFinish]);

  return (
    <Center w="100vw" h="100vh" bg="blue.500">
      <VStack spacing={8}>
        <Text fontSize="5xl" color="white" fontWeight="bold">
          Welcome to Paradise
        </Text>
        <Container position="absolute" bottom="0" p={4}>
          <Progress value={progress} size="xs" colorScheme="green" />
        </Container>
      </VStack>
    </Center>
  );
};

export default SplashScreen;
