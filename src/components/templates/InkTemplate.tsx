
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const InkTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black relative">
      {/* Ink Splatter Decorations */}
      <div className="absolute top-4 right-8 w-8 h-8 bg-black rounded-full opacity-20 transform rotate-12"></div>
      <div className="absolute top-12 right-12 w-4 h-4 bg-black rounded-full opacity-15"></div>
      <div className="absolute bottom-16 left-8 w-6 h-6 bg-black rounded-full opacity-10 transform -rotate-45"></div>

      {/* Header */}
      <div className="mb-8 pb-6 border-b-4 border-black">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black mb-3 tracking-tight">{data.personalInfo.fullName}</h1>
            <div className="text-sm space-y-1 font-medium">
              <div className="flex items-center"><span className="mr-3 text-xl">✒️</span>{data.personalInfo.email}</div>
              <div className="flex items-center"><span className="mr-3 text-xl">📞</span>{data.personalInfo.phone}</div>
              <div className="flex items-center"><span className="mr-3 text-xl">📍</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center"><span className="mr-3 text-xl">🔗</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center"><span className="mr-3 text-xl">🌐</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-28 h-28 object-cover border-4 border-black filter grayscale contrast-125"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-black mb-4 tracking-wide border-b-2 border-black pb-2 inline-block">
            EXECUTIVE SUMMARY
          </h2>
          <div className="bg-gray-100 p-6 border-l-8 border-black">
            <p className="text-sm leading-relaxed font-medium italic">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-black mb-6 tracking-wide border-b-2 border-black pb-2 inline-block">
                PROFESSIONAL EXPERIENCE
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6 p-4 border-l-8 border-black bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-black text-xl">{exp.jobTitle}</h3>
                    <span className="text-sm bg-black text-white px-4 py-2 font-bold tracking-wide">
                      {exp.startDate} — {exp.current ? 'PRESENT' : exp.endDate}
                    </span>
                  </div>
                  <div className="font-bold mb-3 text-lg">{exp.company} • {exp.location}</div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed font-medium">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-black mb-4 tracking-wide border-b-2 border-black pb-2 inline-block">
                EDUCATION
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 p-3 border-l-4 border-black bg-gray-50">
                  <h3 className="font-black">{edu.degree}</h3>
                  <div className="text-sm font-bold">{edu.school}</div>
                  <div className="text-sm font-medium">{edu.location}</div>
                  <div className="text-sm font-medium">{edu.graduationDate}</div>
                  {edu.gpa && <div className="text-sm font-medium">GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-black mb-4 tracking-wide border-b-2 border-black pb-2 inline-block">
                CORE SKILLS
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="border-2 border-black p-3 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="font-black">{skill.name}</span>
                      <span className="text-sm bg-black text-white px-3 py-1 font-bold tracking-wide">
                        {skill.level.toUpperCase()}
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
