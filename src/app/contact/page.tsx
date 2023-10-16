'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Phone, Map, Mail } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

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
    .min(10)
    .max(150),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="800px:grid mx-auto flex max-w-6xl grid-cols-6 flex-col items-center justify-center gap-10">
        <Card className="800px:w-full col-span-3 w-4/5 justify-center border-0 bg-inherit shadow-none">
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
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="col-span-3 flex w-full flex-col items-center gap-12">
          <Card className="1050px:w-2/3 800px:w-3/4 col-span-3 w-4/5  bg-inherit">
            <CardHeader className="flex flex-col items-center gap-5">
              <Phone />
              +77 022 444 05 05
            </CardHeader>
          </Card>
          <Card className="1050px:w-2/3 800px:w-3/4 col-span-3 w-4/5 bg-inherit">
            <CardHeader className="flex flex-col items-center gap-5">
              <Mail />
              hello@gmail.com
            </CardHeader>
          </Card>
          <Card className="1050px:w-2/3 800px:w-3/4 col-span-3 w-4/5 bg-inherit">
            <CardHeader className="flex flex-col items-center gap-5">
              <Map />
              Ave Street, New York, USA
            </CardHeader>
          </Card>
        </div>
      </div>
    </Container>
  )
}
