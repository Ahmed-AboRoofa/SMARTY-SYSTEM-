import React, { useState } from 'react';
import {
  Lightbulb,
  Thermometer,
  Layers,
  Lock,
  Unlock,
  Video,
  Volume2,
  Sliders,
  CheckCircle2,
  RefreshCw,
  Sun,
  Moon,
  Sparkles,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { Language } from '../types';

interface SmartSimulatorProps {
  lang: Language;
}

export const SmartSimulator: React.FC<SmartSimulatorProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  // State
  const [activeZone, setActiveZone] = useState<'living' | 'bedroom' | 'majlis' | 'garden'>('living');
  const [lightsOn, setLightsOn] = useState(true);
  const [brightness, setBrightness] = useState(75);
  const [lightScene, setLightScene] = useState<'warm' | 'daylight' | 'cinema'>('warm');
  const [acTemp, setAcTemp] = useState(22);
  const [acMode, setAcMode] = useState<'cool' | 'eco' | 'fan'>('cool');
  const [curtainsOpen, setCurtainsOpen] = useState(60);
  const [isLocked, setIsLocked] = useState(true);
  const [activeCam, setActiveCam] = useState<number>(1);
  const [audioMode, setAudioMode] = useState<'relax' | 'cinema' | 'off'>('relax');
  const [lockPinGenerated, setLockPinGenerated] = useState('8492');

  const generateNewPin = () => {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    setLockPinGenerated(pin);
  };

  const zones = [
    { id: 'living', nameAr: 'الصالة العائلية', nameEn: 'Living Room' },
    { id: 'bedroom', nameAr: 'غرفة النوم الرئيسية', nameEn: 'Master Bedroom' },
    { id: 'majlis', nameAr: 'مجلس الضيوف الفاخر', nameEn: 'Guest Majlis' },
    { id: 'garden', nameAr: 'المدخل والحديقة', nameEn: 'Entrance & Garden' },
  ];

  const cameras = [
    { id: 1, titleAr: 'كاميرا المدخل الرئيسي', titleEn: 'Front Entrance 4K' },
    { id: 2, titleAr: 'كاميرا الحديقة والمسبح', titleEn: 'Garden & Pool' },
    { id: 3, titleAr: 'كاميرا الممر وصالة الاستقبال', titleEn: 'Main Foyer' },
    { id: 4, titleAr: 'كاميرا كراج السيارات', titleEn: 'Car Garage' },
  ];

  return (
    <section id="simulator" className="py-24 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xs border-b border-slate-200/60 dark:border-neutral-800/60 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Harmonious Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-[#0088cc] dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-bold shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0088cc]" />
            <span>{isAr ? 'المحاكي التفاعلي المباشر' : 'Live Smart Home Simulator'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
            {isAr ? 'جرّب التحكم بأنظمة منزلك الذكي بنفسك' : 'Experience Smart Automation First-Hand'}
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0088cc] via-[#5a3ec8] to-[#7928ca] mb-4" />

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'تفاعل مع أجهزة الإضاءة والتكييف والستائر والأقفال وكاميرات المراقبة كما لو كنت داخل منزلك الذكي'
              : 'Test lighting scenes, climate thermostat, motorized curtains, biometric lock, and CCTV live feeds.'}
          </p>
        </div>

        {/* Simulator Dashboard Container */}
        <div className="max-w-5xl mx-auto bg-white/95 dark:bg-neutral-900/90 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-neutral-800 shadow-xl">
          
          {/* Zone Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap gap-2">
              {zones.map((z) => (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeZone === z.id
                      ? 'bg-[#0088cc] text-white shadow-md'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {isAr ? z.nameAr : z.nameEn}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isAr ? 'المنظومة متصلة وسريعة الاستجابة' : 'System Online: 12ms Latency'}</span>
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* 1. Lighting Control */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${lightsOn ? 'bg-amber-100 text-amber-600' : 'bg-neutral-100 text-neutral-400 dark:bg-neutral-700'}`}>
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {isAr ? 'التحكم بالإضاءة' : 'Lighting Control'}
                      </h4>
                      <span className="text-[10px] text-neutral-500">
                        {lightsOn ? (isAr ? 'مضاءة' : 'Turned ON') : (isAr ? 'مطفأة' : 'Turned OFF')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setLightsOn(!lightsOn)}
                    className={`w-12 h-6 rounded-full transition-colors relative ${
                      lightsOn ? 'bg-amber-500' : 'bg-neutral-300 dark:bg-neutral-600'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                        lightsOn ? (isAr ? 'left-1' : 'right-1') : (isAr ? 'right-1' : 'left-1')
                      }`}
                    />
                  </button>
                </div>

                {/* Brightness Slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                    <span>{isAr ? 'مستوى السطوع:' : 'Brightness:'}</span>
                    <span className="font-mono">{lightsOn ? `${brightness}%` : '0%'}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    disabled={!lightsOn}
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer disabled:opacity-40"
                  />
                </div>
              </div>

              {/* Lighting Scenes */}
              <div className="flex gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-700">
                <button
                  onClick={() => { setLightsOn(true); setLightScene('warm'); setBrightness(75); }}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    lightScene === 'warm' && lightsOn
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {isAr ? 'دافئ 2700K' : 'Warm'}
                </button>
                <button
                  onClick={() => { setLightsOn(true); setLightScene('daylight'); setBrightness(100); }}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    lightScene === 'daylight' && lightsOn
                      ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {isAr ? 'نهاري 4000K' : 'Daylight'}
                </button>
                <button
                  onClick={() => { setLightsOn(true); setLightScene('cinema'); setBrightness(25); }}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    lightScene === 'cinema' && lightsOn
                      ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {isAr ? 'سينمائي' : 'Cinema'}
                </button>
              </div>
            </div>

            {/* 2. HVAC & Climate Control */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-sky-100 dark:bg-sky-950 text-[#0088cc]">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {isAr ? 'التحكم بالمناخ (التكييف)' : 'Climate & HVAC'}
                      </h4>
                      <span className="text-[10px] text-neutral-500">
                        {isAr ? 'ترموستات ذكي موفر للطاقة' : 'Smart Inverter Thermostat'}
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-[#0088cc] uppercase">
                    {acMode}
                  </span>
                </div>

                {/* Temp Dial Simulation */}
                <div className="flex items-center justify-center gap-4 py-2">
                  <button
                    onClick={() => setAcTemp((prev) => Math.max(18, prev - 1))}
                    className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 text-neutral-800 dark:text-white font-bold text-lg flex items-center justify-center"
                  >
                    -
                  </button>
                  <div className="text-center">
                    <span className="text-3xl font-black text-neutral-900 dark:text-white font-mono">
                      {acTemp}°C
                    </span>
                    <span className="text-[10px] text-neutral-400 block">
                      {isAr ? 'الحرارة المستهدفة' : 'Target Temp'}
                    </span>
                  </div>
                  <button
                    onClick={() => setAcTemp((prev) => Math.min(28, prev + 1))}
                    className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 text-neutral-800 dark:text-white font-bold text-lg flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="flex gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-700">
                <button
                  onClick={() => setAcMode('cool')}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    acMode === 'cool'
                      ? 'bg-sky-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {isAr ? 'تبريد' : 'Cool'}
                </button>
                <button
                  onClick={() => setAcMode('eco')}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    acMode === 'eco'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {isAr ? 'توفير Eco' : 'Eco'}
                </button>
                <button
                  onClick={() => setAcMode('fan')}
                  className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    acMode === 'fan'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {isAr ? 'مروحة' : 'Fan'}
                </button>
              </div>
            </div>

            {/* 3. Motorized Curtains */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-[#8A2BE2]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {isAr ? 'الستائر الذكية' : 'Smart Curtains'}
                      </h4>
                      <span className="text-[10px] text-neutral-500">
                        {isAr ? 'محرك هادئ جداً' : 'Silent Motor Automation'}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300">
                    {curtainsOpen}% {isAr ? 'مفتوحة' : 'Open'}
                  </span>
                </div>

                {/* Curtains Slider */}
                <div className="space-y-2 mb-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={curtainsOpen}
                    onChange={(e) => setCurtainsOpen(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400">
                    <span>{isAr ? 'مغلقة 0%' : 'Closed (0%)'}</span>
                    <span>{isAr ? 'نصف فتح 50%' : 'Half (50%)'}</span>
                    <span>{isAr ? 'مفتوحة 100%' : 'Full (100%)'}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-700">
                <button
                  onClick={() => setCurtainsOpen(0)}
                  className="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                >
                  {isAr ? 'إغلاق كامل' : 'Close All'}
                </button>
                <button
                  onClick={() => setCurtainsOpen(50)}
                  className="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                >
                  {isAr ? '50% خصوصية' : '50% Privacy'}
                </button>
                <button
                  onClick={() => setCurtainsOpen(100)}
                  className="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                >
                  {isAr ? 'فتح كامل' : 'Open All'}
                </button>
              </div>
            </div>

            {/* 4. Smart Biometric Door Lock */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${isLocked ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                      {isLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {isAr ? 'قفل الباب الذكي' : 'Smart Door Lock'}
                      </h4>
                      <span className="text-[10px] text-neutral-500">
                        {isAr ? 'بصمة / كود / هاتف' : 'Biometric / PIN / App'}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isLocked ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {isLocked ? (isAr ? 'مغلق ومؤمن' : 'Locked') : (isAr ? 'مفتوح' : 'Unlocked')}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 mb-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-400 block">
                      {isAr ? 'رمز زائر مؤقت (OTP):' : 'Temporary Guest PIN:'}
                    </span>
                    <span className="font-mono font-bold text-sm tracking-widest text-[#0088cc]">
                      {lockPinGenerated}
                    </span>
                  </div>
                  <button
                    onClick={generateNewPin}
                    className="p-1.5 rounded-lg bg-white dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 text-xs"
                    title={isAr ? 'توليد كود جديد' : 'Generate New PIN'}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={() => setIsLocked(!isLocked)}
                className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  isLocked
                    ? 'bg-rose-500 hover:bg-rose-600 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {isLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                <span>
                  {isLocked
                    ? (isAr ? 'فتح القفل عن بُعد' : 'Remote Unlock')
                    : (isAr ? 'إعادة قفل الباب وتأمينه' : 'Lock & Secure')}
                </span>
              </button>
            </div>

            {/* 5. CCTV Camera Preview Feed (Spans 2 cols on lg) */}
            <div className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        <span>{isAr ? 'المراقبة المباشرة (CCTV 4K)' : 'CCTV 4K Live Stream'}</span>
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      </h4>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {new Date().toLocaleTimeString()} | REC 4K AI
                      </span>
                    </div>
                  </div>

                  {/* Camera Tabs */}
                  <div className="flex gap-1">
                    {cameras.map((cam) => (
                      <button
                        key={cam.id}
                        onClick={() => setActiveCam(cam.id)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                          activeCam === cam.id
                            ? 'bg-[#0088cc] text-white'
                            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                        }`}
                      >
                        CAM {cam.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Video Monitor Frame */}
                <div className="relative aspect-16/7 sm:aspect-16/6 rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                  <img
                    src={
                      activeCam === 1
                        ? 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
                        : activeCam === 2
                        ? 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
                        : activeCam === 3
                        ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
                    }
                    alt="CCTV stream"
                    className="w-full h-full object-cover opacity-80"
                  />

                  {/* Overlay Video Telemetry */}
                  <div className="absolute top-2 start-3 flex items-center gap-2 text-[10px] text-white font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>LIVE: CAM-0{activeCam}</span>
                  </div>

                  <div className="absolute bottom-2 end-3 text-[10px] text-emerald-400 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>AI Detection: Clear & Safe</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-3 border-t border-neutral-100 dark:border-neutral-700 mt-2">
                <span>{isAr ? 'كاميرات ملونة نهارية وليلية بدقة 4K مع خاصية التعرف على الوجوه' : '24/7 Full ColorVu 4K with AI human & vehicle analytics'}</span>
                <span className="font-bold text-[#0088cc]">{isAr ? 'تسجيل سحابي مشفر' : 'Encrypted NVR'}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
