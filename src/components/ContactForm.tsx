import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";
import { toast } from "sonner";

interface ContactFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactForm: FC<ContactFormProps> = ({ setIsOpen }) => {
  const form = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("Thanks for reaching out! We’ll be in touch shortly.");
        setIsOpen(false);
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-syne font-bold">
          Let’s Create Something Great Together
        </h1>
        <p className="text-black/80 text-sm mb-4">
          At Merry Matrix, we’re always excited to connect. Whether you have an
          idea, a project, or just want to chat about design and technology —
          we’re here to help. Reach out and let’s bring your vision to life.
        </p>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Elon Musk"
                      {...field}
                      className={cn(
                        "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      )}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          ></FormField>
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>I work for a company called</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Space X"
                      {...field}
                      className={cn(
                        "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      )}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          ></FormField>
          <FormField
            control={form.control}
            name="addressLine2"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>I am looking for</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Bradning, Web, Seo, Marketing"
                      {...field}
                      className={cn(
                        "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      )}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          ></FormField>
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Phone number"
                        {...field}
                        className={cn(
                          "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            ></FormField>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email Id</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Email ID"
                        {...field}
                        className={cn(
                          "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            ></FormField>
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Country"
                        {...field}
                        className={cn(
                          "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                        )}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            ></FormField>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      rows={4}
                      placeholder="Message"
                      {...field}
                      className={cn(
                        "file:text-foreground  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 placeholder:uppercase placeholder:font-bold placeholder:text-black/20 border-b flex h-fit text-xl py-2 w-full min-w-0 rounded-md  bg-transparent px-3  placeholder:text-xl shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",

                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                      )}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          ></FormField>
          <div className="flex items-center justify-between">
            <Button type="submit">Submit</Button>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 hover:text-black  border-red-200 shadow-[inset_0px_-2px_0px_1px_#0A5CFF] group hover:bg-red-200 transition duration-300 ease-in-out"
            >
              <span className="font-medium flex items-center justify-center px-8 -mt-1">
                Cancel
              </span>
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
