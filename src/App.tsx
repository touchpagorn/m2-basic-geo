import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeHub from "./components/HomeHub";
import Unit1Lesson from "./components/Unit1Lesson";
import Unit2Lesson from "./components/Unit2Lesson";
import VocabCard from "./components/VocabCard";
import QuizSection from "./components/QuizSection";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("hub");
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem("geocraft_student_name") || "สุขใจ ใฝ่เรียน";
  });
  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem("geocraft_student_score");
    return saved ? parseInt(saved, 10) : 0;
  });

  // Persist name and score in localStorage
  useEffect(() => {
    localStorage.setItem("geocraft_student_name", studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem("geocraft_student_score", score.toString());
  }, [score]);

  const addXP = (amount: number) => {
    setScore((prev) => prev + amount);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16 font-sans">
      {/* Navigation and Profile stats bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        studentName={studentName}
        setStudentName={setStudentName}
        score={score}
      />

      {/* Primary Page Canvas */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {activeTab === "hub" && (
          <HomeHub
            studentName={studentName}
            setActiveTab={setActiveTab}
            score={score}
          />
        )}

        {activeTab === "unit1" && (
          <Unit1Lesson />
        )}

        {activeTab === "unit2" && (
          <Unit2Lesson />
        )}

        {activeTab === "vocab" && (
          <VocabCard />
        )}

        {activeTab === "quiz" && (
          <QuizSection
            studentName={studentName}
            addXP={addXP}
          />
        )}
      </main>

      {/* Humble Footer */}
      <footer className="mt-12 text-center text-xs text-slate-400 border-t border-slate-100 pt-8 max-w-7xl mx-auto px-4">
        <p>หลักสูตรสรุปภูมิศาสตร์ระดับมัธยมศึกษา - ผลิตเพื่อวัตถุประสงค์การศึกษาแบบโต้ตอบภาษาไทย</p>
        <p className="mt-1 font-mono text-[10px]">Geographical Instruments & Europe Classroom Suite • 2026</p>
      </footer>
    </div>
  );
}
