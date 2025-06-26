
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const FestiveIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Festive Header with traditional pattern */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white p-6 rounded-t-3xl mb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-full">
            {Array.from({length: 48}).map((_, i) => (
              <div key={i} className="bg-white rounded-full w-2 h-2"></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">{data.personalInfo.fullName}</h1>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div>📧 {data.personalInfo.email}</div>
                <div>📱 {data.personalInfo.phone}</div>
              </div>
              <div>
                <div>🏠 {data.personalInfo.location}</div>
                {data.personalInfo.linkedIn && <div>💼 {data.personalInfo.linkedIn}</div>}
                {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
              </div>
            </div>
          </div>
          {data.personalInfo.photo && (
            <div>
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* About Me */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-red-700 mb-3 flex items-center">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full mr-3 text-lg">🎯</span>
            Career Objective
          </h2>
          <div className="bg-white p-5 rounded-2xl shadow-md border-l-8 border-orange-400">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Professional Journey */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full mr-3 text-lg">🚀</span>
            Work Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="bg-white p-5 rounded-2xl shadow-md mb-4 border-l-8 border-red-400 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex justify-between items-start mb-2 pr-12">
                <h3 className="font-bold text-lg text-red-800">{exp.jobTitle}</h3>
                <span className="bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <div className="text-orange-600 font-semibold mb-3">{exp.company} • {exp.location}</div>
              {exp.description && (
                <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        {/* Academic Background */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-3 py-2 rounded-full mr-2 text-sm">🎓</span>
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-white p-4 rounded-2xl shadow-md mb-4 border-l-8 border-yellow-400">
                <h3 className="font-bold text-yellow-800">{edu.degree}</h3>
                <div className="text-sm text-red-600 font-semibold">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600 font-medium">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Core Strengths */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 rounded-full mr-2 text-sm">⭐</span>
              Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((skill, index) => {
                const bgColors = ['from-red-400 to-pink-400', 'from-orange-400 to-red-400', 'from-yellow-400 to-orange-400', 'from-pink-400 to-red-400'];
                const bgColor = bgColors[index % bgColors.length];
                return (
                  <div key={skill.id} className={`bg-gradient-to-r ${bgColor} text-white p-3 rounded-xl shadow-md`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm bg-white/20 px-2 py-1 rounded">{skill.level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
