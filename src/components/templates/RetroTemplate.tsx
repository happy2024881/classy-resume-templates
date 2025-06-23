
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const RetroTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-orange-100 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-brown-900">
      {/* Header */}
      <div className="bg-orange-400 text-white p-6 mb-6 transform -rotate-1 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 font-serif">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1">
              <div>📧 {data.personalInfo.email}</div>
              <div>📞 {data.personalInfo.phone}</div>
              <div>📍 {data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div>💼 {data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div>🌐 {data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white transform rotate-3"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-3 font-serif">✨ About Me</h2>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-400">
            <p className="text-sm leading-relaxed text-gray-800">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-4 font-serif">🏢 Experience</h2>
              {data.experience.map((exp, index) => (
                <div key={exp.id} className={`bg-white p-4 rounded-lg shadow-md mb-4 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{exp.jobTitle}</h3>
                    <span className="text-sm bg-orange-200 text-orange-800 px-2 py-1 rounded-full">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-orange-600 font-semibold mb-2">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-orange-600 mb-4 font-serif">🎓 Education</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white p-4 rounded-lg shadow-md mb-4 transform rotate-1">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <div className="text-orange-600 text-sm">{edu.school}</div>
                  <div className="text-gray-600 text-sm">{edu.location}</div>
                  <div className="text-gray-600 text-sm">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-gray-600 text-sm">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-orange-600 mb-4 font-serif">⚡ Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white p-3 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
