import { useState } from "react";
import { Search, Volume2, FlipHorizontal, HelpCircle } from "lucide-react";
import { unit1Vocab, unit2Vocab } from "../data";
import { VocabItem } from "../types";

export default function VocabCard() {
  const [selectedUnit, setSelectedUnit] = useState<"all" | "unit1" | "unit2">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [flippedWord, setFlippedWord] = useState<string | null>(null);

  const combinedVocab = [
    ...unit1Vocab.map((v) => ({ ...v, unit: 1 })),
    ...unit2Vocab.map((v) => ({ ...v, unit: 2 })),
  ];

  const filteredVocab = combinedVocab.filter((item) => {
    const matchesUnit =
      selectedUnit === "all" ||
      (selectedUnit === "unit1" && item.unit === 1) ||
      (selectedUnit === "unit2" && item.unit === 2);

    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definitionTh.includes(searchQuery) ||
      item.definitionEn.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesUnit && matchesSearch;
  });

  const speakText = (text: string, lang: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Unit Filters */}
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800">คลังคำศัพท์น่ารู้ (Vocabulary Bank)</h3>
            <p className="text-xs text-slate-500">
              รวมคำศัพท์ภูมิศาสตร์ระดับชั้นมัธยมศึกษา พร้อมปุ่มช่วยฝึกออกเสียงภาษาอังกฤษ-ไทย
            </p>
          </div>

          <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl">
            {[
              { id: "all", label: "ทั้งหมด" },
              { id: "unit1", label: "บทที่ 1" },
              { id: "unit2", label: "บทที่ 2" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedUnit(tab.id as any)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedUnit === tab.id
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาคำศัพท์ภาษาอังกฤษ ความหมายภาษาไทย หรือส่วนหนึ่งของนิยาม..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-xs font-medium placeholder-slate-400 outline-none focus:border-indigo-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Vocabulary Flashcard Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVocab.map((item, index) => {
          const isFlipped = flippedWord === item.word;
          return (
            <div
              key={index}
              className="group h-48 [perspective:1000px]"
              onClick={() => setFlippedWord(isFlipped ? null : item.word)}
            >
              <div
                className={`relative h-full w-full rounded-2xl border border-slate-100 shadow-sm transition-all duration-500 [transform-style:preserve-3d] cursor-pointer ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white p-5 [backface-visibility:hidden] flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-700">
                        Unit {item.unit}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 italic">
                        {item.partOfSpeech}
                      </span>
                    </div>
                    <h4 className="text-xl font-black text-slate-800 tracking-tight">{item.word}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.definitionEn}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(item.word, "en-US");
                        }}
                        className="rounded-lg p-1.5 hover:bg-slate-100 text-slate-600 transition-colors"
                        title="ฟังการออกเสียงภาษาอังกฤษ"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-[10px] text-indigo-600 font-bold flex items-center gap-1">
                      <FlipHorizontal className="h-3 w-3" /> แตะเพื่อแปลไทย
                    </span>
                  </div>
                </div>

                {/* Back Side (Flipped) */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-indigo-600 p-5 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-indigo-200">ความหมายภาษาไทย:</span>
                    <h4 className="text-lg font-black tracking-tight">{item.definitionTh}</h4>
                    {item.example && (
                      <p className="text-[10px] text-indigo-100 italic leading-relaxed">
                        &ldquo;{item.example}&rdquo;
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-indigo-500/30 pt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(item.definitionTh.split(",")[0], "th-TH");
                      }}
                      className="rounded-lg p-1.5 bg-indigo-500 hover:bg-indigo-400 text-white transition-colors"
                      title="ฟังความหมายภาษาไทย"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                    <span className="text-[10px] text-indigo-200 font-bold">แตะเพื่อดูคำศัพท์อังกฤษ</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredVocab.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400 space-y-2">
            <HelpCircle className="h-10 w-10 mx-auto opacity-50" />
            <p className="text-xs">ไม่พบคำศัพท์ภูมิศาสตร์ตามคำค้นหาของคุณ...</p>
          </div>
        )}
      </div>
    </div>
  );
}
