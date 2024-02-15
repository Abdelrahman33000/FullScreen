export const VALIDATION_RULES = {
  isMobile:
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
  isEmail:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.com$/,
  isCharacters: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
};

export const FORM_VALIDATION = {
  fullName: {
    required: "الرجاء ادخال الاسم",
  },
  firstName: {
    required: "الرجاء ادخال الاسم الاول",
  },
  lastName: {
    required: "الرجاء ادخال الاسم الثاني",
  },
  subject: {
    required: "الرجاء ادخال اسم الموضوع",
  },
  comment: {
    required: "الرجاء ادخال نص الرسالة",
  },
  email: {
    required: "الرجاء ادخال البريد الالكتروني",
    pattern: {
      value: VALIDATION_RULES.isEmail,
      pattern:
        "عنوان البريد الإلكتروني غير صالح. يجب ان يحتوي @ ,.,com,gmail or hotmail",
    },
  },
  location: {
    required: "الرجاء ادخال عنوان السكن",
  },
  specialization: {
    required: "الرجاء ادخال التخصص",
  },
  degree: {
    required: "الرجاء ادخال الدرجة العلمية",
  },

  mobile: {
    required: "يُرجى إدخال رقم الهاتف",
    pattern: {
      value: VALIDATION_RULES.isMobile,
      message: "رقم الهاتف غير صالح",
    },
  },
};
