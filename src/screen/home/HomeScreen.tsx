import { Button, Popover, Text, View } from 'native-base'
import React from 'react'

const HomeScreen = ():JSX.Element => {
  return (
    <View>
      <Text>HomeScreen</Text>
   <Popover
    trigger={(triggerProps) => {
    return <Button {...triggerProps} >Trigger Popver</Button>
    }}
    
   >
    <Popover.Content >
      <Popover.Arrow  />
      <Popover.Header >
        Confirmation
      </Popover.Header>
      <Popover.Body borderTopWidth="0" >
        Are you sure you want to continue with your action?
      </Popover.Body>
      <Popover.Footer borderTopWidth="0" >
        <Button.Group>
          <Button bg="red.500" _pressed={{ bg: "red.700" }} _text={{ color: "white" }}>Yes</Button>
          <Button bg="lightWhite" _pressed={{ bg: "gray.400" }}>No</Button>
        </Button.Group>
      </Popover.Footer>
    </Popover.Content>
   </Popover>
   
    </View>
  )
}

export default HomeScreen
