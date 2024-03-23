/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2EtFF5Q7OrE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full grid items-start gap-6 sm:gap-10 md:grid-cols-2 lg:gap-12 xl:gap-16">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Generate Short Form Video Instantly</h1>
          <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Educational AI videos and applications
          </p>
        </div>
        <div className="grid gap-2 sm:gap-4">
          <div className="inline-block text-sm font-medium leading-none">
            <span className="mr-2.5 text-gray-500 dark:text-gray-400">Voice:</span>
            <span className="text-gray-500 dark:text-gray-400">Brian (UK)</span>
          </div>
          <div className="inline-block text-sm font-medium leading-none">
            <span className="mr-2.5 text-gray-500 dark:text-gray-400">Speed:</span>
            <span className="text-gray-500 dark:text-gray-400">Normal</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <div className="relative inline-block w-[140px]">
            <select className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm dark:border-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
              <option>Font: Default</option>
              <option>Font: Open Sans</option>
              <option>Font: Roboto</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-600" />
          </div>
          <div className="relative inline-block w-[140px]">
            <select className="w-full appearance-none pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm dark:border-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
              <option>Theme: Light</option>
              <option>Theme: Dark</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-600" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="border border-gray-200 rounded-lg w-full grid items-center aspect-video overflow-hidden dark:border-gray-800">
          <div className="w-full h-[400px] flex items-center justify-center">
            <div className="flex items-center justify-center space-y-2">
              <VideoIcon className="w-12 h-12 text-gray-300 dark:text-gray-700" />
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Video will appear here after generation
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button className="w-full sm:w-auto" variant="outline">
            Generate Video
          </Button>
          <Button className="w-full sm:w-auto" variant="outline">
            Regenerate Video
          </Button>
        </div>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
