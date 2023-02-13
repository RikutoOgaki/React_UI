import { Box, Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const chakra = () => {
        const [btn,setBtn] = useState("blue");
    const botton = ()=>{
            console.log("blue");
            setBtn("red");
    }

  return (
    <Box>
        <Box w="100vw" h={"100px"} bgColor={"tomato"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <h1>こんにちは</h1>
        </Box>
        <Flex w={"100vw"} h={"100px"} bgColor={"aqua"} justifyContent={"center"} alignItems={"center"}>
            <h1>こんにちは</h1>
        </Flex>
        <Center as='button' w={"200px"} h={"100px"} bgColor={btn} boxShadow={"1px 2px 5px #000"} color={"#fff"}
        onClick={botton}>
            <h1>こんにちは</h1>
        </Center>
        <Box>
            <Box as='button' w={"300px"} height={"60px"} bgColor={"black"} color={"#fff"}>こんにちは</Box>
        </Box>
    </Box>
  )
}

export default chakra