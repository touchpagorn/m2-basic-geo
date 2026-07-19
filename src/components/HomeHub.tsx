import { SVGProps } from "react";
import { Compass, BookOpen, Globe, GraduationCap, ArrowRight, ShieldCheck, Award } from "lucide-react";

interface HomeHubProps {
  studentName: string;
  setActiveTab: (tab: string) => void;
  score: number;
}

export default function HomeHub({ studentName, setActiveTab, score }: HomeHubProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-12">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        
        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-300">
            <SparklesIcon className="h-4 w-4 text-indigo-400 animate-pulse" />
            ห้องเรียนภูมิศาสตร์ออนไลน์ ม.2
          </span>
          <h2 className="text-3xl font-black sm:text-5xl leading-tight">
            สวัสดี, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-300">{studentName || "นักเรียนสุดขยัน"}</span> 👋
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed sm:text-base">
            ยินดีต้อนรับสู่ชุดการเรียนรู้วิชาภูมิศาสตร์แบบโต้ตอบภาษาไทย! 
            ที่รวบรวมเนื้อหาจากบทเรียนอย่างครบถ้วน ทั้งเครื่องมือภูมิศาสตร์ระดับสูงและกายภาพของทวีปยุโรป 
            ร่วมสนุกไปกับการเก็บ XP ทำแบบทดสอบ และคว้าเกียรติบัตรเกียรตินิยมกันเถอะ!
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab("unit1")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition-all"
            >
              เริ่มต้นเข้าสู่บทเรียน <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Map / Overview */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">แผนผังการเรียนรู้ (Learning Path)</h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Unit 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-150 transition-all">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="font-extrabold text-slate-800 text-lg">บทที่ 1: เครื่องมือทางภูมิศาสตร์</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                ทำความคุ้นเคยกับแผนที่ประเภทต่างๆ การอ่านมาตราส่วน สัญลักษณ์ ละติจูดลองจิจูด 
                ร่วมถึงเทคโนโลยี Remote Sensing ของดาวเทียม, ชั้นข้อมูลสารสนเทศ GIS และระบบนำทาง GPS
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Map", "Remote Sensing", "GIS Layers", "GPS Navigation"].map((t) => (
                  <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setActiveTab("unit1")}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-100 transition-colors flex items-center justify-center gap-1.5"
            >
              อ่านสรุปบทเรียนนี้ <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Unit 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-teal-150 transition-all">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="font-extrabold text-slate-800 text-lg">บทที่ 2: ภูมิศาสตร์ทวีปยุโรป</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                สำรวจทวีปยุโรปอันมีประวัติศาสตร์ยาวนานและมั่งคั่งด้วยทรัพยากร 
                เรียนรู้ธรณีวิทยาธารน้ำแข็งฟยอร์ด เขตที่ราบเพาะปลูกข้าวไรย์ สภาพภูมิอากาศ 8 เขต และชาติพันธุ์คอเคซอยด์
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Europe Plain", "Fjord coasts", "8 Climate zones", "Nordic Caucasian"].map((t) => (
                  <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setActiveTab("unit2")}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-100 transition-colors flex items-center justify-center gap-1.5"
            >
              อ่านสรุปบทเรียนนี้ <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Rewards Overview */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4">
        <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
          <Award className="h-5 w-5 text-indigo-600" />
          ภารกิจเพื่อเกียรติยศสูงสุด
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">ภารกิจที่ 1</span>
            <span className="font-bold text-slate-800 text-xs block">เรียนรู้คลังคำศัพท์น่ารู้</span>
            <span className="text-[10px] text-indigo-600 font-bold block mt-1">แตะเพื่อเปิดเสียงอ่าน TTS</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">ภารกิจที่ 2</span>
            <span className="font-bold text-slate-800 text-xs block">ทดลองซ้อนทับชั้นข้อมูล GIS</span>
            <span className="text-[10px] text-indigo-600 font-bold block mt-1">ส่องความแตกต่าง Vector & Raster</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-150 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">ภารกิจที่ 3</span>
            <span className="font-bold text-slate-800 text-xs block">สอบผ่านได้เกรด 4</span>
            <span className="text-[10px] text-indigo-600 font-bold block mt-1">ทำแบบทดสอบคว้าเกียรติบัตร</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sparkle helper icon
function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}
