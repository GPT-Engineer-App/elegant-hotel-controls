import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, Image, Center, useColorModeValue } from "@chakra-ui/react";
import { FaConciergeBell, FaUtensils, FaSpa, FaTaxi, FaCalendarAlt, FaPhone, FaMapMarkedAlt, FaExclamationTriangle, FaCommentDots } from "react-icons/fa";

const Index = () => {
  const cardBackgroundColor = useColorModeValue("gray.100", "gray.700");

  const ServiceCard = ({ icon, title, description }) => (
    <VStack p={5} bg={cardBackgroundColor} boxShadow="md" rounded="md" align="start" spacing={3}>
      <Box fontSize="3xl" color="teal.500">
        {icon}
      </Box>
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  );

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
        <ServiceCard icon={<FaConciergeBell />} title="Housekeeping" description="Need your room cleaned or extra amenities?" />
        <ServiceCard icon={<FaPhone />} title="Contact Lobby" description="Questions or special requests? We're here to help." />
        <ServiceCard icon={<FaUtensils />} title="Restaurant Service" description="Explore our menu and order directly to your room." />
        <ServiceCard icon={<FaSpa />} title="Spa Services" description="Book a relaxing treatment from our wellness selection." />
        <ServiceCard icon={<FaCalendarAlt />} title="Book an Activity" description="Discover and reserve exciting local activities." />
        <ServiceCard icon={<FaCalendarAlt />} title="Events Schedule" description="Stay updated with the hotel's events and activities." />
        <ServiceCard icon={<FaTaxi />} title="Transportation" description="Need a ride? Let us arrange your transportation." />
        <ServiceCard icon={<FaUtensils />} title="Room Service" description="Choose from our exquisite in-room dining options." />
        <ServiceCard icon={<FaMapMarkedAlt />} title="Local Attractions" description="Discover nearby attractions and landmarks." />
        <ServiceCard icon={<FaExclamationTriangle />} title="Emergency Contacts" description="Immediate assistance for any emergency situation." />
        <ServiceCard icon={<FaCommentDots />} title="Feedback & Support" description="Share your experience or get help with any issues." />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
