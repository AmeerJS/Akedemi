import MailIcon from '../assets/icons/mail.svg?react';
import PhoneIcon from '../assets/icons/phone.svg?react';

export default function TeacherCard({ name, subject }) {
  return (
    <div className="bg-white rounded-xl p-13 text-center shadow-sm">
      <div className="w-20 h-20 bg-[#E1DBF7] rounded-full mx-auto mb-4" />
      <h3 className="text-[#4D44B5] font-semibold text-base">{name}</h3>
      <p className="text-gray-500 text-sm">{subject}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button className="w-9 h-9 rounded-full bg-[white] text-[#4D44B5] flex items-center justify-center">
            <PhoneIcon className="w-8 h-8" />
        </button>
        <button className="w-9 h-9 rounded-full bg-[white] text-[#4D44B5] flex items-center justify-center">
            <MailIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
