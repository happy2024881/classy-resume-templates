
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const InfographicTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>📧 {data.personalInfo.email}</div>
            <div>📱 {data.personalInfo.phone}</div>
            <div>📍 {data.personalInfo.location}</div>
            {data.personalInfo.linkedIn && <div>💼 {data.personalInfo.linkedIn}</div>}
            {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
      </div>

      <div className="p-6">
        {/* Summary with Icon */}
        {data.personalInfo.summary && (
          <div className="mb-6 bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">👤</span>
              </div>
              <h2 className="text-xl font-bold text-blue-600">About Me</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience Timeline */}
        {data.experience.length > 0 && (
          <div className="mb-6 bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">💼</span>
              </div>
              <h2 className="text-xl font-bold text-purple-600">Experience</h2>
            </div>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-2 mr-4 relative z-10"></div>
                    <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg rounded-tl-none">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                        <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-purple-700 font-semibold mb-2">🏢 {exp.company} • 📍 {exp.location}</div>
                      {exp.description && (
                        <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  </div>
                  {index < data.experience.length - 1 && (
                    <div className="absolute left-2 top-8 w-0.5 h-full bg-purple-200 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skills with Progress Bars */}
          {data.skills.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <h2 className="text-xl font-bold text-green-600">Skills</h2>
              </div>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500" 
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '75%' : 
                                 skill.level === 'Intermediate' ? '50%' : '25%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🎓</span>
                </div>
                <h2 className="text-xl font-bold text-orange-600">Education</h2>
              </div>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                  <h3 className="font-bold text-orange-800">{edu.degree}</h3>
                  <div className="text-orange-700 text-sm">🏫 {edu.school}</div>
                  <div className="text-orange-600 text-sm">📍 {edu.location}</div>
                  <div className="text-orange-600 text-sm">📅 {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-orange-600">📊 GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
