import smartAutomationImg from '../assets/images/service_smart_automation_1789742923293.jpg';
import smartCctvImg from '../assets/images/service_cctv_surveillance_1789742947610.jpg';
import smartIntercomImg from '../assets/images/service_smart_intercom_1789742965675.jpg';
import smartCurtainsImg from '../assets/images/service_smart_curtains_1789743001699.jpg';
import smartSwitchesImg from '../assets/images/service_smart_switches_1789742986098.jpg';
import smartLockImg from '../assets/images/smart_lock_1789733667276.jpg';
import smartAlarmImg from '../assets/images/smart_alarm_1789733723533.jpg';
import smartNetworkImg from '../assets/images/smart_network_1789733738089.jpg';
import smartCinemaImg from '../assets/images/smart_cinema_1789733679938.jpg';

export interface SmartService {
  id: string;
  titleAr: string;
  titleEn: string;
  subAr: string;
  subEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  image: string;
  featuresAr: string[];
  featuresEn: string[];
  protocols: string[];
  badge?: string;
}

export interface ProcessStep {
  step: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: string;
  detailsAr: string[];
  detailsEn: string[];
}

export interface ShowcaseProject {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  locationAr: string;
  locationEn: string;
  image: string;
  descAr: string;
  descEn: string;
  systemsUsed: string[];
  resultsAr: string;
  resultsEn: string;
}

