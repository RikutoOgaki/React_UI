import { Box, Center, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const chakra = () => {
        const [btn,setBtn] = useState("100px");
    const botton = ()=>{
        console.log("blue");
        setBtn("200px");
    }

  return (
    <Box>
        <Box w="100vw" h={"100px"} bgColor={"tomato"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <h1>こんにちは</h1>
        </Box>
        <Flex w={"100vw"} h={"100px"} bgColor={"aqua"} justifyContent={"center"} alignItems={"center"}>
            <h1>こんにちは</h1>
        </Flex>
        <Center as='button' w={btn} h={"100px"} bgColor={"blue"} boxShadow={"1px 2px 5px #000"} color={"#fff"}
        onClick={botton}>
            <h1>こんにちは</h1>
        </Center>
    </Box>
  )
}

export default chakra