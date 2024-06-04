'use client'
import { TextField, Button, Grid, Card, CardContent, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { useRef } from "react";
import { handleSubmitContactFormServerAction } from "@/app/_actions";

const ContactForm = () => {
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
      handleSubmitContactFormServerAction(formData)
      ref.current?.reset()
      toast.success("Your information has been submitted. We'll be in touch!")
    }
    

  return (
    <Card variant="outlined" sx={{width: 400, mx: "auto", mt: 4}}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>Contact Us</Typography>
        <form action={handleSubmit} ref={ref}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <TextField id="name" name="name" label="Name (Optional)" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="email" name="email" label="Email (Required)" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="comment" name="comment" label="Comment (Required)" fullWidth required />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="submit" variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
        </CardContent>
        </Card>
    )
};

export default ContactForm;