export const SMART_SERVICES: SmartService[] = [
  {
    id: 'home-hotel-automation',
    titleAr: 'أتمتة المنازل والفنادق',
    titleEn: 'Hotel & Home Automation',
    subAr: 'تحكم مركزي ذكي في الإضاءة والتكييف والمشاهد بلمسة زر',
    subEn: 'Integrated smart lighting, climate, and automated scenarios',
    descAr: 'نظام متكامل يربط جميع الأجهزة الكهربائية والميكانيكية في الفيلا أو الفندق. يوفر سيناريوهات متعددة مثل وضع الاستقبال، النوم، السفر، مع تحكم مركزي سلس من شاشات الحائط أو الهواتف الذكية.',
    descEn: 'Comprehensive integration connecting all electrical and mechanical systems in luxury villas and hotels. Offers personalized scenarios like Welcome, Sleep, Away, with wall touchscreens and mobile control.',
    icon: 'Home',
    image: smartAutomationImg,
    featuresAr: [
      'برمجة سيناريوهات الإضاءة والمناخ المخصصة',
      'توفير استهلاك الكهرباء بنسبة تصل إلى 35%',
      'شاشات لمس جدارية أنيقة وتطبيقات هاتف سهلة',
      'متوافق مع أنظمة الفنادق وإدارة الغرف (GRMS)'
    ],
    featuresEn: [
      'Custom scene scheduling (Lighting, Climate, Welcome)',
      'Energy saving up to 35% through smart sensors',
      'Elegant wall touch panels and intuitive mobile app',
      'Full compatibility with Hotel Guest Room Management (GRMS)'
    ],
    protocols: ['KNX', 'Zigbee 3.0', 'Z-Wave', 'WiFi', 'Modbus'],
    badge: 'الأكثر طلباً'
  },
  {
    id: 'smart-lighting-switches',
    titleAr: 'الإنارة الذكية ومفاتيح المشاهد اللمسية',
    titleEn: 'Smart Lighting & Scene Touch Panels',
    subAr: 'شاشات لمس فاخرة ومفاتيح ذكية للتحكم بالإنارة، التعتيم، والطقس',
    subEn: 'Smart touch panels, dimming controls & ambient scene keypads',
    descAr: 'مفاتيح وشاشات لمس جدارية متطورة تدمج التحكم في درجات الإضاءة (Dimming)، حرارة اللون (CCT 3000K)، والستائر، مع شاشات ملونة تعرض الوقت والطقس وسيناريوهات بلمسة واحدة تعكس أعلى درجات الفخامة المعمارية.',
    descEn: 'Luxury smart wall touch panels and switches integrating multi-channel dimming (CCT 3000K), climate presets, and motorized curtain controls with ambient displays showing time and weather.',
    icon: 'Sliders',
    image: smartSwitchesImg,
    featuresAr: [
      'تحكم دقيق بدرجة السطوع والتعتيم وحرارة اللون (Kelvin)',
      'شاشات رقمية تفاعلية لعرض الوقت، التاريخ، والطقس',
      'دمج أزرار المشاهد (Scene Keypads) مع التحكم بالستائر والتكييف',
      'تصميم فاخر بمواد زجاجية ومعدنية مقاومة للخدش تتماشى مع أرقى الديكورات'
    ],
    featuresEn: [
      'Precision multi-channel dimming and color temperature (Kelvin)',
      'Digital touchscreens displaying ambient weather, time & status',
      'One-touch master scene keys combining lighting, curtains & AC',
      'Luxury scratch-resistant architectural materials and finishes'
    ],
    protocols: ['KNX', 'Zigbee 3.0', 'DALI-2', '0-10V Dimming'],
    badge: 'الأحدث تقنياً'
  },
  {
    id: 'cctv-surveillance',
    titleAr: 'أنظمة المراقبة (CCTV)',
    titleEn: 'CCTV Surveillance Systems',
    subAr: 'كاميرات مراقبة ذات دقة عالية وتعرف ذكي',
    subEn: 'High-definition cameras with AI analytics & smart recognition',
    descAr: 'كاميرات مراقبة فائقة الدقة (4K / ColorVu) مزودة بخوارزميات الذكاء الاصطناعي للتعرف على الوجوه والمركبات، مع رؤية ليلية ملونة، وتنبيهات فورية على هاتفك عند استشعار أي حركة غير معتادة.',
    descEn: 'Ultra-high-definition (4K / Full ColorVu) surveillance cameras with AI recognition for human and vehicle detection, full-color night vision, and instant mobile push notifications.',
    icon: 'Video',
    image: smartCctvImg,
    featuresAr: [
      'رؤية ليلية ملونة فائقة الوضوح على مدار 24 ساعة',
      'ذكاء اصطناعي لتمييز الأشخاص والمركبات وتفادي الإنذار الخاطئ',
      'بث مباشر وتسجيل مشفر مع إمكانية الرجوع للأيام السابقة',
      'كاميرات داخلية وخارجية مقاومة لكافة الظروف الجوية (IP67)'
    ],
    featuresEn: [
      '24/7 Full-color night vision in total darkness',
      'AI object classification to eliminate false alarms',
      'Encrypted cloud/NVR storage and instant remote playback',
      'Weatherproof indoor and outdoor cameras (IP67 certified)'
    ],
    protocols: ['IP PoE', 'AI NVR', 'ONVIF', 'Cloud Sync'],
    badge: 'دقة 4K'
  },
  {
    id: 'access-control-locks',
    titleAr: 'الأقفال وأجهزة الدخول الذكية',
    titleEn: 'Access Control & Smart Door Locks',
    subAr: 'دخول آمن عبر البصمة، الكود السري، البطاقة، أو تطبيق الهاتف',
    subEn: 'Biometric fingerprint, PIN, RFID card, and mobile app unlocking',
    descAr: 'حلول التحكم بالدخول وأقفال الأبواب الذكية للمنازل، الفلل، والمكاتب. تمنحك تحكماً كاملاً بمن يمكنه الدخول مع إمكانية إصدار رموز دخول مؤقتة للضيوف أو العمال، وسجلات مفصلة لمواعيد الدخول.',
    descEn: 'Advanced biometric access control and keyless smart door locks for residences, villas, and corporate offices. Issue temporary OTP pins for guests, track access logs, and unlock doors remotely.',
    icon: 'Lock',
    image: smartLockImg,
    featuresAr: [
      'فتح القفل ببصمة الإصبع السريعة (أقل من 0.3 ثانية)',
      'توليد كلمات مرور مؤقتة للزوار وعمال الصيانة',
      'إنذار ذكي عند محاولة العبث أو إدخال رمز خاطئ',
      'قفل أوتوماتيكي ومفتاح ميكانيكي للطوارئ'
    ],
    featuresEn: [
      'Ultra-fast semiconductor fingerprint sensor (<0.3s)',
      'Temporary guest PINs and time-restricted access',
      'Anti-tamper alarm and abnormal intrusion alerts',
      'Automatic locking mechanism and mechanical backup key'
    ],
    protocols: ['Bluetooth BLE', 'Zigbee', 'WiFi', 'RFID 13.56MHz']
  },
  {
    id: 'burglar-alarm',
    titleAr: 'أنظمة الإنذار ضد السرقة',
    titleEn: 'Burglar Alarm Systems',
    subAr: 'حماية متكاملة ومستشعرات حركة وكواشف فتح الأبواب والنوافذ',
    subEn: 'Intruder detection sensors, door/window contacts & sirens',
    descAr: 'شبكة استشعار أمنية متقدمة تحيط بمنزلك أو منشأتك. تشمل كواشف حركة بالأشعة تحت الحمراء، كواشف كسر الزجاج، مستشعرات الأبواب، وصفارات إنذار عالية الصوت مع اتصال فوري بالهاتف.',
    descEn: 'Comprehensive intrusion alarm network shielding your property. Featuring dual-tech PIR motion sensors, glass-break detectors, door/window magnetic contacts, and loud sirens with GSM/IP dialing.',
    icon: 'Bell',
    image: smartAlarmImg,
    featuresAr: [
      'مستشعرات حركة ذكية تتجاهل الحيوانات الأليفة',
      'كواشف فتح الأبواب والنوافذ وكسر الزجاج',
      'صفارات إنذار داخلية وخارجية مع إضاءة تحذيرية',
      'إشعار فوري عبر الاتصال ورسائل SMS والتطبيق'
    ],
    featuresEn: [
      'Pet-immune PIR motion detectors',
      'Magnetic door/window and perimeter vibration sensors',
      'Strobe sirens for indoor and outdoor warning deterrence',
      'Instant notifications via automatic phone calls and push alerts'
    ],
    protocols: ['Wireless RF 868MHz', 'GSM / 4G Backup', 'IP LAN']
  },
  {
    id: 'intercom-ip-telephone',
    titleAr: 'الانتركم البدال الذكي',
    titleEn: 'V/A Intercom & IP Telephone',
    subAr: 'تواصل صوتي ومرئي بدقة عالية مع فتح البوابة عن بُعد',
    subEn: 'HD audio/video intercom with remote gate release & IP PBX',
    descAr: 'أنظمة الانتركم المرئي الرقمية والهواتف الشبكية (IP PBX). يمكنك الرد على جرس الباب والتحدث مع الزائر ورؤيته وفتح البوابة الخارجية مباشرة من شاشة الانتركم أو من هاتفك المحمول أينما كنت.',
    descEn: 'Digital video intercom and IP PBX communication systems. Answer doorbell calls, speak with visitors in crisp HD video, and unlock entrance gates from anywhere using your smartphone or wall monitors.',
    icon: 'PhoneCall',
    image: smartIntercomImg,
    featuresAr: [
      'كاميرا انتركم خارجية بزاوية رؤية عريضة 180 درجة',
      'شاشات لمس داخلية أنيقة بدقة عالية مع ميزة الاتصال بين الغرف',
      'الرد على الزوار وفتح الأبواب عن بُعد عبر الهاتف الذكي',
      'دمج كامل مع بدالات IP للشركات والمجمعات السكنية'
    ],
    featuresEn: [
      '180-degree wide-angle camera with night illumination',
      'Sleek indoor touchscreen monitors with room-to-room intercom',
      'Remote call answering and gate unlock from smartphones',
      'Complete integration with corporate IP PBX systems'
    ],
    protocols: ['SIP Protocol', 'PoE', 'RTSP', 'Cloud Gateways']
  },
  {
    id: 'smart-curtains',
    titleAr: 'الستائر الذكية Automations',
    titleEn: 'Smart Curtain Motors & Control',
    subAr: 'محركات ستائر فائقة الهدوء تفتح وتغلق آلياً حسب الوقت أو الإضاءة',
    subEn: 'Ultra-silent motorized curtains automated by sunlight or schedule',
    descAr: 'تحكم ذكي بالستائر الرول والستائر القماشية بمحركات هادئة جداً. يمكنك ضبط الستائر لتفتح تلقائياً مع شروق الشمس أو تغلق عند الظهيرة للحفاظ على برودة المنزل وتوفير طاقة التكييف.',
    descEn: 'Smart motorized control for drapery tracks and roller shades powered by whisper-quiet motors. Schedule blinds to open at sunrise or close automatically during peak daylight to save cooling energy.',
    icon: 'Layers',
    image: smartCurtainsImg,
    featuresAr: [
      'محركات فائقة الهدوء بمستوى صوت أقل من 30 ديسيبل',
      'فتح وإغلاق يدوي باللمس الخفيف مع متابعة آلية للمحرك',
      'تكامل مع مستشعرات أشعة الشمس لتوفير التكييف',
      'تحكم عبر أزرار الحائط، الريموت، أو الأوامر الصوتية'
    ],
    featuresEn: [
      'Whisper-quiet brushless motors (<30dB acoustic profile)',
      'Touch-motion start: gentle tug activates full motorized glide',
      'Automated sun-tracking for optimal interior climate control',
      'Controlled via wall switch, RF remote, app, or voice assistants'
    ],
    protocols: ['Zigbee 3.0', 'Dry Contact', 'RS485', 'RF 433MHz']
  },
  {
    id: 'structured-cabling-network',
    titleAr: 'الشبكات وتكنولوجيا المعلومات',
    titleEn: 'Structured Cabling & Network/IT',
    subAr: 'بنية تحتية سلكية ولاسلكية سريعة ومستقرة تغطي كافة أرجاء المنشأة',
    subEn: 'High-speed structured cabling, Wi-Fi 6 coverage & rack IT setup',
    descAr: 'تأسيس وتمديد شبكات الإنترنت وكابلات الألياف والشبكات النحاسية (Cat6/Cat7). توزيع نقاط واي فاي ميزانية احترافية (Wi-Fi 6 Mesh) تضمن تغطية قوية وبدون انقطاع لكافة الأجهزة الذكية وكاميرات المراقبة.',
    descEn: 'Certified low-current and structured cabling infrastructure (Cat6A/Cat7 & Fiber). Enterprise-grade Wi-Fi 6 mesh distribution delivering seamless roaming and zero dead zones for IoT and streaming.',
    icon: 'Network',
    image: smartNetworkImg,
    featuresAr: [
      'شبكة واي فاي Wi-Fi 6 موحدة وسريعة بدون تقطيع في أي زاوية',
      'تنظيم كبائن السيرفرات (Server Racks) مع ترقيم وفحص الكابلات',
      'عزل شبكة أجهزة المنزل الذكي والكاميرات لأقصى درجات الأمان',
      'حلول سويتشات PoE مدارة لدعم كافة الأنظمة الحيوية'
    ],
    featuresEn: [
      'Seamless Wi-Fi 6 roaming coverage with no signal drops',
      'Structured rack management with cable certification testing',
      'VLAN isolation for IoT devices and CCTV to ensure cyber safety',
      'Managed PoE switches powering all critical smart endpoints'
    ],
    protocols: ['Cat6A / Cat7', 'Fiber Optic', 'Wi-Fi 6 / 6E', 'Gigabit PoE']
  },
  {
    id: 'home-cinema-audio',
    titleAr: 'السينما المنزلية والصوتيات',
    titleEn: 'Home Cinema & Audio Systems',
    subAr: 'تجربة سينمائية غامرة بنظام Dolby Atmos وصوتيات موزعة متعددة المناطق',
    subEn: 'Dolby Atmos home theater and multi-zone distributed audio',
    descAr: 'تصميم وتركيب قاعات السينما المنزلية الاحترافية مع معالجة صوتية وشاشات عرض عملاقة بدقة 4K HDR. بالإضافة إلى نظام صوتيات موزع يتيح تشغيل الموسيقى في كل غرفة أو الحديقة بشكل مستقل ومبهر.',
    descEn: 'Design and engineering of custom home theater rooms featuring acoustic treatment, 4K HDR laser projection, and immersive Dolby Atmos surround sound, plus multi-room distributed audio zones.',
    icon: 'Film',
    image: smartCinemaImg,
    featuresAr: [
      'نظام صوت محيطي ثلاثي الأبعاد Dolby Atmos و DTS:X',
      'شاشات عرض ليزرية عملاقة 4K مع ستائر عزل ضوئي',
      'صوتيات موزعة في الغرف والحديقة مع تحكم مستقل لكل منطقة',
      'إضاءة خافتة سينمائية تتدرج تلقائياً مع بدء تشغيل الفيلم'
    ],
    featuresEn: [
      'Immersive 3D audio architecture (Dolby Atmos & DTS:X)',
      '4K HDR laser projection on acoustically transparent screens',
      'Multi-zone distributed audio for indoor rooms and outdoor patio',
      'Automated mood lighting that dims smoothly as movie begins'
    ],
    protocols: ['AirPlay 2', 'Dante Audio', 'HDMI 2.1', 'Optical / Coax']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    titleAr: '1. تحديد الاحتياجات',
    titleEn: '1. Requirements Discovery',
    descAr: 'تحديد المتطلبات المبدئية مثل التحكم بالإضاءة، التكييف، الأمان والترفيه بدقة متناهية مع دراسة مساحات المنشأة.',
    descEn: 'Consulting with the client to define specific needs: lighting control, climate, security, entertainment, and budget limits.',
    icon: 'ClipboardList',
    detailsAr: [
      'جلسة استشارية أولية لفهم تطلعات المالك والمهندس المعماري',
      'تحديد المساحات والمناطق المراد أتمتتها (داخلي وخارجي)',
      'اختيار مستوى الذكاء المطلوب والأنظمة المستهدفة'
    ],
    detailsEn: [
      'Initial consultation with the client and interior architect',
      'Mapping zones and rooms for automation (indoor & outdoor)',
      'Defining the targeted smart tier and automation scope'
    ]
  },
  {
    step: '02',
    titleAr: '2. العرض التوضيحي (Demo)',
    titleEn: '2. Live Demo Experience',
    descAr: 'تزويد العميل بعرض تفصيلي لكيفية عمل المنتجات والأنظمة ورؤية تجربة حية للتحكم باللمس والصوت قبل البدء.',
    descEn: 'Providing the client with a hands-on demonstration of smart devices, touchscreen panels, and automated scenes in action.',
    icon: 'PlayCircle',
    detailsAr: [
      'تجربة عملية لأزرار وشاشات التحكم الذكية الفاخرة',
      'معاينة سيناريوهات الإضاءة، حركة الستائر، واستجابة الكاميرات',
      'الإجابة على جميع الاستفسارات الفنية والتقنية'
    ],
    detailsEn: [
      'Hands-on interaction with designer smart keypads and wall panels',
      'Showcasing live scenes: Welcome, Cinematic, Night, Away',
      'Technical briefing on mobile app controls and security'
    ]
  },
  {
    step: '03',
    titleAr: '3. التصميم المخطط',
    titleEn: '3. Engineering & Schematics',
    descAr: 'تصميم نظام يتناسب تماماً مع احتياجاتك واستناداً للمخططات المعمارية والتنفيذية لضمان التأسيس الدقيق.',
    descEn: 'Engineering detailed wiring diagrams, low-current conduit pathways, and load schedules matching the architectural drawings.',
    icon: 'FileCode',
    detailsAr: [
      'إعداد المخططات التنفيذية للتيار الخفيف (Low Current Shop Drawings)',
      'تحديد مسارات الكابلات ولوحات التحكم ومواقع الحساسات بدقة',
      'التنسيق التام مع مهندس الكهرباء والمقاول العام'
    ],
    detailsEn: [
      'Preparation of low-current shop drawings and load distribution',
      'Cable routing schedules, sensor placements, and panel layout',
      'Coordination with site electrical engineers and contractors'
    ]
  },
  {
    step: '04',
    titleAr: '4. التوريد والتركيب',
    titleEn: '4. Supply & Precision Installation',
    descAr: 'بدء عملية توريد المعدات الأصلية وتركيب وتكامل أنظمة الأتمتة على أيدي مهندسين وفنيين معتمدين.',
    descEn: 'Procuring certified equipment, cable pulling, device mounting, and hardware programming by qualified smart engineers.',
    icon: 'Cpu',
    detailsAr: [
      'توريد أحدث أجهزة الأتمتة المعتمدة عالمياً وبضمان معتمد',
      'تركيب اللوحات والمفاتيح والمحركات بأعلى معايير الدقة',
      'برمجة الحساسات وتكامل الأجهزة مع المنظومة المركزية'
    ],
    detailsEn: [
      'Supply of authentic certified smart hardware with warranties',
      'Physical installation of controllers, actuators, and motorized gear',
      'System programming, cloud pairing, and local gateway setup'
    ]
  },
  {
    step: '05',
    titleAr: '5. الفحص والدعم',
    titleEn: '5. Commissioning & 24/7 Support',
    descAr: 'فحص شامل من مهندسين متخصصين، تسليم النظام وشرحه للمالك، مع تقديم دعم فني متواصل على مدار الساعة.',
    descEn: 'Full commissioning and stress testing, client training, and continuous 24/7 post-handover technical support.',
    icon: 'ShieldCheck',
    detailsAr: [
      'اختبار كافة السيناريوهات والأنظمة في مختلف ظروف التشغيل',
      'تدريب العميل على استخدام التطبيق والشاشات وتخصيص المشاهد',
      'عقود صيانة دورية ودعم فني سريع ومباشر على مدار الساعة'
    ],
    detailsEn: [
      'Rigorous commissioning and fail-safe testing across all systems',
      'Comprehensive client walkthrough and mobile app personalization',
      'Dedicated 24/7 technical hotline and scheduled maintenance'
    ]
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    titleAr: 'فيلا القمة الذكية - دبي',
    titleEn: 'Al Qimma Luxury Smart Villa - Dubai',
    categoryAr: 'فلل سكنية فاخرة',
    categoryEn: 'Luxury Residential',
    locationAr: 'تلال الإمارات، دبي',
    locationEn: 'Emirates Hills, Dubai',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    descAr: 'أتمتة شاملة لفيلا فارهة على مساحة 1400 متر مربع تشمل 8 غرف نوم، مجالس، حدائق، وسينما منزلية مع تحكم كامل بنظام KNX و Zigbee.',
    descEn: 'Full smart transformation of a 1,400 sqm luxury villa including 8 master suites, outdoor lounges, and private cinema powered by KNX & Zigbee.',
    systemsUsed: ['أتمتة KNX', 'كاميرات 4K AI', 'أقفال بيومترية', 'ستائر آلية', 'سينما Dolby Atmos'],
    resultsAr: 'توفير 38% من استهلاك الطاقة وتحكم صوتي كامل في جميع أرجاء الفيلا',
    resultsEn: '38% energy reduction and hands-free voice automation across all living spaces'
  },
  {
    id: 'proj-2',
    titleAr: 'فندق ونادي بالاس ريزورت',
    titleEn: 'Palace Resort & Boutique Hotel',
    categoryAr: 'قطاع الضيافة والفنادق',
    categoryEn: 'Hospitality & Hotels',
    locationAr: 'شرم الشيخ، مصر',
    locationEn: 'Sharm El Sheikh, Egypt',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    descAr: 'تركيب نظام إدارة الغرف الفندقية الذكي (GRMS) لـ 120 جناحاً فاخراً مع بطاقات دخول ذكية ومستشعرات ترشيد تكييف الهواء.',
    descEn: 'Implementation of smart Guest Room Management System (GRMS) across 120 luxury suites with RFID keyless entry and occupancy-driven climate control.',
    systemsUsed: ['أنظمة إدارة غرف الفنادق GRMS', 'أقفال RFID الفندقية', 'شبكة Wi-Fi 6 سريعة', 'مراقبة CCTV مركزية'],
    resultsAr: 'رفع رضا النزلاء بنسبة 45% وخفض تكلفة التكييف غير الضروري بنسبة 30%',
    resultsEn: '45% increase in guest review scores and 30% reduction in HVAC overhead'
  },
  {
    id: 'proj-3',
    titleAr: 'المقر الإداري لشركة تكفيست',
    titleEn: 'TechVest Corporate Headquarters',
    categoryAr: 'مباني إدارية وتجارية',
    categoryEn: 'Corporate & Commercial',
    locationAr: 'القرية الذكية، الجيزة، مصر',
    locationEn: 'Smart Village, Giza, Egypt',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    descAr: 'تجهيز مقر إداري متكامل بأنظمة الدخول ببصمة الوجه، بدالة IP هاتفية متطورة، كبائن سيرفرات منظمة، وقاعات اجتماعات ذكية.',
    descEn: 'Turnkey smart deployment for a corporate HQ featuring facial recognition access control, IP PBX telephone exchange, structured server racks, and automated boardrooms.',
    systemsUsed: ['التحكم بالدخول ببصمة الوجه', 'الانتركم والبدالة الذكية', 'تمديدات الشبكات Cat6A', 'إنذار ضد التسلل'],
    resultsAr: 'أمان رقمي مشدد وتحكم بمرونة وصول 250 موظفاً بكفاءة تامة',
    resultsEn: 'Tight cyber-physical security managing access for 250+ employees seamlessly'
  },
  {
    id: 'proj-4',
    titleAr: 'قاعة السينما الخاصة - فيلا النخيل',
    titleEn: 'Private Home Cinema - Al Nakheel Villa',
    categoryAr: 'سينما وصوتيات منزلية',
    categoryEn: 'Home Cinema & Acoustics',
    locationAr: 'الرياض، المملكة العربية السعودية',
    locationEn: 'Riyadh, Saudi Arabia',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1200&auto=format&fit=crop',
    descAr: 'تصميم قاعة سينما خاصة تتسع لـ 10 أفراد مع عزل صوتي متقن، شاشة عرض ليزرية 150 بوصة بنظام صوت 7.2.4 Dolby Atmos.',
    descEn: 'Dedicated 10-seat private home theater featuring engineered acoustic wall panels, a 150-inch 4K laser projection screen, and a 7.2.4 Dolby Atmos speaker array.',
    systemsUsed: ['صوتيات Dolby Atmos', 'بروجيكتور 4K ليزري', 'عزل صوتي متقدم', 'إضاءة ألياف ضوئية ستارلايت'],
    resultsAr: 'تجربة سينمائية استثنائية تفوق صالات السينما التجارية وبضغطة زر واحدة',
    resultsEn: 'Cinema-grade immersion with one-touch "Movie Time" automated scene'
  }
];

