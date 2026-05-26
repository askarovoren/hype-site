/**
 * HYPE by Gali Miller — single source of truth for all site content.
 *
 * Edit here to update any text, link, or contact detail on the site.
 *
 * Voice rules (never break):
 * - Hebrew everywhere. "HYPE by Gali Miller" stays in English.
 * - Audience addressed as אתן (formal feminine plural).
 * - No aggressive fitness language.
 * - Warm, eye-level, empowering tone.
 */

export const siteConfig = {
  whatsappNumber: '972526023773',
  whatsappMessage: 'שלום גלי, אני אשמח לקבל יותר פרטים על האימונים שלך...',
  instagramUrl: 'https://www.instagram.com/galimi/',
  instagramHandle: '@galimi',
  facebookUrl: 'https://www.facebook.com/millgali',
  facebookHandle: 'HYPE by Gali Miller',
  location: 'ישראל',
  hours: "ימים א'–ה', 09:00–18:00",
  // Google Apps Script endpoint for form submissions (leave empty until deployed)
  formEndpoint: 'https://script.google.com/macros/s/AKfycbyzhgExLgy9pG56EhfR7-zvB53THiDSJOtLpm2pqq04Rb4hvI4kw6KOAZ-sZkuiHAZfQQ/exec',
}

export const nav = {
  brand: 'HYPE by Gali Miller',
  cta: { label: 'בואו נכיר', href: '#contact' },
  links: [
    { label: 'השירותים', href: '#services' },
    { label: 'למה היפופרסיב', href: '#why' },
    { label: 'עליי', href: '#about' },
    { label: 'יצירת קשר', href: '#contact' },
  ],
}

export const hero = {
  eyebrow: 'HYPE by Gali Miller',
  headline: 'תרגול שמחזיר אתכן לגוף שלכן.',
  subheadline: 'סדנאות היפופרסיב ואימון אישי לנשים שמחפשות חוזק עמוק, נשימה אמיתית, וחיבור מחודש לגוף — במיוחד אחרי לידה.',
  primaryCta: { label: 'בואו נכיר', href: '#contact' },
  secondaryCta: { label: 'מה אני מציעה לכן ↓', href: '#services' },
}

export const services = {
  label: 'השירותים',
  heading: 'מה אני מציעה לכן',
  intro: 'ארבע דרכים להתחיל את המסע שלכן — בקבוצה, באישי, או בארגון. כל מסלול עוצב בקפידה כדי שתרגישו בנוח מהרגע הראשון.',
  cta: { label: 'פרטים נוספים', href: '#contact' },
  items: [
    {
      color: 'lilac',
      title: 'סדנאות היפופרסיב לנשים בחופשת לידה',
      body: 'מסע שיקום עדין אחרי לידה — לחיזוק רצפת האגן, שיקום שרירי הליבה העמוקים, וחיבור מחודש לגוף שעבר שינוי כל כך גדול.',
    },
    {
      color: 'turquoise',
      title: 'סדנאות היפופרסיב לנשים',
      body: 'תרגול בקבוצה קטנה לכל אישה שרוצה ללמוד את שיטת ההיפופרסיב לעומק — לחזק את הליבה, לשפר יציבה, ולנשום אחרת.',
    },
    {
      color: 'pink',
      title: 'אימון אישי',
      body: 'ליווי אחד-על-אחד מותאם בדיוק לכן — לגוף שלכן, לקצב שלכן, ולמטרות שלכן. תרגול שמכבד את מי שאתן באמת.',
    },
    {
      color: 'peach',
      title: 'הרצאות לנשים וארגונים',
      body: 'הרצאות מעמיקות על נשימה, יציבה, ובריאות נשית — לקבוצות נשים, חברות, וארגונים שרוצים להעניק לעצמן יותר.',
    },
  ],
}

export const why = {
  label: 'למה היפופרסיב?',
  heading: 'למה דווקא היפופרסיב?',
  intro: 'היפופרסיב היא שיטה ייחודית של תרגילי נשימה ותנוחה שמפעילה את שרירי הליבה העמוקים שלכן — אלה שלא מגיעים אליהם באימון רגיל. השיטה מתאימה במיוחד לנשים אחרי לידה, אבל מתאימה לכל אישה שרוצה להבין את הגוף שלה לעומק.',
  benefits: [
    { icon: '🌿', title: 'חיזוק רצפת אגן', body: 'תרגול עדין שמשקם ומחזק את רצפת האגן — חיוני אחרי לידה, חשוב לכל אישה.' },
    { icon: '💧', title: 'ליבה עמוקה', body: 'מפעיל את שרירי הליבה הפנימיים שאחראים על יציבה יציבה, גב בריא, ותחושת ביטחון בגוף.' },
    { icon: '🌸', title: 'יציבה טובה יותר', body: 'משחרר מתחים מצטברים, מאריך את הגוף, ומחזיר אותו לתנוחה הטבעית והבריאה שלו.' },
    { icon: '☁️', title: 'נשימה מודעת', body: 'מלמד אתכן לנשום באמת — כלי שילווה אתכן הרבה מעבר לתרגול בסטודיו.' },
  ],
}

