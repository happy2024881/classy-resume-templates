
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CreativeIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Creative Sidebar */}
      <div className="flex">
        <div className="w-1/3 bg-gradient-to-b from-purple-600 to-pink-600 text-white p-6">
          {/* Profile Photo */}
          {data.personalInfo.photo && (
            <div className="text-center mb-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto shadow-lg"
              />
            </div>
          )}

          {/* Contact */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 border-b-2 border-white/30 pb-1">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{data.personalInfo.location}</span>
              </div>
              {data.personalInfo.linkedIn && (
                <div className="flex items-center">
                  <span className="mr-2">💼</span>
                  <span className="break-all">{data.personalInfo.linkedIn}</span>
                </div>
              )}
              {data.personalInfo.website && (
                <div className="flex items-center">
                  <span className="mr-2">🌐</span>
                  <span className="break-all">{data.personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3 border-b-2 border-white/30 pb-1">Skills</h3>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/20 p-2 rounded">
                    <div className="font-medium text-sm">{skill.name}</div>
                    <div className="text-xs text-purple-200">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h3 className="text-lg font-bold mb-3 border-b-2 border-white/30 pb-1">Education</h3>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 bg-white/20 p-3 rounded">
                  <h4 className="font-bold text-sm">{edu.degree}</h4>
                  <div className="text-xs text-purple-200">{edu.school}</div>
                  <div className="text-xs text-purple-200">{edu.location}</div>
                  <div className="text-xs text-purple-200">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-xs text-purple-200">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-purple-800 mb-2">{data.personalInfo.fullName}</h1>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-24 mb-4"></div>
          </div>

          {/* Summary */}
          {data.personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-purple-700 mb-3 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✨</span>
                About Me
              </h2>
              <p className="text-sm leading-relaxed bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mr-3">💼</span>
                Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6 bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-400">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{exp.jobTitle}</h3>
                    <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-purple-600 font-semibold mb-2">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
