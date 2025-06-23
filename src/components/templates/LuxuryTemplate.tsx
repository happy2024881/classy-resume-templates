
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const LuxuryTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-amber-900 relative">
      {/* Gold Border */}
      <div className="absolute inset-4 border-4 border-double border-amber-600 pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative z-10 bg-gradient-to-r from-amber-700 to-yellow-700 text-white p-6 mb-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2 drop-shadow-lg">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 text-amber-100">
              <div className="flex items-center"><span className="mr-2">👑</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-2">📱</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-2">🏛️</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-2">💼</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-2">🌐</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded-lg object-cover border-4 border-amber-200 shadow-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="relative z-10 mb-6">
          <h2 className="text-2xl font-serif font-bold mb-3 text-amber-800 border-b-2 border-amber-600 pb-2">
            Distinguished Profile
          </h2>
          <div className="bg-white/80 p-4 rounded-lg shadow-md border-2 border-amber-300">
            <p className="text-sm leading-relaxed font-serif italic text-amber-900">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6 relative z-10">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-bold mb-4 text-amber-800 border-b-2 border-amber-600 pb-2">
                Professional Excellence
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="bg-white/80 p-4 rounded-lg mb-4 shadow-md border-2 border-amber-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-lg text-amber-900">{exp.jobTitle}</h3>
                    <span className="text-sm bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-3 py-1 rounded shadow">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-serif font-semibold mb-2 text-amber-700">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed font-serif text-amber-900">{exp.description}</p>
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
              <h2 className="text-xl font-serif font-bold mb-4 text-amber-800 border-b-2 border-amber-600 pb-2">
                Academic Honors
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white/80 p-4 rounded-lg mb-4 shadow-md border-2 border-amber-300">
                  <h3 className="font-serif font-bold text-amber-900">{edu.degree}</h3>
                  <div className="text-sm font-serif text-amber-700">{edu.school}</div>
                  <div className="text-sm font-serif text-amber-600">{edu.location}</div>
                  <div className="text-sm font-serif text-amber-600">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm font-serif text-amber-600">Magna Cum Laude: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-serif font-bold mb-4 text-amber-800 border-b-2 border-amber-600 pb-2">
                Elite Capabilities
              </h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="bg-white/80 p-3 rounded-lg shadow-md border-2 border-amber-300">
                    <div className="flex justify-between">
                      <span className="font-serif font-medium text-amber-900">{skill.name}</span>
                      <span className="text-sm bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-2 py-1 rounded shadow">
                        {skill.level}
                      </span>
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
