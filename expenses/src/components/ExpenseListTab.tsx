import {Box, Button, HStack, Heading, Stack } from "@chakra-ui/react"

export const ExpenseListTab = () => {
  return (
    <Stack>
      <HStack justify={'space-between'}>
        <Heading as='h1'>Expenses</Heading>
        <Box>
            <Button>
                Add
            </Button>
        </Box>
        </HStack>
    </Stack>
    
  )
}

