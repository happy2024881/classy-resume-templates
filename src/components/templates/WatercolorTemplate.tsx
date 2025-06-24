
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const WatercolorTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-800 relative overflow-hidden">
      {/* Watercolor background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {data.personalInfo.fullName}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span className="bg-white/60 px-3 py-1 rounded-full">{data.personalInfo.email}</span>
            <span className="bg-white/60 px-3 py-1 rounded-full">{data.personalInfo.phone}</span>
            <span className="bg-white/60 px-3 py-1 rounded-full">{data.personalInfo.location}</span>
          </div>
          {(data.personalInfo.linkedIn || data.personalInfo.website) && (
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 mt-2">
              {data.personalInfo.linkedIn && (
                <span className="bg-white/60 px-3 py-1 rounded-full">{data.personalInfo.linkedIn}</span>
              )}
              {data.personalInfo.website && (
                <span className="bg-white/60 px-3 py-1 rounded-full">{data.personalInfo.website}</span>
              )}
            </div>
          )}
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8 backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">About Me</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{exp.jobTitle}</h3>
                  <span className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-purple-600 font-semibold mb-3">{exp.company} • {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
              <h2 className="text-xl font-bold mb-4 text-purple-700">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                  <div className="text-sm text-purple-600">{edu.school}</div>
                  <div className="text-sm text-gray-600">{edu.location} • {edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-6 border border-white/30">
              <h2 className="text-xl font-bold mb-4 text-purple-700">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span key={skill.id} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
