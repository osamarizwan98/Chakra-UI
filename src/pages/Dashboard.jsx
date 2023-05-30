import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export default function Dashboard() {
  const boxStyle = {
    p: "10px",
    bg: "purple.500",
    color: "#fff",
    m: "10px",
    textAlign: "center",
    ':hover': {
      color: "black",
      filter: "blur(2px)"
    },
  }
  return (
    // <Container as="section" maxWidth="4xl" py="20px">
    //   <Heading my="30px" p="10px">Chakar Ui Component</Heading>
    //   <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsa! Reprehenderit dolorum doloremque minus blanditiis, facere quisquam excepturi eaque. Blanditiis.</Text>
    //   <Text ml={30} color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero nisi ullam maxime. Officia consectetur dolores saepe dicta accusantium id.</Text>
    //   <Box my="30px" p="20px" bg="orange.500">
    //     <Text color="#fff">This is a box</Text>
    //   </Box>
    //   <Box sx={boxStyle}>Hello World</Box>
      
    //   <Box borderWidth={2} borderColor='purple.500' p={5} className='my-box'>
    //     <Heading size='lg'>
    //       Hover the box...
    //       <Box
    //         as='span'
    //         color='red.500'
    //         className='my-item'
    //         sx={{
    //           '.my-box:hover &': {
    //             color: 'green.500',
    //           },
    //         }}
    //       >
    //         And I will turn green!
    //       </Box>
    //     </Heading>
    //   </Box>
    // </Container>
    <SimpleGrid p="10px" column="4" spacing="10px" minChildWidth={250}>
      <Box bg="white" height={200} border="1px solid">
        {/* <Text color={{base: 'pink', md: 'blue', lg: 'green'}}>Hello</Text> */}
      </Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>

      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
      <Box bg="white" height={200} border="1px solid"></Box>
    </SimpleGrid>
  )
}
