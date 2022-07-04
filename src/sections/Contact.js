/** @jsx jsx */
import React, { useState, useRef } from "react";
import { sendContactForm } from "../../services/index.js";
import { jsx, Container, Box, Image, Textarea, Input, Button, Label, Form } from 'theme-ui';


const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable inquiry!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (
    <section sx={{ variant: 'section.Contact' }} id="Contact">

      <Box sx={styles.containerBox} >
        <Label>
          {"Contact Jean"}
        </Label>
        <div>
          <div>
            {message}
            <span
              onClick={() => setMessage("")}
            >
              &times;
            </span>
          </div>
          <form  sx={{px: 3, py: 4, mb:3}}
            ref={formRef}
            onSubmit={submitContact}
          >
            <Input sx={{px: 3, py: 4, mb:3}}
              required
              placeholder="Name"
              type={"text"}
              minLength={3}
              maxLength={25}
            />
            <Input sx={{px: 3, py: 4, mb:3}}
              required
              placeholder="Email Address"
              type={"email"}
            />
            <Textarea sx={{px: 3, py: 4, mb:3}}
              required
              placeholder="Comment"
              rows={5}
              >              
              </Textarea>
              <br></br>
            <Button type="submit" >
              Send
            </Button>
          </form>
        </div>
      </Box>
      </section>
  );
};

export default Contact;


const styles = {
  
    form: {
      label: {
        fontSize: 1,
        fontWeight: 'bold',
        paddingLeft:'60px',

      },
      input: {
        borderColor: 'blue',
        '&:focus': {
          borderColor: 'primary',
          boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
          outline: 'none',
        },
      },
      select: {
        borderColor: 'gray',
        '&:focus': {
          borderColor: 'primary',
          boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
          outline: 'none',
        },
      },
      textarea: {
        borderColor: 'gray',
        '&:focus': {
          borderColor: 'primary',
          boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
          outline: 'none',
          
          fontSize: 5,
        },
        button: {
          marginTop: 2,
        }
      },
      slider: {
        bg: 'muted',
      },
      containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 7],
        px: 3,
      },
    },
  }

