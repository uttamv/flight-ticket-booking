import React from "react";
import { Formik, Field, Form } from 'formik';
import {
  Modal,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function UserSignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  return (
    <>
      <Button onClick={onOpen} mx={5} mt={10}>Sign In</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User SignIn</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                email: '',
                password:''
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  if(values.email === 'admin@gmail.com' && values.password === 'admin'){
                    navigate('/admin')
                    
                  }else{
                    navigate('/user')
                 
                  }
                  actions.setSubmitting(false)
                  onClose()
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name='email' >
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>First name</FormLabel>
                        <Input {...field} placeholder='email' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='password' >
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Password</FormLabel>
                        <Input {...field} placeholder='password' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <ModalFooter>
                    <Button colorScheme="blue" m={2} onClick={onClose}>
                      Close
                    </Button>
                    <Button
                      m={2}
                      colorScheme='teal'
                      isLoading={props.isSubmitting}
                      type='submit'
                    >
                      Submit
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
