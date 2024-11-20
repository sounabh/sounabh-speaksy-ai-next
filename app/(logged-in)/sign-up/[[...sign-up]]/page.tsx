import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (

    <div className="relative bg-gradient-to-br from-purple-200 via-indigo-300 to-pink-200 flex items-center justify-center py-[30px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,200,0.3)_0%,rgba(0,0,0,0)_70%)] animate-pulse"></div>

      <div className="relative z-10">
        <SignUp />
      </div>
    </div>
  )
}