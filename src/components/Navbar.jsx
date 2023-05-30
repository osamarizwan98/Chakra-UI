import React from 'react'
import { Flex, Heading, Box, Spacer, HStack, Text, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
        <Heading as="h1" fontSize="1.5em">Task</Heading>
        <Spacer />
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px 15px" borderRadius="50%">M</Box>
            <Text>osamadevmont@gmail.com</Text>
            <Button colorScheme='blue'>Logout</Button>
        </HStack>
    </Flex>

    {/* <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2px">
        <Box w="150px" h="150px" bg="red">1</Box>
        <Box w="150px" h="150px" flexGrow="1" bg="blue">2</Box>
        <Box w="150px" h="150px" flexGrow="1" bg="green">3</Box>
        <Box w="150px" h="150px" flexGrow="2" bg="yellow">4</Box>
    </Flex> */}
    </>
  )
}

export default Navbar