'use client'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Container } from '@/components/ui/Container'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import Spinner from '@/components/ui/Spinner'
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Contact me',
}
const formSchema = z.object({
  name: z
    .string({
      errorMap: () => ({ message: 'Please provide your name' }),
    })
    .min(2)
    .max(50),
  email: z
    .string({
      errorMap: () => ({ message: 'Please provide your name' }),
    })
    .email(),
  message: z
    .string({
      errorMap: () => ({ message: 'Please provide your message' }),
    })
    .min(3)
    .max(150),
})

export default function Contact() {
  const [sending, setSending] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset()
    setSending(true)
    const response = await emailjs.send(
      'service_qxmmgg3',
      'template_anj5do5',
      {
        user_name: values.name,
        user_email: values.email,
        message: values.message,
      },
      'DfMheHIVZXDWI0C7s',
    )
    setSending(false)
  }
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto flex max-w-6xl  flex-col items-center justify-center ">
        <Card className="mx-auto w-96  justify-center border-0 bg-inherit shadow-none">
          <CardHeader className="pt-0 text-2xl">Contact Me</CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="primary" disabled={sending}>
                  {sending && (
                    <>
                      Sending <Spinner />
                    </>
                  )}
                  {!sending && 'Send Message'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
