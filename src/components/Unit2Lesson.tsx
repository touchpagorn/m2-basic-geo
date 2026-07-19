import { useState } from "react";
import { motion } from "motion/react";
import { Globe, ShieldAlert, Sun, CloudRain, ShieldCheck, Heart, UserCheck, Flame, Compass } from "lucide-react";

export default function Unit2Lesson() {
  const [activeSubTab, setActiveSubTab] = useState<"phys" | "climate" | "social" | "demo">("phys");
  const [selectedTerrain, setSelectedTerrain] = useState<number>(0);

  const terrains = [
    {
      id: 0,
      title: "1) เขตหินเก่าทางตะวันตกเฉียงเหนือ (Old rocky area in northwest)",
      desc: "ลักษณะเด่นเป็นคาบสมุทรสูงชัน มีที่ราบสูงหินแกรนิตที่ถูกกัดเซาะจากธารน้ำแข็งในอดีต (glacial erosion) จนเกิดเป็นอ่าวแคบ ลึก ตลิ่งชัน เรียกว่า 'ฟยอร์ด' (Fjord) พบมากที่สุดในนอร์เวย์และสกอตแลนด์",
      example: "ชายฝั่งฟยอร์ด (Norway)",
      tags: ["ธารน้ำแข็ง", "นอร์เวย์", "หินแกรนิตเก่า"]
    },
    {
      id: 1,
      title: "2) เขตที่ราบใหญ่ตอนเหนือ (Northern plain)",
      desc: "เป็นที่ราบขนาดใหญ่ที่สุดในทวีปยุโรป และมีประชากรอาศัยอยู่หนาแน่นที่สุด ดินมีความอุดมสมบูรณ์สูงมากจากการพัดพาทับถมของดินตะกอนแม่น้ำ (sediment) เหมาะแก่การเพาะปลูกข้าวสาลี ข้าวโอ๊ต ข้าวไรย์ ถือเป็นหัวใจทางเศรษฐกิจเกษตรกรรม",
      example: "ที่ราบใหญ่ยูเรเชีย (ฝรั่งเศส เยอรมนี รัสเซีย)",
      tags: ["ดินอุดมสมบูรณ์", "ประชากรหนาแน่น", "เกษตรกรรมหลัก"]
    },
    {
      id: 2,
      title: "3) เขตที่ราบสูงตอนกลาง (Central highland)",
      desc: "ภูมิประเทศเป็นเนินเขาสลับที่ราบลุ่ม แม่น้ำไหลผ่าน มีลักษณะขรุขระเนื่องจากเป็นภูเขาเตี้ยๆ ที่ผ่านการสึกกร่อนมานาน เช่น ทิวเขาแบล็กฟอเรสต์ (Black Forest) ในเยอรมนี, ที่ราบสูงโบฮีเมีย (Bohemia) และที่ราบสูงมาซิฟซ็องตราล (Massif Central) ฝรั่งเศส",
      example: "ป่าดำเยอรมนี / ที่ราบสูงโบฮีเมีย",
      tags: ["ที่ราบสูง", "แบล็กฟอเรสต์", "เหมืองแร่เหล็ก"]
    },
    {
      id: 3,
      title: "4) เขตภูเขาหินใหม่ตอนใต้ (New rock formation area in south)",
      desc: "เป็นเขตภูเขาสูงชันอายุน้อย เกิดจากแนวรอยชนกันของแผ่นเปลือกโลก (tectonic plate collision) ทำให้เกิดเทือกเขาสูงที่มีหิมะปกคลุมตลอดปี เช่น เทือกเขาแอลป์ (Alps), คาร์เพเทียน และ คอเคซัส ซึ่งเป็นที่ตั้งของยอดเขาเอลบรุส (Mount Elbrus) สูงที่สุดในยุโรป 5,642 เมตร",
      example: "เทือกเขาแอลป์ / ยอดเขาเอลบรุส (รัสเซีย)",
      tags: ["ยอดเขาสูงสุด", "แผ่นดินไหว", "เทือกเขาแอลป์"]
    }
  ];

  const climateZones = [
    { title: "1. ภูมิอากาศแบบทุนดรา (Tundra)", details: "หนาวจัดเกือบตลอดปี อุณหภูมิต่ำกว่า 10 องศาเซลเซียส พืชพรรณเป็นตะไคร่น้ำ มอส และไลเคน พบแถบเหนือสุดของสแกนดิเนเวียและไซบีเรีย" },
    { title: "2. ภูมิอากาศแบบไทกา (Taiga/Subarctic)", details: "อากาศหนาวเย็นยาวนานกว่า 6 เดือนในฤดูหนาว พืชพรรณธรรมชาติเป็นป่าไม้สนใบแหลมขนาดกว้างใหญ่ (ป่าไทกา) พบในฟินแลนด์ สวีเดน รัสเซีย" },
    { title: "3. ภูมิอากาศอบอุ่นชื้นภาคพื้นสมุทร (Marine West Coast)", details: "อบอุ่นชื้น มีฝนตกตลอดปีเนื่องจากอิทธิพลของลมตะวันตกและกระแสน้ำอุ่นแอตแลนติกเหนือ พืชพรรณเป็นป่าไม้ใบกว้างและป่าสนผสม" },
    { title: "4. ภูมิอากาศชื้นภาคพื้นทวีป (Humid Continental)", details: "หนาวเย็นในฤดูหนาว อบอุ่นในฤดูร้อน ป่าผลัดใบผสมป่าสน พบในยุโรปตะวันออกและรัสเซีย" },
    { title: "5. ภูมิอากาศชื้นกึ่งร้อน (Humid Subtropical)", details: "ฝนตกชุกตลอดปี ได้รับความชื้นจากทะเลพัดผ่าน ป่าผลัดใบเขียวชอุ่มตลอดทั้งปี" },
    { title: "6. ภูมิอากาศแบบเมดิเตอร์เรเนียน (Mediterranean)", details: "ฤดูร้อนร้อนและแห้งแล้ง ฤดูหนาวอบอุ่นและมีฝนตกจากอิทธิพลของลมตะวันตก พืชพรรณใบหนาเหนียวขนาดเล็กเพื่อกักเก็บน้ำ เช่น ต้นคอร์กโอ๊ก" },
    { title: "7. ภูมิอากาศแบบทุ่งหญ้าสเตปป์ (Steppe)", details: "แห้งแล้งปานกลาง พืชพรรณเป็นทุ่งหญ้าสเตปป์กว้างใหญ่ ไม่มีต้นไม้ใหญ่ เช่น แถบสเปนตอนกลาง ยูเครน และรัสเซียตอนใต้" },
    { title: "8. ภูมิอากาศแบบภูเขาสูง (Alpine)", details: "อุณหภูมิลดลงเรื่อยๆ ตามระดับความสูง ยอดเขามีหิมะปกคลุม พืชพรรณเปลี่ยนสภาพไปตามระดับความชันของเทือกเขาแอลป์" }
  ];

  const caucasians = [
    {
      name: "กลุ่มนอร์ดิก (Nordic Group)",
      geo: "ยุโรปเหนือ และตะวันตกเฉียงเหนือ (สแกนดิเนเวีย, ไอซ์แลนด์, สหราชอาณาจักร, เนเธอร์แลนด์, เบลเยียม)",
      desc: "รูปร่างสูงใหญ่ กะโหลกศีรษะยาว ผิวขาวจัด ผมสีบลอนด์ทอง นัยน์ตาสีประกายฟ้า",
      image: "👱‍♂️"
    },
    {
      name: "กลุ่มเมดิเตอร์เรเนียน (Mediterranean Group)",
      geo: "ยุโรปตอนใต้ แถบชายฝั่งเมดิเตอร์เรเนียน (อิตาลี, สเปน, โปรตุเกส, กรีซ)",
      desc: "รูปร่างสัดส่วนปานกลาง กะโหลกศีรษะกลม ผมสีดำหรือสีน้ำตาลเข้ม นัยน์ตาสีเข้ม ผิวคล้ำแดดเล็กน้อย",
      image: "🧔"
    },
    {
      name: "กลุ่มแอลไพน์ (Alpine Group)",
      geo: "ยุโรปตะวันออก ยุโรปกลาง และบางส่วนของฝรั่งเศส เยอรมนี",
      desc: "รูปร่างเตี้ยและบึกบึน แข็งแรง กะโหลกศีรษะกลม ผมสีน้ำตาล นัยน์ตาสีน้ำตาลหรือสีน้ำตาลเข้ม",
      image: "👨"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Intro Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-teal-500 to-indigo-600 p-6 text-white shadow-xl sm:p-10">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          Unit 2: ภูมิศาสตร์ทวีปยุโรป
        </span>
        <h2 className="mt-4 text-2xl font-black sm:text-4xl">Geography of Europe</h2>
        <p className="mt-2 max-w-xl text-sm text-teal-100 sm:text-base">
          เจาะลึกดินแดนที่มีความสัมพันธ์ทางธรรมชาติและเศรษฐกิจที่ใกล้ชิด มั่งคั่งด้วยทรัพยากรเหล็ก ถ่านหิน
          พืชพรรณที่อุดมสมบูรณ์ และไม่มีเขตภูมิอากาศแบบทะเลทรายเลย
        </p>

        {/* Local Navigation */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: "phys", label: "ภูมิประเทศ 4 เขตหลัก", icon: Compass },
            { id: "climate", label: "เขตภูมิอากาศ 8 รูปแบบ", icon: Sun },
            { id: "social", label: "เศรษฐกิจและสังคมเมือง", icon: Flame },
            { id: "demo", label: "ชาติพันธุ์คอเคซอยด์", icon: UserCheck },
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

      {/* Main Panel Grid */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          {/* Subtab 1: Topography */}
          {activeSubTab === "phys" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Globe className="text-indigo-600" />
                ลักษณะภูมิประเทศแบ่งเป็น 4 เขตเด่น
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                ภูมิทัศน์ของยุโรปมีความหลากหลายสูง ตั้งแต่ฝั่งทะเลเว้าแหว่งทางเหนือ ที่ราบตะกอนหนาแน่น
                ไปจนถึงยอดเขาสูงชันที่มีแผ่นเปลือกโลกชนกันทางตอนใต้ คลิกเลือกแต่ละภูมิประเทศเพื่อศึกษาลักษณะเด่น:
              </p>

              {/* Terrain Interactive selector list */}
              <div className="grid gap-3 sm:grid-cols-4">
                {terrains.map((terrain) => (
                  <button
                    key={terrain.id}
                    onClick={() => setSelectedTerrain(terrain.id)}
                    className={`rounded-xl p-3 text-left border transition-all text-xs font-semibold ${
                      selectedTerrain === terrain.id
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    <span>{terrain.id + 1}. {terrain.title.split("(")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Terrain detail card */}
              <motion.div
                key={selectedTerrain}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-2xl border border-indigo-50 bg-indigo-50/30 p-6 space-y-4"
              >
                <div className="flex flex-wrap gap-2">
                  {terrains[selectedTerrain].tags.map((tag, i) => (
                    <span key={i} className="rounded-full bg-indigo-100 text-indigo-700 px-2.5 py-0.5 text-[10px] font-bold uppercase">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h4 className="font-extrabold text-slate-800 text-base">
                  {terrains[selectedTerrain].title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {terrains[selectedTerrain].desc}
                </p>
                <div className="rounded-xl bg-white p-3 border border-slate-150 flex items-center justify-between text-xs text-slate-500">
                  <span>🗺️ ตัวอย่างพิกัดเชิงกายภาพ:</span>
                  <strong className="text-slate-800">{terrains[selectedTerrain].example}</strong>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Subtab 2: Climate */}
          {activeSubTab === "climate" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Sun className="text-amber-500" />
                เขตภูมิอากาศ 8 รูปแบบ (ไม่มีเขตทะเลทราย)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                ทวีปยุโรปตั้งอยู่ในเขตอบอุ่นค่อนไปทางเหนือ ทำให้ไม่มีอากาศร้อนแห้งแล้งจัดแบบภูมิอากาศทะเลทรายเลย
                โดยสามารถแบ่งออกเป็น 8 เขตที่สัมพันธ์กับความใกล้ไกลจากมหาสมุทร:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {climateZones.map((zone, i) => (
                  <div key={i} className="rounded-xl border border-slate-100 p-4 bg-slate-50 hover:bg-white hover:border-indigo-100 transition-all space-y-1">
                    <span className="font-bold text-slate-800 text-sm block">{zone.title}</span>
                    <p className="text-xs text-slate-500 leading-relaxed">{zone.details}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Subtab 3: Economy & Social aspects */}
          {activeSubTab === "social" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Flame className="text-red-500 animate-pulse" />
                มิติด้านสังคม วัฒนธรรม และแหล่งทำประมง
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Religions */}
                <div className="rounded-2xl border border-slate-150 bg-slate-50/50 p-5 space-y-3">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    <ShieldCheck className="text-emerald-600 h-4 w-4" />
                    ศาสนาคริสต์ 3 นิกายหลักในยุโรป
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>
                      <strong className="text-slate-800">1. โรมันคาทอลิก (Roman Catholic):</strong> หนาแน่นทางยุโรปใต้และตะวันตกเฉียงใต้ มีองค์พระสันตะปาปา ณ นครรัฐวาติกันเป็นประมุข
                    </li>
                    <li>
                      <strong className="text-slate-800">2. กรีกออร์โธดอกซ์ (Greek Orthodox):</strong> ไม่มีพระสันตะปาปา ประชากรส่วนใหญ่อยู่ในคาบสมุทรบอลข่าน กรีซ เซอร์เบีย รัสเซีย
                    </li>
                    <li>
                      <strong className="text-slate-800">3. โปรเตสแตนต์ (Protestant):</strong> แยกนิกายดั้งเดิม หนาแน่นในยุโรปเหนือ สแกนดิเนเวีย สหราชอาณาจักร
                    </li>
                  </ul>
                </div>

                {/* Fisheries */}
                <div className="rounded-2xl border border-slate-150 bg-slate-50/50 p-5 space-y-3">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    <CloudRain className="text-blue-500 h-4 w-4" />
                    แหล่งประมงระดับโลก (Dogger Bank)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ทะเลเหนือล้อมรอบไปด้วยดินแดนเกาะอังกฤษและประเทศสแกนดิเนเวีย มีแนวเขตน้ำตื้นที่อุดมสมบูรณ์เรียกว่า{" "}
                    <strong>ด็อกเกอร์แบงก์ (Dogger Bank)</strong> ซึ่งน้ำจะไม่เคยแข็งตัวเนื่องจากได้รับอิทธิพลจากกระแสน้ำอุ่นแอตแลนติกเหนือ
                    ทำให้เป็นอู่จับปลาและประมงพาณิชย์หลักของทั้งยุโรป
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Subtab 4: Demographics */}
          {activeSubTab === "demo" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <UserCheck className="text-teal-600" />
                กลุ่มชาติพันธุ์หลัก (Caucasian Group Profile)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                ประชากรส่วนใหญ่ของทวีปยุโรปจัดอยู่ในกลุ่มชาติพันธุ์ผิวขาว คอเคซอยด์ (Caucasian) 
                ซึ่งมีจุดเด่นทางสรีระและพื้นที่อยู่อาศัยที่แบ่งออกได้เป็น 3 กลุ่มย่อยเด่นชัด:
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {caucasians.map((group, i) => (
                  <div key={i} className="rounded-2xl border border-slate-100 p-4 bg-slate-50 hover:border-teal-200 transition-all text-center space-y-3">
                    <div className="text-4xl">{group.image}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{group.name}</h4>
                      <span className="text-[10px] text-teal-600 font-bold block mt-0.5">ถิ่นที่อยู่หลัก</span>
                      <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{group.geo}</p>
                    </div>
                    <div className="border-t border-slate-200 pt-2 text-[11px] text-slate-600 text-left leading-relaxed">
                      <strong>สรีระเด่น:</strong> {group.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar: Natural Resources */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 space-y-4">
            <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <ShieldAlert className="text-indigo-600 h-5 w-5" />
              ทรัพยากรธรรมชาติยุโรป
            </h4>
            <div className="space-y-4 text-xs text-slate-600">
              <div className="p-3 bg-white rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-800 block">🌱 แหล่งดินดี (Fertile Soil)</span>
                เหมาะปลูกธัญพืช เช่น ข้าวไรย์ ข้าวบาร์เลย์ ในเขตที่ราบกว้างตอนกลางและที่ราบตอนเหนือ
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-800 block">💧 สายน้ำขนส่ง (Major Rivers)</span>
                แม่น้ำสำคัญอย่าง แม่น้ำไรน์ (Rhine), ดานูบ (Danube) และโวลกา (Volga) ใช้เป็นทั้งสายพานเกษตรและการคมนาคมข้ามประเทศ
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-800 block">🪨 เหมืองแร่เหล็ก & ถ่านหิน</span>
                มีความหนาแน่นของแร่ธาตุอุตสาหกรรมในแถบตอนกลาง ทำให้ยุโรปเป็นศูนย์กลางการปฏิวัติอุตสาหกรรมเครื่องจักรกลระดับโลก
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