export const about = {
  label: 'קצת עליי',
  heading: 'קצת עליי',
  paragraphs: [
    'שמי גלי מילר, מאמנת אישית ומדריכת היפופרסיב.',
    'התחלתי את הדרך הזו אחרי שהבנתי משהו פשוט: הגוף שלנו לא צריך עוד אימון קשה ועוד לחץ — הוא צריך הקשבה אמיתית. שיטת ההיפופרסיב נתנה לי בדיוק את זה, ושינתה את הקשר שלי לגוף שלי מהיסוד.',
    'היום אני מלווה נשים שמחפשות לחזור לגוף שלהן — אחרי לידה, אחרי שנים של ניתוק, או פשוט כי הגיע הזמן.',
  ],
  pullQuote: '"אני מאמינה שכל אישה ראויה להרגיש חזקה, מחוברת, ובטוחה בגוף שלה — בלי לחץ, בלי כאב, ובלי השוואות."',
}

export const whoFor = {
  heading: 'זה בשבילכן אם…',
  items: [
    'אם אתן רוצות להתחבר מחדש לגוף שלכן אחרי לידה',
    'אם אתן מחפשות אימון נשי שלא מרגיש כמו עונש',
    'אם אתן רוצות לדעת איך באמת לחזק את הליבה — מבפנים החוצה',
    'אם אתן רוצות תרגול שמתאים גם לאמהות עסוקות',
    'אם אתן מחפשות ידע אמיתי על הגוף שלכן, לא קלישאות',
    'אם אתן רוצות להרגיש חזקות, מחוברות, ובטוחות בעצמכן',
  ],
  cta: { label: 'אז בואו נכיר', href: '#contact' },
}

export const testimonials = {
  heading: 'מה אומרות הנשים שכבר התחילו',
  note: 'ציטוטים אלו הם placeholder עד שנחליף אותם בהמלצות אמיתיות.',
  items: [
    {
      color: 'lilac',
      quote: 'הגעתי אחרי לידה שנייה כשהרגשתי שהגוף שלי כבר לא שלי. גלי החזירה לי את התחושה הזו לאט ובסבלנות — והיום אני בכלל יודעת איך לנשום.',
      name: 'דנה',
      context: 'אחרי לידה שנייה, תל אביב',
    },
    {
      color: 'turquoise',
      quote: 'התרגול עם גלי הוא הזמן היחיד בשבוע שמרגיש כל-כולו שלי. אני יוצאת חזקה, רגועה, וברורה לעצמי.',
      name: 'מיכל',
      context: 'רמת גן',
    },
    {
      color: 'peach',
      quote: 'חיפשתי הרבה זמן מאמנת שתדבר אליי בגובה העיניים, בלי לחץ ובלי שיפוט. מצאתי אצל גלי בדיוק את זה.',
      name: 'שירה',
      context: 'חיפה',
    },
  ],
}

export const contact = {
  label: 'יצירת קשר',
  heading: 'נשמח לשמוע מכן',
  intro: 'השאירו פרטים ואחזור אליכן בקרוב — או שכתבו לי ישירות בוואטסאפ, מה שנוח לכן יותר.',
  form: {
    fields: {
      firstName: { label: 'שם פרטי', placeholder: 'איך לקרוא לכן?' },
      lastName: { label: 'שם משפחה', placeholder: 'שם המשפחה שלכן' },
      contact: { label: 'טלפון או אימייל', placeholder: 'איך הכי נוח לכן שאחזור אליכן?' },
      message: { label: 'מה הכי מעניין אתכן?', labelHint: '(אופציונלי)', placeholder: 'ספרו לי בכמה משפטים מה אתן מחפשות' },
    },
    submitLabel: 'שליחה',
    successHeading: '!תודה',
    successBody: 'קיבלתי את הפרטים שלכן ואחזור אליכן בהקדם. אם זה דחוף — בואו בוואטסאפ.',
    errorBody: 'הטופס לא נשלח. אפשר לנסות שוב, או לכתוב לי ישירות בוואטסאפ.',
  },
  whatsapp: {
    heading: 'או דברו איתי ישירות',
    body: 'לפעמים שיחה קצרה בוואטסאפ יותר נוחה — אני זמינה ושמחה לענות על כל שאלה, גם אם אתן עדיין מתלבטות.',
    label: 'דברו איתי בוואטסאפ',
  },
}

export const footer = {
  brand: 'HYPE by Gali Miller',
  copyright: '© 2026 HYPE by Gali Miller · כל הזכויות שמורות',
}
