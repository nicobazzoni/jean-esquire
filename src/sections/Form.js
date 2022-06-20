import { Link } from 'components/link';
import { useState } from 'react'
import { jsx } from 'theme-ui';
import { useForm } from "react-hook-form";
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
    Slider, 
    Box,
    Flex,
    Button,
    Container,
  } from 'theme-ui'

 export default function Form({src, ...rest}) { 
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [message, setMessage] = useState('')
   
   

   const handleSubmit = (e) => {
    // async request which may result error
   
    e.preventDefault()

    const form = { 
      name, 
      email,
      phone,
      message
    }
    console.log(form)

  };
  
   return (

   

    <section  id="Form">
<Container sx={styles.forms}  >
<Box as="form" onSubmit={handleSubmit}>
  <Label  htmlFor="name">Name</Label>
  <Input value={name} onChange={e => setName(e.target.value)} type="text"  name="name" id="name" mb={3} />
  <Label htmlFor="email">Email</Label>
  <Input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" mb={3} />
  <Label  htmlFor="phone">Phone number</Label>
  <Input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" mb={3} />
  <Box>
    <Label mb={3}>
      <Checkbox />
      Remember me
    </Label>
  </Box>
  
  
  <Label htmlFor="message">How Can I Help you?</Label>
  <Textarea value={message} onChange={e => setMessage(e.target.value)} name="message" id="message" rows={6} mb={3} />
 
  <Button type='submit'  > Submit</Button>
  
</Box>
</Container>
</section>
  )
}

const styles = {

  forms: {
    label: {
      fontSize: 2,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'blue',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'blue',
        boxShadow: t => `0 0 0 3px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },
}







