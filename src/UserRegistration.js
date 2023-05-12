import React, { useState } from "react";
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

export default function UserRegistration() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState([])

function validateName(name) {
if(name){
  return true
}
return false
  }

  return (
    <>
      <Button onClick={onOpen} mx={5} mt={10}>Sign Up</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Registration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  setUser([...user, {'first Name':values.firstName,'Last name': values.lastName, 'email': values.email, 'password':values.password}])
                  alert('User Account Created')
                  actions.setSubmitting(false)
                  onClose()
                }, 1000)
              }}
            >
              {(props) => (
                <Form>
                  <Field name='firstName' validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>First name</FormLabel>
                        <Input {...field} placeholder='first name' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='lastName' validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>First name</FormLabel>
                        <Input {...field} placeholder='last name' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='email' validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>First name</FormLabel>
                        <Input {...field} placeholder='email' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='password' validate={validateName}>
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
