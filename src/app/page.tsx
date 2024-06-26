/**
 * v0 by Vercel.
 * @see https://v0.dev/t/of1OyDHT04v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 items-start gap-6 xl:gap-12">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-10 text-center">Generate Short Form Video Instantly</h1>
        <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
    Generate Video, Post Instantly and Scale
</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="inline-flex rounded-lg border border-gray-200 border-gray-200 bg-white dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
            <div className="grid w-24 items-center justify-center p-2 text-center text-sm border-r border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <span>Style</span>
            </div>
            <div className="grid w-24 items-center justify-center p-2 text-center text-sm">
              <span>Accent</span>
            </div>
            <div className="grid w-24 items-center justify-center p-2 text-center text-sm">
              <span>Music</span>
            </div>
          </div>
          <div className="inline-flex rounded-lg border border-gray-200 border-gray-200 bg-white dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
            <div className="grid w-24 items-center justify-center p-2 text-center text-sm border-r border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
              <span>Style</span>
            </div>
            <div className="grid w-24 items-center justify-center p-2 text-center text-sm">
              <span>Accent</span>
            </div>
            <div className="grid w-24 items-center justify-center p-2 text-center text-sm">
              <span>Music</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="border border-gray-200 border-gray-200 bg-white rounded-lg overflow-hidden dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
          <div className="grid w-full aspect-video items-center justify-center overflow-hidden">
            <img
              alt="Video"
              className="object-cover object-center"
              height="337.5"
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/337.5",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-end lg:gap-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Post to TikTok
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Post to Reels
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Post to YouTube Shorts
          </Link>
        </div>
      </div>
    </div>
  )
}

