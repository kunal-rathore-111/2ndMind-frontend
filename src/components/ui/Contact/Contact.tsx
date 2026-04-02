export default function ContactForm() {
  return (
    <div className="flex max-w-105 flex-col border text-start">
      <div className="flex flex-col gap-3 px-4 py-3">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Contact support
        </h1>
        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Get in touch with our support staff to get answers to your burning
            questions!
          </p>
          <p>
            By submitting a ticket, you agree to adhere to our{" "}
            <span className="font-medium text-zinc-900 underline decoration-zinc-400 dark:text-zinc-200 dark:decoration-zinc-500">
              Terms of Engagement.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
