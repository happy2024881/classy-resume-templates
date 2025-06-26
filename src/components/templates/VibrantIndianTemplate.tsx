
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const VibrantIndianTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Colorful Header */}
      <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white p-6 rounded-xl mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-3">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1">
              <div>✉️ {data.personalInfo.email} • 📱 {data.personalInfo.phone}</div>
              <div>📍 {data.personalInfo.location}</div>
              {(data.personalInfo.linkedIn || data.personalInfo.website) && (
                <div>
                  {data.personalInfo.linkedIn && <span>🔗 {data.personalInfo.linkedIn}</span>}
                  {data.personalInfo.linkedIn && data.personalInfo.website && <span> • </span>}
                  {data.personalInfo.website && <span>🌐 {data.personalInfo.website}</span>}
                </div>
              )}
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

      {/* About Section */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-3 flex items-center">
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full mr-3">About</span>
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-pink-400">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full mr-3">Experience</span>
          </h2>
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-orange-400">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">{exp.jobTitle}</h3>
                <span className="bg-gradient-to-r from-pink-100 to-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
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

      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-yellow-600 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full mr-2 text-sm">Education</span>
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-yellow-400">
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <div className="text-sm text-yellow-600 font-semibold">{edu.school}</div>
                <div className="text-sm text-gray-600">{edu.location}</div>
                <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-pink-600 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-1 rounded-full mr-2 text-sm">Skills</span>
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill, index) => {
                const colors = ['from-pink-400 to-red-400', 'from-orange-400 to-yellow-400', 'from-yellow-400 to-green-400', 'from-green-400 to-blue-400', 'from-blue-400 to-purple-400'];
                const colorClass = colors[index % colors.length];
                return (
                  <div key={skill.id} className={`bg-gradient-to-r ${colorClass} text-white p-3 rounded-lg shadow-md`}>
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
