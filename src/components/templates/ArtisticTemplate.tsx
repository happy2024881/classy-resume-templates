
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ArtisticTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-white relative overflow-hidden">
      {/* Artistic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-yellow-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-green-400 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border-4 border-pink-400 transform rotate-12"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border-4 border-blue-400 rounded-full"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="border-4 border-white p-6 transform -rotate-1">
          <div className="flex items-center justify-between transform rotate-1">
            <div>
              <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">{data.personalInfo.fullName}</h1>
              <div className="text-sm space-y-1">
                <div className="text-yellow-300">{data.personalInfo.email}</div>
                <div className="text-green-300">{data.personalInfo.phone}</div>
                <div className="text-blue-300">{data.personalInfo.location}</div>
                {data.personalInfo.linkedIn && <div className="text-pink-300">{data.personalInfo.linkedIn}</div>}
                {data.personalInfo.website && <div className="text-purple-300">{data.personalInfo.website}</div>}
              </div>
            </div>
            {data.personalInfo.photo && (
              <div className="ml-6">
                <img
                  src={data.personalInfo.photo}
                  alt="Profile"
                  className="w-28 h-28 object-cover border-4 border-white transform rotate-3"
                  style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400 transform -skew-x-12">Artist Statement</h2>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 relative z-10">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-pink-400 transform -skew-x-12">Portfolio</h2>
              {data.experience.map((exp, index) => (
                <div key={exp.id} className={`mb-6 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-green-400">{exp.jobTitle}</h3>
                      <span className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <div className="text-blue-300 font-semibold mb-2">{exp.company} • {exp.location}</div>
                    {exp.description && (
                      <p className="text-sm leading-relaxed text-gray-200">{exp.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-400 transform -skew-x-12">Learning</h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <h3 className="font-bold text-yellow-400">{edu.degree}</h3>
                    <div className="text-sm text-green-300">{edu.school}</div>
                    <div className="text-sm text-blue-300">{edu.location}</div>
                    <div className="text-sm text-purple-300">{edu.graduationDate}</div>
                    {edu.gpa && <div className="text-sm text-pink-300">GPA: {edu.gpa}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400 transform -skew-x-12">Talents</h2>
              <div className="space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={skill.id} className={`transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                      <div className="flex justify-between">
                        <span className="font-medium text-yellow-300">{skill.name}</span>
                        <span className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded-full">{skill.level}</span>
                      </div>
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
