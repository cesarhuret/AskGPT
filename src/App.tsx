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
  Heading,
  Stack,
  Flex,
  Spacer,
  IconButton,
  Alert,
  DarkMode,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { ChevronRightIcon, ArrowUpIcon, SearchIcon } from "@chakra-ui/icons"
import theme from "./theme"
import { Chat } from "./Chat"
import { FaGithub, FaTwitter } from "react-icons/fa"

export const App = () => (
	<ChakraProvider theme={theme}>
		<DarkMode>
		<Grid minH="90vh" p={0} mx={'3'}>
			<Flex  w={'full'} alignItems={'center'} flexDirection={'row'} h={'6vh'}>
				<Text fontWeight={'bold'}>Ask ChatGPT</Text>
				<Spacer />
				<HStack>
					<Button
						as={Link}
						href='https://github.com/cesarhuret/docGPT'
						_hover={{
							bgColor: 'whiteAlpha.100',
							textDecoration: 'none',
						}}
						variant="ghost"
						color="current"
						aria-label='twitter.com/cesarhuret'
						icon={<FaTwitter />}
					>
						docGPT
					</Button>
						
					<IconButton
						as={Link}
						href='https://twitter.com/cesarhuret'
						variant="ghost"
						color="current"
						aria-label='twitter.com/cesarhuret'
						icon={<FaTwitter />}
					/>
					<IconButton
						as={Link}
						href='https://github.com/cesarhuret/AskGPT'
						variant="ghost"
						color="current"
						aria-label='github.com/cesarhuret'
						icon={<FaGithub />}
					/>
					<ColorModeSwitcher/>
				</HStack>
			</Flex>
			<Container maxH={'80vh'} maxW={'3xl'} alignContent={'center'} justifyContent={'center'}>
				<Chat/>
			</Container>
		</Grid>
		</DarkMode>
	</ChakraProvider>
)
