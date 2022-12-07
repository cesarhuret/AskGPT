import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Input,
  Container,
  HStack,
  Button,
} from "@chakra-ui/react"
import { Message } from "./types"
import { TextComponent } from "./TextComponent"

export const Chat = () => {

    const [input, setInput] = React.useState('');

    const [requested, setRequested] = React.useState(false);

    const setInputHandler = (e: any) => setInput(e.target.value);

    const [messages, setMessages] = React.useState<Message[]>([]);

    const bottomRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    const askGPT = async () => {

        const tempMessages = [...messages];

        const message = input;
        setInput('');
        setRequested(true);

        tempMessages.push({text: message, type: 'user'});

        await setMessages(tempMessages)
        
        const res = await fetch('https://docgpt.kesarx.repl.co/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    'message': message
                }
            )
        })

        const text = await res.text();

        tempMessages.push({text, type: 'assistant'});

        setMessages(tempMessages)

        setRequested(false);
    };


    return (
        <VStack w="full" h="90vh">
            <Box h={'80vh'} w="full">
                <Box maxH={'100%'} overflowY={'scroll'}>
                    {
                        messages.map((message, index) => (
                            <TextComponent message={message} key={index} />
                        ))
                    }
                    <Box ref={bottomRef}/>
                </Box>
            </Box>
            <HStack h={'10vh'} w={'full'}>
                <Input value={input} placeholder={'Enter some text first'} onChange={setInputHandler}/>
                <Button onClick={askGPT} disabled={input == '' || requested}>Ask</Button>
            </HStack>
        </VStack>	
    )

}
