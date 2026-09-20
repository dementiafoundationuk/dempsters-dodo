import './globals.css';
import Link from 'next/link';

export const metadata = { title: "Dempster's DoDo — The app that knows shit", description: "Practical help for caravan, motorhome and campsite toilet, water and waste problems." };

export default function RootLayout({children}:{children:React.ReactNode}){
 return <><header className="sticky top-0 z-50 border-b-2 border-black bg-[#fff8ea]/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><Link href="/" className="text-xl font-black tracking-tight">Dempster's <span className="text-[#e84b3c]">DoDo</span>™</Link><nav className="hidden gap-6 text-sm font-bold md:flex"><Link href="/get-help">I've got a shit situation</Link><Link href="/what-it-knows">What Dempster knows</Link><Link href="/join">Join the Do-Do List</Link></nav><Link href="/get-help" className="rounded-full border-2 border-black bg-[#ffd447] px-4 py-2 text-sm font-black shadow-[3px_3px_0_#000]">Get help</Link></div></header>{children}<footer className="border-t-2 border-black bg-[#123b63] px-5 py-10 text-white"><div className="mx-auto max-w-6xl"><div className="text-xl font-black">Dempster's DoDo™</div><p className="mt-2 max-w-xl text-sm text-white/80">Practical troubleshooting for campers dealing with the jobs they would rather call a plumber for.</p><p className="mt-8 text-xs text-white/60">Not a substitute for qualified gas, electrical, plumbing or sewage professionals. If something is dangerous, stop and get professional help.</p></div></footer></>
}
