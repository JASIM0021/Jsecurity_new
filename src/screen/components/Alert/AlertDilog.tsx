import { AlertDialog, Button, Center } from "native-base";
import React, { memo } from "react";

const CustomAlertDialog = ({isOpen,setIsOpen,header,body,onOkey}) => {
  
    const onClose = () => setIsOpen(false);
  
    const cancelRef = React.useRef(null);
    return <Center>
       
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>{header}</AlertDialog.Header>
            <AlertDialog.Body>
              {body}
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                  Cancel
                </Button>
                <Button colorScheme="danger" onPress={onOkey}>
                  Okey
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>;
  };


  export default memo(CustomAlertDialog)