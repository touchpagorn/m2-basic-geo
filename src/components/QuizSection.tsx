import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  RotateCcw,
  Sparkles,
  Volume2,
  Bookmark
} from "lucide-react";
import { unit1MultipleChoice, unit1TrueFalse, unit2MultipleChoice, unit2FlagQuiz, unit3CapitalsQuiz } from "../data";
import { Question, TrueFalseQuestion } from "../types";

interface QuizSectionProps {
  studentName: string;
  addXP: (amount: number) => void;
}

export default function QuizSection({ studentName, addXP }: QuizSectionProps) {
  const [activeQuizType, setActiveQuizType] = useState<"unit1_mc" | "unit1_tf" | "unit2_mc" | "unit2_flags" | "unit3_capitals" | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [selectedTrueFalse, setSelectedTrueFalse] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [scoreEarned, setScoreEarned] = useState(0);
  const [quizHistory, setQuizHistory] = useState<{ isCorrect: boolean; questionIndex: number }[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Timer state
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize educational chimes on the fly using Web Audio API
  const playSound = (type: "correct" | "incorrect" | "success") => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "correct") {
        // High upbeat C Major chord transition
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === "incorrect") {
        // Low dissonant frequency
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150.00, now);
        osc.frequency.setValueAtTime(110.00, now + 0.15);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "success") {
        // Glorious fanfare chord
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(783.99, now + 0.15); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6

        osc2.type = "sine";
        osc2.frequency.setValueAtTime(261.63, now); // C4
        osc2.frequency.setValueAtTime(392.00, now + 0.15); // G4
        osc2.frequency.setValueAtTime(523.25, now + 0.3); // C5

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);
        gain2.gain.setValueAtTime(0.08, now);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.7);

        osc.start(now);
        osc.stop(now + 0.7);
        osc2.start(now);
        osc2.stop(now + 0.7);
      }
    } catch {
      // Audio context may be blocked by browser policies
    }
  };

  const startQuiz = (type: "unit1_mc" | "unit1_tf" | "unit2_mc" | "unit2_flags" | "unit3_capitals") => {
    setActiveQuizType(type);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setSelectedTrueFalse(null);
    setIsAnswered(false);
    setCorrectAnswersCount(0);
    setScoreEarned(0);
    setQuizHistory([]);
    setQuizCompleted(false);
    setSecondsElapsed(0);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
  };

  // Get total questions for active quiz
  const getQuestionsCount = () => {
    if (activeQuizType === "unit1_mc") return unit1MultipleChoice.length;
    if (activeQuizType === "unit1_tf") return unit1TrueFalse.length;
    if (activeQuizType === "unit2_flags") return unit2FlagQuiz.length;
    if (activeQuizType === "unit3_capitals") return unit3CapitalsQuiz.length;
    return unit2MultipleChoice.length;
  };

  const handleMCAnswerSubmit = (index: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(index);
    setIsAnswered(true);

    const questions: Question[] =
      activeQuizType === "unit1_mc"
        ? unit1MultipleChoice
        : activeQuizType === "unit2_flags"
        ? unit2FlagQuiz
        : activeQuizType === "unit3_capitals"
        ? unit3CapitalsQuiz
        : unit2MultipleChoice;
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
      setScoreEarned((prev) => prev + 10);
      playSound("correct");
    } else {
      playSound("incorrect");
    }

    setQuizHistory((prev) => [...prev, { isCorrect, questionIndex: currentQuestionIndex }]);
  };

  const handleTFAnswerSubmit = (choice: boolean) => {
    if (isAnswered) return;
    setSelectedTrueFalse(choice);
    setIsAnswered(true);

    const currentQuestion = unit1TrueFalse[currentQuestionIndex];
    const isCorrect = choice === currentQuestion.isTrue;

    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
      setScoreEarned((prev) => prev + 10);
      playSound("correct");
    } else {
      playSound("incorrect");
    }

    setQuizHistory((prev) => [...prev, { isCorrect, questionIndex: currentQuestionIndex }]);
  };

  const handleNextQuestion = () => {
    const totalQuestions = getQuestionsCount();
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setSelectedTrueFalse(null);
      setIsAnswered(false);
    } else {
      // Completed!
      setQuizCompleted(true);
      if (timerRef.current) clearInterval(timerRef.current);
      addXP(scoreEarned);
      playSound("success");
    }
  };

  const getGradeDetails = (correct: number, total: number) => {
    const percentage = (correct / total) * 100;
    if (percentage >= 80) return { grade: "4 (Very Good)", color: "text-emerald-600 bg-emerald-50 border-emerald-200", title: "ยอดเยี่ยมที่สุด!" };
    if (percentage >= 70) return { grade: "3 (Good)", color: "text-indigo-600 bg-indigo-50 border-indigo-200", title: "เก่งมาก!" };
    if (percentage >= 60) return { grade: "2 (Fair)", color: "text-amber-600 bg-amber-50 border-amber-200", title: "ผ่านระดับปานกลาง" };
    if (percentage >= 50) return { grade: "1 (Pass)", color: "text-slate-600 bg-slate-50 border-slate-200", title: "ผ่านระดับพื้นฐาน" };
    return { grade: "0 (Not Pass)", color: "text-red-600 bg-red-50 border-red-200", title: "พยายามอีกครั้งนะ" };
  };

  // Render selection screen
  if (!activeQuizType) {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-700 p-6 text-white shadow-xl sm:p-10 text-center space-y-4">
          <GraduationCap className="h-16 w-16 mx-auto text-indigo-200 animate-bounce" />
          <h2 className="text-2xl font-black sm:text-4xl">ห้องสอบวัดระดับความรู้</h2>
          <p className="max-w-xl mx-auto text-sm text-indigo-100">
            จำลองแบบทดสอบท้ายบทเรียนเรื่องเครื่องมือภูมิศาสตร์และภูมิศาสตร์ยุโรปตามเกณฑ์ระดับมัธยมศึกษา
            เลือกแบบทดสอบด้านล่างเพื่อเริ่มวัดระดับความเข้าใจและรับเกียรติบัตรเรียนดี!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Unit 1 MC Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all space-y-4">
            <div className="space-y-2">
              <span className="rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                Unit 1 Test
              </span>
              <h3 className="font-extrabold text-slate-800 text-base">เครื่องมือทางภูมิศาสตร์ (แบบปรนัย)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                แบบทดสอบปรนัยเลือกตอบ 10 ข้อ วัดความเข้าใจเรื่อง แผนที่ชั้นสูง, ระบบ Remote Sensing, ชั้นข้อมูล GIS และเครื่องนำทาง GPS
              </p>
            </div>
            <button
              onClick={() => startQuiz("unit1_mc")}
              className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition-colors"
            >
              เริ่มทำแบบทดสอบ (10 ข้อ)
            </button>
          </div>

          {/* Unit 1 True/False Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all space-y-4">
            <div className="space-y-2">
              <span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-600 uppercase tracking-widest">
                Unit 1 True/False
              </span>
              <h3 className="font-extrabold text-slate-800 text-base">วิเคราะห์ถูก-ผิด แผนที่และการรับรู้</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                แบบฝึกหัดกิจกรรมท้ายบท 10 ข้อ วิเคราะห์ประโยคและสัญศาสตร์แผนที่ รวมทั้งความเหมาะสมในการศึกษาหลังภัยพิบัติสึนามิ
              </p>
            </div>
            <button
              onClick={() => startQuiz("unit1_tf")}
              className="w-full rounded-xl bg-teal-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-teal-700 transition-colors"
            >
              เริ่มวิเคราะห์ถูก-ผิด (10 ข้อ)
            </button>
          </div>

          {/* Unit 2 MC Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all space-y-4">
            <div className="space-y-2">
              <span className="rounded bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-600 uppercase tracking-widest">
                Unit 2 Test
              </span>
              <h3 className="font-extrabold text-slate-800 text-base">ภูมิศาสตร์ทวีปยุโรป (แบบปรนัย)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                แบบทดสอบวิเคราะห์ลึก 10 ข้อ เรื่องธรณีวิทยาฟยอร์ด ดินตะกอนที่ราบใหญ่ตอนเหนือ ชาติพันธุ์คอเคซอยด์ และเศรษฐกิจรอบ Dogger Bank
              </p>
            </div>
            <button
              onClick={() => startQuiz("unit2_mc")}
              className="w-full rounded-xl bg-rose-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-rose-700 transition-colors"
            >
              เริ่มทำแบบทดสอบ (10 ข้อ)
            </button>
          </div>

          {/* Unit 2 Flag Quiz Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all space-y-4">
            <div className="space-y-2">
              <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                Unit 2 Flags
              </span>
              <h3 className="font-extrabold text-slate-800 text-base">ธงและประเทศในยุโรป (แบบปรนัย)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                แบบทดสอบท้าทาย 20 ข้อ ระบุประเทศสำคัญจากรูปภาพธงชาติยุโรป (UK, France, Germany, Spain, Italy, etc.) เสริมความรู้นิเวศวิทยาการเมือง
              </p>
            </div>
            <button
              onClick={() => startQuiz("unit2_flags")}
              className="w-full rounded-xl bg-amber-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-amber-700 transition-colors"
            >
              เริ่มทำข้อสอบธง (20 ข้อ)
            </button>
          </div>

          {/* Unit 3 Capitals Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all space-y-4">
            <div className="space-y-2">
              <span className="rounded bg-violet-50 px-2 py-0.5 text-[10px] font-bold text-violet-600 uppercase tracking-widest">
                Unit 3 Capitals
              </span>
              <h3 className="font-extrabold text-slate-800 text-base">เมืองหลวงของประเทศในยุโรป</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                แบบทดสอบท้าทาย 20 ข้อ ทายชื่อเมืองหลวงของแต่ละประเทศในทวีปยุโรป (London, Paris, Berlin, Rome, Madrid, etc.) เพื่อวัดความรู้ทางภูมิศาสตร์เขตการเมือง
              </p>
            </div>
            <button
              onClick={() => startQuiz("unit3_capitals")}
              className="w-full rounded-xl bg-violet-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-violet-700 transition-colors"
            >
              เริ่มทำข้อสอบเมืองหลวง (20 ข้อ)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question details depending on active quiz
  const isTrueFalseQuiz = activeQuizType === "unit1_tf";
  const questionsList =
    activeQuizType === "unit1_mc"
      ? unit1MultipleChoice
      : activeQuizType === "unit1_tf"
      ? unit1TrueFalse
      : activeQuizType === "unit2_flags"
      ? unit2FlagQuiz
      : activeQuizType === "unit3_capitals"
      ? unit3CapitalsQuiz
      : unit2MultipleChoice;

  const currentMCQuestion = questionsList[currentQuestionIndex] as Question;
  const currentTFQuestion = questionsList[currentQuestionIndex] as TrueFalseQuestion;
  const totalQuestions = questionsList.length;

  const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;

  // Render finished state (including gorgeous printable certificate)
  if (quizCompleted) {
    const gradeInfo = getGradeDetails(correctAnswersCount, totalQuestions);
    const dateFormatted = new Date().toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return (
      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm text-center space-y-6">
          <Award className="h-16 w-16 mx-auto text-amber-500 animate-spin-slow" />
          <h3 className="text-2xl font-black text-slate-800">สรุปคะแนนสอบของคุณ</h3>
          <p className="text-sm text-slate-500">
            ยินดีด้วย! คุณได้ทดสอบและวัดระดับความเข้าใจทางภูมิศาสตร์ผ่านตามมาตรฐานการวัดผลเรียบร้อยแล้ว
          </p>

          {/* Results Bento */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">คะแนนเฉลี่ย</span>
              <span className="text-2xl font-black text-slate-800 block mt-1">
                {correctAnswersCount} / {totalQuestions}
              </span>
            </div>
            <div className={`rounded-xl p-4 border ${gradeInfo.color}`}>
              <span className="text-[10px] font-bold text-slate-500 block uppercase">เกรดที่ได้</span>
              <span className="text-lg font-black block mt-1">{gradeInfo.grade}</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">เวลาที่ใช้</span>
              <span className="text-2xl font-black text-slate-800 block mt-1">
                {Math.floor(secondsElapsed / 60)} นาที {secondsElapsed % 60} วิ
              </span>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setActiveQuizType(null)}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="h-4 w-4" /> เลือกแบบทดสอบอื่น
            </button>
          </div>
        </div>

        {/* PRINTABLE GEOGRAPHIC EXCELLENCE CERTIFICATE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl border-8 border-double border-amber-400 bg-white p-8 shadow-2xl overflow-hidden space-y-6 select-none"
        >
          {/* Decorative Corner Seals */}
          <div className="absolute top-2 left-2 text-amber-400 opacity-20 text-3xl">★</div>
          <div className="absolute top-2 right-2 text-amber-400 opacity-20 text-3xl">★</div>
          <div className="absolute bottom-2 left-2 text-amber-400 opacity-20 text-3xl">★</div>
          <div className="absolute bottom-2 right-2 text-amber-400 opacity-20 text-3xl">★</div>

          {/* Certificate Header */}
          <div className="text-center space-y-2">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500 border border-amber-200">
              <Award className="h-10 w-10" />
            </div>
            <h4 className="font-serif text-2xl font-extrabold text-slate-800 tracking-wide">เกียรติบัตรเรียนดีเด่น</h4>
            <p className="text-[10px] font-semibold text-amber-600 uppercase tracking-widest">
              Geographical Knowledge & Spatial analysis achievement
            </p>
          </div>

          {/* Body Text */}
          <div className="text-center space-y-4 py-4">
            <p className="text-xs text-slate-500 leading-relaxed">
              เกียรติบัตรฉบับนี้ให้ไว้เพื่อแสดงว่านักเรียนที่มีความเชี่ยวชาญพิเศษ
            </p>
            <h5 className="text-xl font-black text-slate-800 underline underline-offset-8">
              {studentName || "เด็กหญิง/เด็กชาย สุขใจ รักเรียน"}
            </h5>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              ได้สอบผ่านหลักสูตรวัดระดับความรู้ทางวิชาการและเครื่องมือภูมิศาสตร์เชิงกายภาพ 
              และได้ทำคะแนนสูงสุดร้อยละ <strong>{((correctAnswersCount / totalQuestions) * 100).toFixed(0)}%</strong> 
              คว้าเกรดเฉลี่ยระดับยอดเยี่ยม <strong>{gradeInfo.grade}</strong>
            </p>
          </div>

          {/* Certificate Footer Signature lines */}
          <div className="flex justify-between items-end border-t border-slate-100 pt-6 text-[10px] text-slate-500">
            <div className="text-left space-y-1">
              <span className="block font-bold text-slate-700">วันที่ออกใบประกาศ:</span>
              <span className="block font-mono">{dateFormatted}</span>
            </div>
            <div className="text-center space-y-1">
              <span className="font-serif italic font-bold text-indigo-700 block text-xs">Geocraft Studio</span>
              <span className="block border-t border-slate-300 w-24 pt-1">ผู้ประเมินระบบ</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Quiz Header & Status Bar */}
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-indigo-600 h-5 w-5" />
            <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              {activeQuizType === "unit1_mc"
                ? "บทที่ 1: เครื่องมือภูมิศาสตร์ (ปรนัย)"
                : activeQuizType === "unit1_tf"
                ? "บทที่ 1: วิเคราะห์ ถูก/ผิด"
                : activeQuizType === "unit2_flags"
                ? "บทที่ 2: ธงและประเทศในยุโรป"
                : activeQuizType === "unit3_capitals"
                ? "บทที่ 3: เมืองหลวงประเทศในยุโรป"
                : "บทที่ 2: ภูมิศาสตร์ยุโรป (ปรนัย)"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <Clock className="h-4 w-4 text-slate-400" />
            <span>
              {Math.floor(secondsElapsed / 60)}:{(secondsElapsed % 60).toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] font-bold text-slate-400">
            <span>คำถาม {currentQuestionIndex + 1} จาก {totalQuestions} ข้อ</span>
            <span>{progressPercentage.toFixed(0)}% เสร็จสิ้น</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* MC QUESTION LAYOUT */}
      {!isTrueFalseQuiz ? (
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6">
          {/* Question Text */}
          <div className="space-y-2">
            <span className="rounded bg-indigo-50 px-2.5 py-0.5 text-[9px] font-bold text-indigo-700 uppercase tracking-widest flex items-center gap-1 w-max">
              <Bookmark className="h-3 w-3" /> ข้อที่ {currentMCQuestion.id}
            </span>
            <h4 className="text-sm sm:text-base font-black text-slate-800 leading-relaxed">
              {currentMCQuestion.questionText}
            </h4>
          </div>

          {currentMCQuestion.flagCode && (
            <div className="flex justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100/80 overflow-hidden">
              <img
                src={`https://flagcdn.com/w320/${currentMCQuestion.flagCode}.png`}
                alt={`Flag to identify`}
                className="max-h-36 object-contain rounded-lg shadow-md border border-slate-200/60"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Options Grid */}
          <div className="space-y-3">
            {currentMCQuestion.options.map((option, index) => {
              const isSelected = selectedOptionIndex === index;
              const isCorrectOption = index === currentMCQuestion.correctAnswerIndex;

              let optionStyle = "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100";
              if (isAnswered) {
                if (isCorrectOption) {
                  optionStyle = "border-emerald-300 bg-emerald-50 text-emerald-800";
                } else if (isSelected) {
                  optionStyle = "border-red-300 bg-red-50 text-red-800";
                } else {
                  optionStyle = "border-slate-100 bg-slate-50/50 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  disabled={isAnswered}
                  onClick={() => handleMCAnswerSubmit(index)}
                  className={`w-full text-left rounded-2xl border p-4 text-xs font-bold leading-relaxed transition-all flex items-center justify-between ${optionStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 ml-2" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanatory feedback */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-indigo-50 bg-indigo-50/50 p-4 space-y-2"
            >
              <div className="flex items-center gap-1.5 text-xs font-black text-indigo-800">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>คำอธิบายเพิ่มเติมตามตำราเรียน:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentMCQuestion.explanation}
              </p>
              <button
                onClick={handleNextQuestion}
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 py-2.5 text-xs font-bold text-white hover:bg-slate-950 transition-colors"
              >
                <span>{currentQuestionIndex + 1 === totalQuestions ? "ดูใบรายงานผลสอบ" : "ทำข้อถัดไป"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        /* TRUE / FALSE LAYOUT */
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="rounded bg-teal-50 px-2.5 py-0.5 text-[9px] font-bold text-teal-700 uppercase tracking-widest flex items-center gap-1 w-max">
              <Bookmark className="h-3 w-3" /> ข้อที่ {currentTFQuestion.id} (วิเคราะห์ประโยค)
            </span>
            <h4 className="text-sm sm:text-base font-black text-slate-800 leading-relaxed">
              &ldquo;{currentTFQuestion.statement}&rdquo;
            </h4>
          </div>

          {/* TF Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: true, label: "ถูกต้อง (TRUE)", style: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100 text-emerald-800", activeStyle: "border-emerald-500 ring-4 ring-emerald-100 bg-emerald-100" },
              { val: false, label: "ไม่ถูกต้อง (FALSE)", style: "bg-red-50 border-red-200 hover:bg-red-100 text-red-800", activeStyle: "border-red-500 ring-4 ring-red-100 bg-red-100" }
            ].map((btn) => {
              const isSelected = selectedTrueFalse === btn.val;
              const isCorrectAnswer = btn.val === currentTFQuestion.isTrue;

              let finalStyle = `${btn.style}`;
              if (isAnswered) {
                if (isCorrectAnswer) {
                  finalStyle = "bg-emerald-100 border-emerald-500 text-emerald-900";
                } else if (isSelected) {
                  finalStyle = "bg-red-100 border-red-500 text-red-950";
                } else {
                  finalStyle = "bg-slate-50 border-slate-100 text-slate-400 opacity-55";
                }
              } else if (isSelected) {
                finalStyle = btn.activeStyle;
              }

              return (
                <button
                  key={btn.val.toString()}
                  disabled={isAnswered}
                  onClick={() => handleTFAnswerSubmit(btn.val)}
                  className={`rounded-2xl border p-5 text-center font-black text-sm transition-all ${finalStyle}`}
                >
                  <span>{btn.label}</span>
                </button>
              );
            })}
          </div>

          {/* Feedback section */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-indigo-50 bg-indigo-50/50 p-4 space-y-2"
            >
              <div className="flex items-center gap-1.5 text-xs font-black text-indigo-800">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>วิเคราะห์เฉลยข้อเท็จจริง:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentTFQuestion.explanation}
              </p>
              <button
                onClick={handleNextQuestion}
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 py-2.5 text-xs font-bold text-white hover:bg-slate-950 transition-colors"
              >
                <span>{currentQuestionIndex + 1 === totalQuestions ? "ดูใบรายงานผลสอบ" : "ทำข้อถัดไป"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