export const FAQS = [
  {
    id: 'f1',
    qAr: 'هل يمكن تركيب النظام الذكي في منزل قديم دون تكسير الجدران؟',
    qEn: 'Can the smart system be installed in an existing home without breaking walls?',
    aAr: 'نعم، بالتأكيد. نوفر أنظمة لاسلكية متطورة (مثل تقنية Zigbee و WiFi) تتيح لنا تحويل منزلك الحالي إلى منزل ذكي بالكامل دون الحاجة إلى تكسير الجدران أو إعادة تمديد الأسلاك، حيث يتم استبدال المفاتيح التقليدية بمفاتيح ذكية خلال ساعات قليلة.',
    aEn: 'Yes, absolutely. We provide advanced wireless protocols (such as Zigbee 3.0 and Wi-Fi) that allow converting existing residences into full smart homes without chiseling walls or re-wiring. Traditional wall switches are simply replaced with smart modules in just a few hours.',
  },
  {
    id: 'f2',
    qAr: 'هل يمكنني التحكم في النظام وأنا خارج المنزل أو مسافر؟',
    qEn: 'Can I control the system when I am outside the house or traveling abroad?',
    aAr: 'نعم، يمكنك التحكم في كافة تفاصيل منزلك (الإضاءة، التكييف، الأقفال، الكاميرات) من أي مكان في العالم عبر تطبيق الهاتف الذكي، طالما كان هاتفك متصلاً بالإنترنت.',
    aEn: 'Yes, you can monitor and manage every aspect of your home (lighting, HVAC climate, smart locks, and live CCTV feeds) from anywhere in the world via your smartphone, as long as you have internet access.',
  },
  {
    id: 'f3',
    qAr: 'هل تتوفر لديكم حلول مخصصة للفنادق والمشاريع الكبيرة؟',
    qEn: 'Do you offer specialized solutions for hotels and hospitality projects?',
    aAr: 'نعم، نقدم أنظمة متكاملة للفنادق تشمل كروت الدخول الذكية، والتحكم بالطاقة في الغرف لتقليل الاستهلاك، وإدارة خدمة الغرف، بالإضافة إلى ربطها بنظام إدارة الفندق (PMS) لمراقبة وتحكم مركزي فعال.',
    aEn: 'Yes, we provide turnkey hotel guest room management systems (GRMS) including RFID keycards, automated room energy saving, do-not-disturb/make-up-room indicators, and integration with hotel PMS software for central visibility.',
  },
  {
    id: 'f4',
    qAr: 'ماذا يحدث للأنظمة الذكية عند انقطاع الإنترنت أو التيار الكهربائي؟',
    qEn: 'What happens to the smart systems during an internet outage or power cut?',
    aAr: 'جميع الأنظمة تظل تعمل يدوياً وبشكل محلي عبر المفاتيح الجدارية العادية حتى لو انقطع الإنترنت. وفي حال انقطاع التيار الكهربائي، تعود الأجهزة لحالتها السابقة فور عودة الكهرباء، كما نوفر بطاريات احتياطية (UPS) لأنظمة الأمان والأقفال الذكية.',
    aEn: 'All systems continue to function locally and manually via physical wall switches even if the internet drops. When power resumes, devices restore their prior states automatically. Security alarms and smart locks are protected with battery backups.',
  },
  {
    id: 'f5',
    qAr: 'ما هي فترة الضمان المقدمة على الأجهزة وخدمات التركيب؟',
    qEn: 'What is the warranty period for hardware and installation services?',
    aAr: 'نقدم ضماناً حقيقياً شاملاً يصل حتى 5 سنوات على الأجهزة الأصلية المعتمدة، وضمان عام كامل على أعمال التمديدات والتركيب والبرمجة، بالإضافة إلى خدمة الدعم الفني والصيانة الدورية.',
    aEn: 'We provide an authentic full warranty of up to 5 years on certified genuine hardware, and a comprehensive 1-year warranty on wiring, installation, and programming, accompanied by 24/7 technical hotlines and periodic maintenance.',
  },
];

export const SMART_FAQ = FAQS;

