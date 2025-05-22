// Mock project data
export interface Project {
  id: number
  slug: string
  title: string
  titleAr?: string
  category: string
  image: string
  shortDescription: string
  shortDescriptionAr?: string
  longDescription: string
  longDescriptionAr?: string
  technologies: string[]
  role: string
  roleAr?: string
  externalLink?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    titleAr: "تصميم هوية بصرية",
    category: "design",
    image: `/placeholder.svg?height=600&width=800&text=Design+Project`,
    shortDescription: "Complete brand identity redesign for a tech startup.",
    shortDescriptionAr: "إعادة تصميم كاملة للهوية البصرية لشركة تقنية ناشئة.",
    longDescription:
      "We created a comprehensive brand identity system for a tech startup that was looking to reposition itself in the market. The project included logo design, color palette development, typography selection, and creation of brand guidelines. Our approach focused on creating a modern, versatile identity that would resonate with their target audience while conveying innovation and reliability.",
    longDescriptionAr:
      "قمنا بإنشاء نظام هوية بصرية شامل لشركة تقنية ناشئة كانت تتطلع إلى إعادة تموضعها في السوق. تضمن المشروع تصميم الشعار، وتطوير لوحة الألوان، واختيار الخطوط، وإنشاء إرشادات العلامة التجارية. ركز نهجنا على إنشاء هوية عصرية ومتعددة الاستخدامات تتناغم مع جمهورهم المستهدف مع نقل الابتكار والموثوقية.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    role: "Lead Designer",
    roleAr: "مصمم رئيسي",
    externalLink: "https://example.com/project1",
  },
  {
    id: 2,
    slug: "commercial-video",
    title: "Commercial Video",
    titleAr: "فيديو إعلاني",
    category: "editing",
    image: `/placeholder.svg?height=600&width=800&text=Editing+Project`,
    shortDescription: "High-impact commercial video for a luxury brand.",
    shortDescriptionAr: "فيديو إعلاني عالي التأثير لعلامة تجارية فاخرة.",
    longDescription:
      "We produced a 60-second commercial video for a luxury fashion brand's seasonal collection. The project involved concept development, storyboarding, filming, and post-production. Our team worked closely with the client to capture their brand essence while creating visually stunning content that would engage their audience across multiple platforms.",
    longDescriptionAr:
      "أنتجنا فيديو إعلاني مدته 60 ثانية لمجموعة موسمية لعلامة تجارية للأزياء الفاخرة. تضمن المشروع تطوير المفهوم، وإعداد اللوحات المصورة، والتصوير، ومرحلة ما بعد الإنتاج. عمل فريقنا بشكل وثيق مع العميل لالتقاط جوهر علامتهم التجارية مع إنشاء محتوى مذهل بصريًا من شأنه أن يجذب جمهورهم عبر منصات متعددة.",
    technologies: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve"],
    role: "Video Editor & Colorist",
    roleAr: "محرر فيديو ومصحح ألوان",
    externalLink: "https://example.com/project2",
  },
  {
    id: 3,
    slug: "motion-graphics",
    title: "Motion Graphics",
    titleAr: "رسوم متحركة",
    category: "motion",
    image: `/placeholder.svg?height=600&width=800&text=Motion+Project`,
    shortDescription: "Engaging motion graphics for product launch campaign.",
    shortDescriptionAr: "رسوم متحركة جذابة لحملة إطلاق منتج.",
    longDescription:
      "We designed and animated a series of motion graphics for a major product launch campaign. The animations were used across social media, the company website, and at the launch event. Our creative approach focused on highlighting the product's key features while maintaining a cohesive visual language that aligned with the brand's identity.",
    longDescriptionAr:
      "قمنا بتصميم وتحريك سلسلة من الرسوم المتحركة لحملة إطلاق منتج رئيسي. تم استخدام الرسوم المتحركة عبر وسائل التواصل الاجتماعي، وموقع ا��شركة على الإنترنت، وفي حدث الإطلاق. ركز نهجنا الإبداعي على إبراز الميزات الرئيسية للمنتج مع الحفاظ على لغة بصرية متماسكة تتماشى مع هوية العلامة التجارية.",
    technologies: ["Adobe After Effects", "Cinema 4D", "Illustrator"],
    role: "Motion Designer",
    roleAr: "مصمم حركة",
    externalLink: "https://example.com/project3",
  },
  {
    id: 4,
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    titleAr: "حملة وسائل التواصل",
    category: "social",
    image: `/placeholder.svg?height=600&width=800&text=Social+Project`,
    shortDescription: "Comprehensive social media campaign for brand awareness.",
    shortDescriptionAr: "حملة شاملة على وسائل التواصل الاجتماعي للتوعية بالعلامة التجارية.",
    longDescription:
      "We developed and executed a three-month social media campaign across Instagram, Facebook, and TikTok to increase brand awareness for a new consumer product. The campaign included content strategy, creative direction, content creation, and performance analysis. Our approach resulted in a 45% increase in engagement and a 30% growth in followers across platforms.",
    longDescriptionAr:
      "قمنا بتطوير وتنفيذ حملة على وسائل التواصل الاجتماعي لمدة ثلاثة أشهر عبر Instagram و Facebook و TikTok لزيادة الوعي بالعلامة التجارية لمنتج استهلاكي جديد. تضمنت الحملة استراتيجية المحتوى، والتوجيه الإبداعي، وإنشاء المحتوى، وتحليل الأداء. أدى نهجنا إلى زيادة بنسبة 45٪ في المشاركة ونمو بنسبة 30٪ في المتابعين عبر المنصات.",
    technologies: ["Adobe Photoshop", "Canva", "Later", "Hootsuite"],
    role: "Social Media Strategist",
    roleAr: "استراتيجي وسائل التواصل الاجتماعي",
    externalLink: "https://example.com/project4",
  },
  {
    id: 5,
    slug: "voice-over-production",
    title: "Voice Over Production",
    titleAr: "تعليق صوتي",
    category: "voice",
    image: `/placeholder.svg?height=600&width=800&text=Voice+Project`,
    shortDescription: "Professional voice over for corporate explainer video.",
    shortDescriptionAr: "تعليق صوتي احترافي لفيديو شرح مؤسسي.",
    longDescription:
      "We produced high-quality voice over recordings for a series of corporate explainer videos. The project included script refinement, voice talent casting, recording sessions, and audio post-production. Our team ensured the voice over perfectly matched the visual content while conveying the brand's professional tone and message clearly to the audience.",
    longDescriptionAr:
      "أنتجنا تسجيلات تعليق صوتي عالية الجودة لسلسلة من مقاطع الفيديو التوضيحية للشركات. تضمن المشروع تحسين النص، واختيار المواهب الصوتية، وجلسات التسجيل، وما بعد إنتاج الصوت. تأكد فريقنا من أن التعليق الصوتي يتطابق تمامًا مع المحتوى المرئي مع نقل النبرة المهنية للعلامة التجارية ورسالتها بوضوح إلى الجمهور.",
    technologies: ["Pro Tools", "Adobe Audition", "Izotope RX"],
    role: "Audio Producer",
    roleAr: "منتج صوتي",
    externalLink: "https://example.com/project5",
  },
  {
    id: 6,
    slug: "video-shooting",
    title: "Video Shooting",
    titleAr: "تصوير فيديو",
    category: "shooting",
    image: `/placeholder.svg?height=600&width=800&text=Shooting+Project`,
    shortDescription: "Professional video shooting for corporate event.",
    shortDescriptionAr: "تصوير فيديو احترافي لحدث مؤسسي.",
    longDescription:
      "We provided comprehensive video production services for a major corporate event, including multi-camera setup, lighting design, and live direction. Our team captured keynote speeches, panel discussions, and networking moments, delivering both a live stream and edited highlight videos. The production quality ensured the client could effectively share the event content with stakeholders who couldn't attend in person.",
    longDescriptionAr:
      "قدمنا خدمات إنتاج فيديو شاملة لحدث مؤسسي كبير، بما في ذلك إعداد كاميرات متعددة، وتصميم الإضاءة، والتوجيه المباشر. قام فريقنا بتصوير الكلمات الرئيسية، والمناقشات الجماعية، ولحظات التواصل، وتقديم بث مباشر ومقاطع فيديو للأبرز النقاط. ضمنت جودة الإنتاج أن العميل يمكنه مشاركة محتوى الحدث بشكل فعال مع أصحاب المصلحة الذين لم يتمكنوا من الحضور شخصيًا.",
    technologies: ["Sony FS7", "DJI Ronin", "Aputure Lighting", "Sennheiser Audio"],
    role: "Director of Photography",
    roleAr: "مدير التصوير",
    externalLink: "https://example.com/project6",
  },
  {
    id: 7,
    slug: "website-design",
    title: "Website Design",
    titleAr: "تصميم موقع إلكتروني",
    category: "design",
    image: `/placeholder.svg?height=600&width=800&text=Design+Project+2`,
    shortDescription: "Modern, responsive website design for financial services firm.",
    shortDescriptionAr: "تصميم موقع ويب حديث ومتجاوب لشركة خدمات مالية.",
    longDescription:
      "We designed a modern, responsive website for a financial services firm that needed to update their digital presence. The project included UX research, wireframing, UI design, and developer handoff. Our design focused on creating a clean, professional aesthetic that inspired trust while making complex financial information accessible and easy to navigate for users of all technical abilities.",
    longDescriptionAr:
      "قمنا بتصميم موقع ويب حديث ومتجاوب لشركة خدمات مالية كانت بحاجة إلى تحديث وجودها الرقمي. تضمن المشروع أبحاث تجربة المستخدم، والتخطيط السلكي، وتصميم واجهة المستخدم، وتسليم المطور. ركز تصميمنا على إنشاء جمالية نظيفة ومهنية تلهم الثقة مع جعل المعلومات المالية المعقدة سهلة الوصول وسهلة التنقل للمستخدمين من جميع القدرات التقنية.",
    technologies: ["Figma", "Adobe XD", "Webflow"],
    role: "UX/UI Designer",
    roleAr: "مصمم تجربة المستخدم/واجهة المستخدم",
    externalLink: "https://example.com/project7",
  },
  {
    id: 8,
    slug: "video-editing",
    title: "Video Editing",
    titleAr: "مونتاج فيديو",
    category: "editing",
    image: `/placeholder.svg?height=600&width=800&text=Editing+Project+2`,
    shortDescription: "Documentary-style video editing for nonprofit organization.",
    shortDescriptionAr: "مونتاج فيديو بأسلوب وثائقي لمنظمة غير ربحية.",
    longDescription:
      "We edited a 30-minute documentary-style video for a nonprofit organization highlighting their work in underserved communities. The project involved organizing extensive footage, narrative structure development, pacing, color grading, and sound design. Our editing approach focused on telling an emotionally compelling story that would resonate with viewers and inspire action.",
    longDescriptionAr:
      "قمنا بتحرير فيديو بأسلوب وثائقي مدته 30 دقيقة لمنظمة غير ربحية تسلط الضوء على عملها في المجتمعات المحرومة من الخدمات. تضمن المشروع تنظيم لقطات مكثفة، وتطوير بنية السرد، والإيقاع، وتصحيح الألوان، وتصميم الصوت. ركز نهج التحرير لدينا على رواية قصة مؤثرة عاطفياً من شأنها أن تتردد صداها لدى المشاهدين وتلهم العمل.",
    technologies: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe Audition"],
    role: "Editor & Post-Production Supervisor",
    roleAr: "محرر ومشرف ما بعد الإنتاج",
    externalLink: "https://example.com/project8",
  },
  {
    id: 9,
    slug: "video-production",
    title: "Video Production",
    titleAr: "إنتاج فيديو",
    category: "shooting",
    image: `/placeholder.svg?height=600&width=800&text=Shooting+Project+2`,
    shortDescription: "Full-service video production for product launch event.",
    shortDescriptionAr: "إنتاج فيديو كامل الخدمات لحدث إطلاق منتج.",
    longDescription:
      "We provided end-to-end video production services for a major product launch event, including pre-production planning, on-site filming with multiple camera setups, and comprehensive post-production. Our team captured the excitement of the live event while creating polished content that could be repurposed across marketing channels. The final deliverables included a main event video, social media clips, and testimonial interviews.",
    longDescriptionAr:
      "قدمنا خدمات إنتاج فيديو من البداية إلى النهاية لحدث إطلاق منتج رئيسي، بما في ذلك تخطيط ما قبل الإنتاج، والتصوير في الموقع بإعدادات كاميرا متعددة، وما بعد الإنتاج الشامل. التقط فريقنا إثارة الحدث المباشر مع إنشاء محتوى مصقول يمكن إعادة استخدامه عبر قنوات التسويق. تضمنت التسليمات النهائية فيديو الحدث الرئيسي، ومقاطع وسائل التواصل الاجتماعي، ومقابلات الشهادات.",
    technologies: ["RED Camera", "DJI Drones", "Adobe Premiere Pro", "After Effects"],
    role: "Production Director",
    roleAr: "مدير الإنتاج",
    externalLink: "https://example.com/project9",
  },
]

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

// Helper function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") {
    return projects
  }
  return projects.filter((project) => project.category === category)
}
