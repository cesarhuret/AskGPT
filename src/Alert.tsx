import { AlertDialog, AlertDialogBody, AlertDialogContent, useDisclosure } from "@chakra-ui/react"
import * as React from "react"

export const AlertPopup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef<any>()
  
    React.useEffect(() => {
        onOpen()
    }, [])

    return (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          autoFocus={false}
          size="sm"
        >
            <AlertDialogContent>
                <AlertDialogBody
                    bgColor={'#1a202c'}
                >
                    ChatGPT is currently on high demand, it is normal if the response is slow or returns an error. 
                </AlertDialogBody>
            </AlertDialogContent>
        </AlertDialog>
    )
  }
