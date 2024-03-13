import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, Center, useColorModeValue, useDisclosure, ScaleFade, useTheme } from "@chakra-ui/react";
import { FaConciergeBell, FaUtensils, FaSpa, FaTaxi, FaCalendarAlt, FaPhone } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Index = () => {
  const cardBackgroundColor = useColorModeValue("gray.100", "gray.700");

  const ServiceCard = ({ icon, title, description, delay }) => {
    const { isOpen, onToggle } = useDisclosure();

    useEffect(() => {
      const timeoutId = setTimeout(onToggle, delay);
      return () => clearTimeout(timeoutId);
    }, [delay, onToggle]);

    return (
      <ScaleFade initialScale={0.9} in={isOpen}>
        <VStack p={5} bg={cardBackgroundColor} boxShadow="md" rounded="md" align="start" spacing={3}>
          <Box fontSize="3xl" color="teal.500">
            {icon}
          </Box>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Button colorScheme="teal" variant="outline">
            Contact
          </Button>
        </VStack>
      </ScaleFade>
    );
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Center mb={10}>
        <VStack>
          <Heading as="h1" size="xl">
            Hotel Guest Dashboard
          </Heading>
          <Text fontSize="lg" color="gray.500">
            All services at your fingertips.
          </Text>
        </VStack>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <ServiceCard icon={<FaConciergeBell />} title="Housekeeping" description="Need your room cleaned or extra amenities?" delay={100} />
        <ServiceCard icon={<FaPhone />} title="Contact Lobby" description="Questions or special requests? We're here to help." delay={200} />
        <ServiceCard icon={<FaUtensils />} title="Restaurant Service" description="Explore our menu and order directly to your room." delay={300} />
        <ServiceCard icon={<FaSpa />} title="Spa Services" description="Book a relaxing treatment from our wellness selection." delay={400} />
        <ServiceCard icon={<FaCalendarAlt />} title="Book an Activity" description="Discover and reserve exciting local activities." delay={500} />
        <ServiceCard icon={<FaCalendarAlt />} title="Events Schedule" description="Stay updated with the hotel's events and activities." delay={600} />
        <ServiceCard icon={<FaTaxi />} title="Transportation" description="Need a ride? Let us arrange your transportation." delay={700} />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
