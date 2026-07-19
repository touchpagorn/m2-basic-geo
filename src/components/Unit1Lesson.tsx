import { useState } from "react";
import { motion } from "motion/react";
import { Layers, MapPin, Navigation, Info, Eye, EyeOff, Radio, Orbit, CheckCircle } from "lucide-react";

export default function Unit1Lesson() {
  const [activeSubTab, setActiveSubTab] = useState<"map" | "rs" | "gis" | "gps">("map");

  // GIS layers state
  const [gisLayers, setGisLayers] = useState({
    points: true,
    lines: true,
    areas: true,
    terrain: true,
  });

  // Map elements highlight state
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null);

  const mapElements = [
    { id: "title", label: "ชื่อแผนที่ (Title)", desc: "บอกว่าแผนที่นี้แสดงรายละเอียดอะไร เช่น WORLD PHYSICAL MAP" },
    { id: "scale", label: "มาตราส่วน (Scale)", desc: "ระบุอัตราส่วนความลดทอนระยะทางจริงบนดิน เช่น 1:50,000 หรือแผนภูมิแท่ง" },
    { id: "legend", label: "คำอธิบายสัญลักษณ์ (Legend)", desc: "สัญลักษณ์สีหรือเครื่องหมาย เช่น สีเขียว=ที่ราบ สีน้ำตาล=ภูเขาสูง" },
    { id: "coordinates", label: "พิกัดภูมิศาสตร์ (Geographic coordinates)", desc: "เส้นละติจูด-ลองจิจูดระบุตำแหน่งที่แน่นอนบนโลก" },
    { id: "neatline", label: "ขอบระวางแผนที่ (Neatline)", desc: "กรอบรอบแผนที่ชั้นในและชั้นนอกเพื่อความระเบียบเรียบร้อย" },
  ];

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white shadow-xl sm:p-10">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          Unit 1: เครื่องมือทางภูมิศาสตร์
        </span>
        <h2 className="mt-4 text-2xl font-black sm:text-4xl">Geographical Instruments</h2>
        <p className="mt-2 max-w-xl text-sm text-indigo-100 sm:text-base">
          เรียนรู้เครื่องมือในการสำรวจ วิเคราะห์ และทำความเข้าใจพื้นผิวโลกรอบตัวเราอย่างเป็นระบบ
          ผ่านแผนที่ การรับรู้จากระยะไกล ระบบสารสนเทศภูมิศาสตร์ และ GPS
        </p>

        {/* Local Navigation */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: "map", label: "1. แผนที่และการใช้งาน (Map)", icon: Navigation },
            { id: "rs", label: "2. การรับรู้จากระยะไกล (Remote Sensing)", icon: Radio },
            { id: "gis", label: "3. ระบบสารสนเทศภูมิศาสตร์ (GIS)", icon: Layers },
            { id: "gps", label: "4. ระบบนำทางอัจฉริยะ (GPS)", icon: Orbit },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = activeSubTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSubTab(item.id as any)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-white text-indigo-900 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Content Panels */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          {/* Subtab 1: Map */}
          {activeSubTab === "map" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Navigation className="text-indigo-600" />
                แผนที่ (Map) และองค์ประกอบสำคัญ
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                แผนที่คือการแสดงข้อมูลสภาพพื้นผิวโลกในมาตราส่วนที่ย่อส่วนลงตามอัตราส่วนที่ถูกต้อง
                โดยแสดงลักษณะภูมิทัศน์ วัฒนธรรม หรือพิกัดอ้างอิงผ่านทิศทางและพิกัดภูมิศาสตร์
              </p>

              {/* Types of Map bento cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 hover:border-indigo-100 transition-all">
                  <span className="text-xs font-bold text-indigo-600">1) Topographic Map</span>
                  <h4 className="mt-1 font-bold text-slate-800 text-sm">แผนที่ภูมิประเทศ</h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    แสดงลักษณะทางกายภาพ รายละเอียดความสูงต่ำของพื้นผิวโลก
                    เช่น เทือกเขา แม่น้ำ ความสูงชัน ผ่านทาง <strong>เส้นชั้นความสูง (contour lines)</strong>
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 hover:border-indigo-100 transition-all">
                  <span className="text-xs font-bold text-indigo-600">2) Thematic Map</span>
                  <h4 className="mt-1 font-bold text-slate-800 text-sm">แผนที่เฉพาะเรื่อง</h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    แสดงข้อมูลหัวข้อเรื่องจำเพาะเจาะจง เช่น แผนที่ภูมิอากาศ แผนที่ป่าไม้ แผนที่ท่องเที่ยว
                    หรือแสดงทิศทางกระบาดของโรค
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 hover:border-indigo-100 transition-all">
                  <span className="text-xs font-bold text-indigo-600">3) Atlas</span>
                  <h4 className="mt-1 font-bold text-slate-800 text-sm">แผนที่เล่ม / สมุดแผนที่</h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    เป็นการรวมเล่มของแผนที่เฉพาะเรื่องหลายๆ ประเภทของประเทศหรือภูมิภาคต่างๆ
                    เพื่อใช้ศึกษาเปรียบเทียบในคราวเดียว
                  </p>
                </div>
              </div>

              {/* Interactive Map element explorer */}
              <div className="rounded-2xl border border-indigo-50 bg-indigo-50/50 p-4 space-y-4">
                <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-indigo-600" />
                  กดหัวข้อเพื่อจำลองจุดไฮไลท์องค์ประกอบของแผนที่:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mapElements.map((el) => (
                    <button
                      key={el.id}
                      onClick={() => setHighlightedElement(el.id === highlightedElement ? null : el.id)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                        highlightedElement === el.id
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "bg-white text-slate-700 hover:bg-indigo-50 border border-slate-200"
                      }`}
                    >
                      {el.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Map Canvas */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-6 h-64 flex flex-col justify-between">
                  {/* Outer neatline */}
                  <div className={`absolute inset-1 border-2 border-slate-800 pointer-events-none transition-all ${highlightedElement === 'neatline' ? 'border-indigo-600 ring-4 ring-indigo-500/20' : ''}`} />
                  {/* Inner neatline */}
                  <div className={`absolute inset-3 border border-slate-500 pointer-events-none transition-all ${highlightedElement === 'neatline' ? 'border-indigo-500 ring-2 ring-indigo-500/20' : ''}`} />

                  {/* Header Title */}
                  <div className={`text-center py-1 transition-all ${highlightedElement === 'title' ? 'bg-indigo-100 rounded border border-indigo-400 p-1 scale-105' : ''}`}>
                    <span className="text-xs font-bold text-slate-500 block uppercase tracking-widest">WORLD PHYSICAL</span>
                    <span className="text-base font-black text-slate-800 block">MAP OF EUROPE</span>
                  </div>

                  {/* Graphic Area representing a map */}
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="text-center space-y-1">
                      <span className="text-xs text-slate-400 font-mono block">
                        [ละติจูด 51° 30&apos; N | ลองจิจูด 0° 7&apos; W]
                      </span>
                      {highlightedElement === 'coordinates' && (
                        <div className="absolute inset-0 bg-indigo-500/10 flex items-center justify-center rounded">
                          <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            เส้นตารางพิกัดภูมิศาสตร์ (Grids)
                          </span>
                        </div>
                      )}
                      <div className="w-24 h-12 bg-emerald-100/60 rounded-full mx-auto border border-emerald-300 flex items-center justify-center">
                        <span className="text-[10px] text-emerald-800 font-bold">เทือกเขาเอลบรุส</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Scale & Legend */}
                  <div className="flex justify-between items-end border-t border-slate-100 pt-2 text-[10px] text-slate-500">
                    <div className={`p-1 transition-all ${highlightedElement === 'legend' ? 'bg-indigo-100 rounded scale-105' : ''}`}>
                      <span className="font-bold text-slate-700 block">คำอธิบายสัญลักษณ์:</span>
                      <span className="flex items-center gap-1">🟢ที่ราบ 🔵อ่างเก็บน้ำ ⛰️ภูเขา</span>
                    </div>
                    <div className={`p-1 text-right transition-all ${highlightedElement === 'scale' ? 'bg-indigo-100 rounded scale-105' : ''}`}>
                      <span className="font-bold text-slate-700 block">มาตราส่วน:</span>
                      <span className="font-mono">1:50,000</span>
                    </div>
                  </div>
                </div>

                {/* Show details for selected element */}
                {highlightedElement && (
                  <div className="rounded-xl bg-indigo-600 p-3 text-white text-xs animate-fade-in">
                    <span className="font-bold block">
                      💡 {mapElements.find((e) => e.id === highlightedElement)?.label}:
                    </span>
                    <span className="mt-1 block opacity-90">
                      {mapElements.find((e) => e.id === highlightedElement)?.desc}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Subtab 2: Remote Sensing */}
          {activeSubTab === "rs" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Radio className="text-indigo-600" />
                การรับรู้จากระยะไกล (Remote Sensing)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                กระบวนการสำรวจรวบรวมข้อมูลเชิงปริมาณ (Quantitative information) เกี่ยวกับพื้นผิวโลก
                โดยตรวจจับคลื่นแสงหรือ <strong>รังสีแม่เหล็กไฟฟ้า (Electromagnetic radiation)</strong> 
                ที่สะท้อนกลับขึ้นไปหาอุปกรณ์บันทึกภาพของเครื่องบินหรือดาวเทียม
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Aerial photo card */}
                <div className="rounded-2xl border border-slate-100 p-4 bg-slate-50 space-y-3">
                  <div className="h-40 rounded-xl bg-slate-300 overflow-hidden relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500')] bg-cover">
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="absolute top-2 left-2 rounded bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      Aerial Photograph
                    </span>
                    <span className="relative z-10 text-white font-bold text-sm text-center px-4">
                      ภาพถ่ายทางอากาศ (ติดกล้องบนเครื่องบิน)
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>ถ่ายจากระดับความสูงต่ำเฉลี่ย 1,000 - 5,000 ฟุต</li>
                    <li>ใช้กล้องคมชัดสูงเพื่อถ่ายทอดสัดส่วนรายละเอียดเฉพาะตัวเมือง</li>
                    <li>ตัวอย่างสำคัญ: ภาพถ่ายทางอากาศกรุงปารีส (แสดงคลองและสะพาน) หรือจังหวัดสุรินทร์</li>
                  </ul>
                </div>

                {/* Satellite image card */}
                <div className="rounded-2xl border border-slate-100 p-4 bg-slate-50 space-y-3">
                  <div className="h-40 rounded-xl bg-slate-300 overflow-hidden relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500')] bg-cover">
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="absolute top-2 left-2 rounded bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      Satellite Image
                    </span>
                    <span className="relative z-10 text-white font-bold text-sm text-center px-4">
                      ภาพถ่ายดาวเทียม (จากอวกาศเชิงดิจิทัล)
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li>เก็บข้อมูลพิกัดความถี่วิทยุสะท้อนกลับจากความสูงนับหมื่นกิโลเมตร</li>
                    <li>ข้อมูลเก็บในรูปแบบเชิงปริมาณทางดิจิทัล วิเคราะห์ด้วยคอมพิวเตอร์</li>
                    <li>เหมาะสำหรับการติดตามภัยพิบัติแบบเรียลไทม์ เช่น การระเบิดของภูเขาไฟ หรือเปรียบเทียบพื้นที่หลังเกิดสึนามิ</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Subtab 3: GIS */}
          {activeSubTab === "gis" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Layers className="text-indigo-600" />
                ระบบสารสนเทศภูมิศาสตร์ (GIS)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                GIS เป็นระบบคอมพิวเตอร์สำหรับการวิเคราะห์ข้อมูลเชิงพื้นที่ (Spatial Data) โดยแบ่งข้อมูลออกเป็นชั้นๆ (Layers)
                ที่อิงพิกัดทางภูมิศาสตร์ร่วมกัน เพื่อนำมาซ้อนทับกัน (Overlay) และตัดสินใจเชิงพื้นที่
              </p>

              {/* Layers Interactive simulator */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h4 className="font-bold text-slate-700 text-sm mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-indigo-500" />
                  จำลองการเปิด-ปิดชั้นข้อมูล GIS (Stacking Simulator):
                </h4>

                <div className="grid gap-6 md:grid-cols-12 items-center">
                  {/* Controls */}
                  <div className="md:col-span-5 space-y-3">
                    {[
                      { key: "points", label: "ข้อมูลจุด (Points) - โรงแรม, วัด, ยอดเขา", desc: "สัญลักษณ์ระบุสถานที่อ้างอิงเดี่ยว" },
                      { key: "lines", label: "ข้อมูลเส้น (Lines) - ถนน, รถไฟ, แม่น้ำ", desc: "โครงข่ายคมนาคมเชิงเส้นเชื่อมต่อ" },
                      { key: "areas", label: "ข้อมูลพื้นที่ (Areas) - เขตป่าไม้, อ่างเก็บน้ำ", desc: "โพลิกอนรูปหลายเหลี่ยมกำหนดพื้นที่ครอบคลุม" },
                      { key: "terrain", label: "ภาพราสเตอร์ (Raster Map) - ภาพถ่ายสีพื้นหลัง", desc: "ภาพกริดพิกเซลระบุระดับสูงต่ำของดิน" },
                    ].map((layer) => (
                      <button
                        key={layer.key}
                        onClick={() => setGisLayers(prev => ({ ...prev, [layer.key]: !prev[layer.key as keyof typeof gisLayers] }))}
                        className={`w-full flex items-start gap-3 rounded-xl p-3 text-left border transition-all ${
                          gisLayers[layer.key as keyof typeof gisLayers]
                            ? "bg-white border-indigo-200 shadow-sm"
                            : "bg-slate-100/50 border-slate-200 text-slate-400"
                        }`}
                      >
                        <div className="mt-1">
                          {gisLayers[layer.key as keyof typeof gisLayers] ? (
                            <Eye className="h-4 w-4 text-indigo-600" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-slate-400" />
                          )}
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-slate-700">{layer.label}</span>
                          <span className="block text-[10px] text-slate-500 mt-0.5">{layer.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Simulated Overlay Window */}
                  <div className="md:col-span-7 h-72 border-2 border-slate-200 rounded-2xl bg-white shadow-inner relative overflow-hidden flex flex-col justify-end p-4">
                    <span className="absolute top-2 right-2 rounded bg-indigo-100 px-2 py-0.5 text-[9px] font-bold text-indigo-800 uppercase tracking-widest z-40">
                      Overlay Result
                    </span>

                    {/* Raster Background layer */}
                    {gisLayers.terrain && (
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50 via-emerald-50 to-indigo-50 pointer-events-none transition-all duration-300" />
                    )}

                    {/* Areas/Polygons layer */}
                    {gisLayers.areas && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-40 h-28 bg-emerald-300/30 border-2 border-dashed border-emerald-500 rounded-3xl animate-pulse flex items-center justify-center">
                          <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-wide bg-white/80 px-1 rounded">
                            Reservoir (อ่างเก็บน้ำ)
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Lines layer */}
                    {gisLayers.lines && (
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Simulated river */}
                        <svg className="w-full h-full absolute inset-0 text-blue-500 opacity-70">
                          <path d="M 0 100 Q 150 50 250 180 T 400 250" fill="transparent" stroke="currentColor" strokeWidth="4" />
                        </svg>
                        {/* Simulated railway line */}
                        <svg className="w-full h-full absolute inset-0 text-slate-700 opacity-60">
                          <path d="M 50 0 Q 120 180 300 280" fill="transparent" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
                        </svg>
                      </div>
                    )}

                    {/* Points layer */}
                    {gisLayers.points && (
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Points of interest */}
                        <div className="absolute top-1/4 left-1/3 flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-red-500 fill-red-500" />
                          <span className="text-[9px] font-extrabold bg-slate-800 text-white px-1 py-0.2 rounded shadow-sm">วัดพุทธ</span>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-indigo-600 fill-indigo-600" />
                          <span className="text-[9px] font-extrabold bg-slate-800 text-white px-1 py-0.2 rounded shadow-sm">โรงเรียน</span>
                        </div>
                      </div>
                    )}

                    {/* No layers placeholder */}
                    {!gisLayers.points && !gisLayers.lines && !gisLayers.areas && !gisLayers.terrain && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 text-xs text-center p-6">
                        เปิดเลเยอร์ด้านซ้ายเพื่อซ้อนทับข้อมูลแผนที่ GIS
                      </div>
                    )}

                    <div className="relative z-30 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-200 text-[10px] text-slate-500">
                      <span className="font-bold text-slate-700 block">คุณลักษณะ GIS:</span>
                      ช่วยจำแนกกลุ่มข้อมูลเพื่อง่ายต่อการศึกษา และป้องกันความสับสนของการวิเคราะห์พื้นที่เชิงคุณภาพ
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Subtab 4: GPS */}
          {activeSubTab === "gps" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Orbit className="text-indigo-600" />
                ระบบนำทางและระบุตำแหน่ง (GPS)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Global Positioning System (GPS) ใช้เทคโนโลยีดาวเทียมและสัญญาณคลื่นวิทยุ 
                ส่งค่าตำแหน่งพิกัดกลับมายังเสารับสัญญาณหรือเครื่องรับ GPS บนพื้นโลกเพื่อประมวลผลพิกัด ละติจูด ลองจิจูด และทิศทาง
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-indigo-50 p-4 border border-indigo-100 space-y-2 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">1</div>
                  <h4 className="font-bold text-slate-800 text-sm">ดาวเทียม 24 ดวง</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ขับเคลื่อนโดยกลุ่มดาวเทียมนำทางอย่างน้อย 24 ดวงรอบโลก คอยส่งสัญญาณพิกัดเวลาระดับนาโนวินาทีสม่ำเสมอ
                  </p>
                </div>

                <div className="rounded-2xl bg-indigo-50 p-4 border border-indigo-100 space-y-2 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">2</div>
                  <h4 className="font-bold text-slate-800 text-sm">การหาพิกัดตัดไขว้</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    เครื่องรับบนพื้นโลกจับคลื่นสัญญาณจากดาวเทียมที่ลอยอยู่เหนือศีรษะอย่างน้อย 4 ดวงเพื่อคำนวณระยะทางที่แน่นอน
                  </p>
                </div>

                <div className="rounded-2xl bg-indigo-50 p-4 border border-indigo-100 space-y-2 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">3</div>
                  <h4 className="font-bold text-slate-800 text-sm">ความปลอดภัยสูง</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ออกแบบเริ่มแรกโดยกะลาโหมสหรัฐฯ (NAVSTAR) ปัจจุบันขยายบริการสาธารณะช่วยนำทางคมนาคม รถ เรือ เครื่องบิน
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Benefits Sidebar of Unit 1 */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 space-y-4">
            <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <CheckCircle className="text-indigo-600 h-5 w-5" />
              ประโยชน์เชิงประยุกต์
            </h4>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="p-3 bg-white rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800 block">Military (ด้านการทหาร)</span>
                ใช้ในการระบุพิกัดความปลอดภัย ค้นหาระยะทางพิกัดเป้าหมายทางยุทธวิธี และกู้ภัยในเขตสงคราม
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800 block">Politics (ด้านการปกครอง)</span>
                ใช้ในการวางแผนจัดทำเขตพรมแดนธรรมชาติ กำหนดสัดส่วนแผนผังเมือง และเขตปกครองตนเอง
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100">
                <span className="font-bold text-slate-800 block">Economy (ด้านการพัฒนาเศรษฐกิจ)</span>
                ใช้สำหรับการทำแผนที่จัดการขนส่งและขนส่งมวลชน จัดสรรการจัดเก็บวัตถุดิบและทรัพยากรป่าไม้
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
