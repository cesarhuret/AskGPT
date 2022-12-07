import * as React from "react"
import { CopyIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import { Message } from "./types";

export const TextComponent = ({
        message,
    }: {
        message: Message,
    }) => {
        const [hover, setHover] = React.useState(false);

        return (
            <>
                <Text px={'2'} fontSize={'xs'}>
                    {message.type === 'user' ? 'You' : 'Assistant'}
                </Text>
                <HStack
                    position={'relative'}
                    w={'full'}
                    my={'1'}
                    px={'2'}
                    py={'1'}
                    borderRadius={'md'}
                    _hover={{bg: 'blackAlpha.200'}}
                    bg={'blackAlpha.100'}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Text
                        fontSize={'lg'}
                    >
                        {message.text}
                    </Text>
                    <IconButton
                        display={hover ? 'block' : 'none'}
                        position={'absolute'}
                        right={'0'}
                        variant="ghost"
                        color="current"
                        onClick={() => navigator.clipboard.writeText(message.text)}
                        aria-label="Copy to clipboard"
                        icon={<CopyIcon/>}
                    />
                </HStack>
            </>
        )
}