import { Compass, BookOpen, GraduationCap, Globe, Languages } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  studentName: string;
  setStudentName: (name: string) => void;
  score: number;
}

export default function Navbar({ activeTab, setActiveTab, studentName, setStudentName, score }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:py-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-100">
            <Compass className="h-6 w-6 animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800">เครื่องมือภูมิศาสตร์และทวีปยุโรป</h1>
            <p className="text-xs font-medium text-indigo-600">Geographical Instruments & Europe Study Suite</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {[
            { id: "hub", label: "หน้าหลัก", icon: Compass },
            { id: "unit1", label: "เครื่องมือภูมิศาสตร์", icon: BookOpen },
            { id: "unit2", label: "ภูมิศาสตร์ยุโรป", icon: Globe },
            { id: "vocab", label: "คลังคำศัพท์", icon: Languages },
            { id: "quiz", label: "ห้องสอบวัดระดับ", icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Student Profile & Progress info */}
        <div className="flex items-center gap-3 border-t border-slate-100 pt-3 sm:border-t-0 sm:pt-0">
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400">นักเรียน</span>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="กรอกชื่อของคุณ..."
              className="w-36 border-b border-transparent bg-transparent text-sm font-semibold text-slate-700 placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50 px-3 py-1.5 text-emerald-800 border border-emerald-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">คะแนนสะสม</span>
            <span className="text-sm font-black">{score} XP</span>
          </div>
        </div>
      </div>
    </header>
  );
}
