import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressData {
  name: string;
  progress: number;
}

interface SubjectData {
  name: string;
  grade: number;
}

interface CompletionData {
  name: string;
  value: number;
}

interface ScheduleExam {
  time: string;
  subject: string;
}

interface Assignment {
  subject: string;
  title: string;
  due: string;
}

interface EducationalState {
  progressData: ProgressData[];
  subjectData: SubjectData[];
  completionData: CompletionData[];
  scheduleData: ScheduleExam[];
  assignments: Assignment[];
}

const initialState: EducationalState = {
  progressData: [
    { name: 'يناير', progress: 65 },
    { name: 'فبراير', progress: 78 },
    { name: 'مارس', progress: 80 },
    { name: 'أبريل', progress: 85 },
    { name: 'مايو', progress: 90 },
    { name: 'يونيو', progress: 94 },
  ],
  subjectData: [
    { name: 'يناير', grade: 85 },
    { name: 'فبراير', grade: 85 },
    { name: 'مارس', grade: 78 },
    { name: 'ابريل', grade: 92 },
    { name: 'مايو', grade: 88 },
    { name: 'يونيو', grade: 75 },
  ],
  completionData: [
    { name: 'مكتمل', value: 75 },
    { name: 'قيد التنفيذ', value: 20 },
    { name: 'لم يبدأ', value: 5 },
  ],
  scheduleData: [
    { time: '08:00 - 09:00', subject: 'الدرس الاول'  },
    { time: '09:00 - 10:00', subject: 'الدرس الثاني' },
    { time: '10:30 - 11:30', subject: 'الدرس الثالث' },
    { time: '12:00 - 13:00', subject: 'الدرس الرابع' },
  ],
  assignments: [
    { subject: 'الدرس الاول', title: 'تمرين ', due: 'غداً' },
    { subject: 'الدرس التاني', title: 'امتحان ', due: 'بعد غد' },
    { subject: 'الدرس الثالث', title: 'اختيارات', due: 'الأسبوع القادم' },
  ],
};

const educationalSlice = createSlice({
  name: 'educational',
  initialState,
  reducers: {
  },
});

export default educationalSlice.reducer;