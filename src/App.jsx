import { Flex, Box, UnorderedList, ListItem, Heading, Switch,  FormLabel, Input, Container, Textarea, Text , FormControl, Select, Button ,Divider, Image , Link   } from "@chakra-ui/react"
import { AddIcon, DeleteIcon, CloseIcon , ArrowUpIcon} from '@chakra-ui/icons'




const App = () => {
  return ( 
    <>
        <Container as='main' display="flex" maxW="1500px" bg='white' m="auto" p='12px' flexWrap='wrap'>
            <Box width='100%' p='12px' display='flex' justifyContent='space-between'>
                <Heading as='h1' fontSize='1.5em' >Add a new application</Heading>
                <CloseIcon _hover={{ color:'rgba(0, 90, 246, 0.719)', cursor:'pointer' }}/>
            </Box>
            
            <Container maxW="25%">
                <UnorderedList maxW='100%'  mt='5px' ml='0' display='flex' flexDirection='column' gap='15px' listStyleType="none" color='rgba(0, 90, 246, 0.719)' >
                    <ListItem p='10px 20px 10px 20px' bgColor='rgba(130, 199, 255, 0.646)' borderRadius='10px' color='black' >
                        <Link _hover={{ textDecoration:'none'}} href="#application-id">Application ID</Link>
                    </ListItem>
                    <ListItem p='10px 20px 10px 20px'>
                        <Link _hover={{ textDecoration:'none'}} href="#application-roles">Application Roles</Link>
                    </ListItem>
                    <ListItem p='10px 20px 10px 20px'>
                        <Link _hover={{ textDecoration:'none'}} href="#application-rule1">Access Rule #1</Link>
                    </ListItem>
                    <ListItem p='10px 20px 10px 20px'>
                        <Link _hover={{ textDecoration:'none'}} href="#application-rule2">Access Rule #2</Link>
                    </ListItem>
                    <ListItem display='flex' alignItems='center'  border='2px dashed' borderColor='rgba(130, 199, 255, 0.646)' borderRadius='10px'  >
                        <Input _hover={{cursor: "pointer" }} placeholder="Add New Access Rule" border="none" _placeholder={{ color: "rgba(0, 90, 246, 0.719)" }} p='10px 20px 10px 20px' />
                        <AddIcon _hover={{ color: "gray", cursor: "pointer" }} mr='15px' />
                    </ListItem>
                </UnorderedList>
            </Container>

            

            <Container maxW="75%" > 

                {/* Application ID */}

                <Container maxW='100%' mt='15px' id="application-id">
                        <Heading as='h2' fontSize='1.2em'>Application ID</Heading>
                        <Text mt='20px'>Please provide the required information to add a new app to the App Catalogue</Text>
                    <Flex maxW='100%'>
                        <FormControl maxW='32.5%' mr='40px'>
                          <Box display="flex" justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Application Name</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                          <Box  display="flex" gap='15px' mt='20px' alignItems='center'>
                              <FormLabel htmlFor="">This is a public application</FormLabel>
                              <Switch name='public-app'/>
                              <FormLabel htmlFor="public-app"> No</FormLabel>
                          </Box>
                          <Box display='flex' justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Application Description</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Textarea  name="" id=""  rows="5" border='1px'  borderColor='gray' borderRadius='5px'></Textarea >
                          <Box display='flex' justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Application Requester</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                          <Box display='flex' justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Application Owner</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                          <Box display='flex' justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Application Code</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                          <Box display='flex' justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Application Uri</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                          <Box display='flex' justifyContent='space-between' mt='20px'>
                              <FormLabel htmlFor="">Tags</FormLabel>
                              <FormLabel htmlFor="">*Required</FormLabel>
                          </Box>
                          <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                        </FormControl>
                        <FormControl maxW='32.5%'>
                            <Box display='flex' justifyContent='space-between' mt='20px'> 
                                <FormLabel htmlFor="">Application Logo</FormLabel>
                                <FormLabel htmlFor="">*Required</FormLabel>
                            </Box>
                            <Image src='/drag-drop.png' alt='Dan Abramov' borderRadius='15px'/>
                            <Button w='100%' mt='5px' color='rgba(0, 90, 246, 0.719)' bg='white' borderColor='rgba(0, 90, 246, 0.719)' borderRadius='15px'>
                                Upload file <ArrowUpIcon/>
                            </Button>
                        </FormControl>
                    </Flex>
                  
                </Container>

                 {/* Application Approvers */}


                <Container maxW='100%' mt='40px' >
                    <Heading as='h2' fontSize='1.2em'>Applicaction Approvers</Heading>
                        <Box display='flex' width='100%'>
                            <FormControl maxW='32.5%' mr='40px'>
                                <Box display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel htmlFor="">Global Approver Full Name</FormLabel>
                                    <FormLabel htmlFor="">*Required</FormLabel>
                                </Box>
                                <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                            </FormControl>
                            <FormControl maxW='32.5%' >
                                <Box display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel htmlFor="">Global Approver GPID</FormLabel>
                                    <FormLabel htmlFor="">*Required</FormLabel>
                                </Box>
                                <Input type="text" border='1px'  borderColor='gray' borderRadius='5px'/>
                            </FormControl>
                        </Box>
                        <Box maxW='32.5%' mr='40px' display="flex" justifyContent='space-between' mt='20px'  border='2px dashed' borderColor='rgba(130, 199, 255, 0.646)' borderRadius='10px'  alignItems='center' color='rgba(0, 90, 246, 0.719)' > 
                            <Input _hover={{cursor: "pointer" }} placeholder="Add New Global Approver" border="none" _placeholder={{color:'rgba(0, 90, 246, 0.719)'}} />
                            <AddIcon _hover={{ color:'gray', cursor:'pointer' }} mr='15px'/>
                        </Box>
                </Container>

                <Divider  mt='20px'/>

                {/* Application Roles */}

                <Container maxW='100%'  mt='20px' id="application-roles">
                        <Heading as='h2' fontSize='1.2em'>Applicaction Roles</Heading>
                        <Text mt='15px'>Please provide the required
                            information to defines Roles and permissions for this app
                        </Text>
                    <FormControl maxW='32.5%' mr='40px'>
                        <Box className="section-div">
                            <Box display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel htmlFor="">Type of Roles</FormLabel>
                                <FormLabel htmlFor="">*Required</FormLabel>
                            </Box>
                            <Input type="text" placeholder="Type Type of Role" border='1px'  borderColor='gray' borderRadius='5px'/>
                        </Box>
                        <Box display="flex" justifyContent='space-between' mt='20px' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                            <Input placeholder="Executive" border="none"  />
                            <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                        </Box>

                        <Box display="flex" justifyContent='space-between' mt='20px' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                            <Input placeholder="Regular" border="none"  />
                            <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                        </Box>
                        <Box display="flex" justifyContent='space-between' mt='20px'  border='2px dashed' borderColor='rgba(130, 199, 255, 0.646)' borderRadius='10px' alignItems='center' color='rgba(0, 90, 246, 0.719)'>
                            <Input _hover={{cursor: "pointer" }} placeholder="Add New Role" border="none" _placeholder={{color:'rgba(0, 90, 246, 0.719)'}} />
                            <AddIcon _hover={{ color:'gray', cursor:'pointer' }} mr='15px' />
                        </Box>
                    </FormControl>
                </Container>

                <Divider  mt='20px'/>

                {/* Application Rule #1 */}

                <Container maxW='100%' mt='20px' mb='40px' id="application-rule1">
                        <Box display='flex'  mt='20px' gap='15px' alignItems='center'> 
                            <Heading as='h2' fontSize='1.2em'>Applicaction Rule #1</Heading>
                            <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)'/>
                        </Box>
                        
                        <Text mt='15px'>Please provide the required
                            information to add an Access Room to your application
                        </Text>
                    <FormControl maxW='32.5%' >
                        <Box display="flex" justifyContent='space-between' mt='20px'>
                            <FormLabel htmlFor="">Variable Name</FormLabel>
                            <FormLabel htmlFor="">*Required</FormLabel>
                        </Box>
                        <Input type="text" placeholder="Product" border='1px'  borderColor='gray' borderRadius='5px'/>
                        <Box display="flex"  gap='15px' mt='20px' alignItems='center'>
                            <FormLabel >Allow multiple selection</FormLabel>
                            <Switch name='mult-sel'/>
                            <FormLabel htmlFor="mult-sel">No</FormLabel>
                        </Box>
                    </FormControl>

                    <Heading as='h3' fontSize='1em' mt='20px'>Items</Heading>

                    <Container maxW='100%' mt='15px' p='0' display='flex' >
                        <FormControl maxW='32.5%' mr='40px'>
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px' >
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            
                            <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                <Input placeholder="B2B" border="none"  />
                                <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                            </Box>
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                <Input placeholder="GS" border="none"  />
                                <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                            </Box>
                            
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                <Input placeholder="R360" border="none"  />
                                <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                            </Box>
                        
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Select placeholder='Type Item Display name' border='1px'  borderColor='gray' borderRadius='5px'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        
                            <Box display="flex" justifyContent='space-between' mt='20px'  border='2px dashed' borderColor='rgba(130, 199, 255, 0.646)' borderRadius='10px' alignItems='center' color='rgba(0, 90, 246, 0.719)'>
                                <Input _hover={{cursor: "pointer" }} placeholder="Add New Item" border="none" _placeholder={{color:'rgba(0, 90, 246, 0.719)'}} />
                                <AddIcon _hover={{ color:'gray', cursor:'pointer' }} mr='15px'/>
                            </Box>
                        </FormControl>
                        <FormControl maxW='32.5%' mr='40px'>
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                    <Input placeholder="B2B" border="none"  />
                                    <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                                </Box>
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                    <Input placeholder="GS" border="none"  />
                                    <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                                </Box>
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                    <Input placeholder="R360" border="none"  />
                                    <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                                </Box>
                            <FormControl >
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Select placeholder='Type Internal Key Reference Value' border='1px'  borderColor='gray' borderRadius='5px'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </FormControl>
                        </FormControl>
                    </Container>
                </Container>

                {/* Application Rule #2 */}

                <Container maxW='100%' mt='20px' mb='40px' id="application-rule2">
                        <Box display='flex'  mt='20px' gap='15px' alignItems='center'> 
                            <Heading as='h2' fontSize='1.2em'>Applicaction Rule #2</Heading>
                            <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)'/>
                        </Box>
                        
                        <Text mt='15px'>Please provide the required
                            information to add an Access Room to your application
                        </Text>
                    <FormControl maxW='32.5%' >
                        <Box display="flex" justifyContent='space-between' mt='20px'>
                            <FormLabel htmlFor="">Variable Name</FormLabel>
                            <FormLabel htmlFor="">*Required</FormLabel>
                        </Box>
                        <Input type="text" placeholder="Region" border='1px'  borderColor='gray' borderRadius='5px'/>
                        <Box display="flex"  gap='15px' mt='20px' alignItems='center'>
                            <FormLabel >Allow multiple selection</FormLabel>
                            <Switch name='mult-sel'/>
                            <FormLabel htmlFor="mult-sel">No</FormLabel>
                        </Box>
                    </FormControl>

                    <Heading as='h3' fontSize='1em' mt='20px'>Items</Heading>

                    <Container maxW='100%' mt='15px' p='0' display='flex' >
                        <FormControl maxW='32.5%' mr='40px'>
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                <Input placeholder="LATAM" border="none"  />
                                <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                            </Box>
                            
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                <Input placeholder="ESSA" border="none"  />
                                <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                            </Box>
                            
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                <Input placeholder="PFNA" border="none"  />
                                <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                            </Box>
                        
                            <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                <FormLabel>Item Display name</FormLabel>
                                <FormLabel>*Required</FormLabel>
                            </Box>
                            <Select placeholder='Type Item Display name' border='1px'  borderColor='gray' borderRadius='5px'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        
                            <Box display="flex" justifyContent='space-between' mt='20px'  border='2px dashed' borderColor='rgba(130, 199, 255, 0.646)' borderRadius='10px' alignItems='center' color='rgba(0, 90, 246, 0.719)' >
                                <Input _hover={{cursor: "pointer" }} placeholder="Add New Item" border="none" _placeholder={{color:'rgba(0, 90, 246, 0.719)'}} />
                                <AddIcon _hover={{ color:'gray', cursor:'pointer' }} mr='15px'/>
                            </Box>
                        </FormControl>
                        <FormControl maxW='32.5%' mr='40px'>
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                    <Input placeholder="LATAM" border="none"  />
                                    <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                                </Box>
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                    <Input placeholder="ESSA" border="none"  />
                                    <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                                </Box>
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Box display="flex" justifyContent='space-between' border='1px'  borderColor='gray' borderRadius='5px'  alignItems='center'>
                                    <Input placeholder="PFNA" border="none"  />
                                    <DeleteIcon _hover={{ color:'gray', cursor:'pointer' }} color='rgba(0, 90, 246, 0.719)' mr='15px'/>
                                </Box>
                            <FormControl >
                                <Box component="header" display="flex" justifyContent='space-between' mt='20px'>
                                    <FormLabel>Internal Key Reference Value</FormLabel>
                                    <FormLabel>*Required</FormLabel>
                                </Box>
                                <Select placeholder='Type Internal Key Reference Value' border='1px'  borderColor='gray' borderRadius='5px'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                            </FormControl>
                        </FormControl>
                    </Container>
                </Container>
            </Container>

            <Divider  mt='10px'/>

            {/* Footer */}  

            <Box width='100%' mt='20px' display='flex' justifyContent='flex-end' p='12px' gap='20px'>
                <Button backgroundColor='white' color='rgba(0, 90, 246, 0.719)' borderRadius='15px' borderColor='rgba(0, 90, 246, 0.719)'>Cancel</Button>
                <Button backgroundColor='rgba(0, 90, 246, 0.719)' color='white' borderRadius='15px'>Save</Button>
            </Box>
        </Container>
    </>
   );
}
 
export default App;
