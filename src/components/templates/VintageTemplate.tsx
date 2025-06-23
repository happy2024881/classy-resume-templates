
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const VintageTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-amber-50 p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-amber-900 border-4 border-amber-800 relative">
      {/* Vintage Corner Decorations */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-amber-800"></div>
      <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-amber-800"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-amber-800"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-amber-800"></div>

      {/* Header */}
      <div className="text-center mb-8 border-double border-4 border-amber-700 p-6 bg-amber-100">
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-2 text-amber-900">{data.personalInfo.fullName}</h1>
            <div className="text-sm text-amber-700 space-y-1">
              <div className="flex items-center justify-center"><span className="mr-2">✉</span>{data.personalInfo.email}</div>
              <div className="flex items-center justify-center"><span className="mr-2">☎</span>{data.personalInfo.phone}</div>
              <div className="flex items-center justify-center"><span className="mr-2">⌂</span>{data.personalInfo.location}</div>
              {data.personalInfo.linkedIn && <div className="flex items-center justify-center"><span className="mr-2">§</span>{data.personalInfo.linkedIn}</div>}
              {data.personalInfo.website && <div className="flex items-center justify-center"><span className="mr-2">※</span>{data.personalInfo.website}</div>}
            </div>
          </div>
          {data.personalInfo.photo && (
            <div className="ml-6">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-24 h-24 rounded object-cover border-4 border-amber-700 sepia"
              />
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4 text-center text-amber-800 border-b-2 border-amber-600 pb-2">
            ~ Personal Statement ~
          </h2>
          <div className="bg-amber-100/50 p-4 border-2 border-amber-600 italic">
            <p className="text-sm leading-relaxed text-center font-serif">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="col-span-2 mb-6">
            <h2 className="text-2xl font-serif font-bold mb-4 text-center text-amber-800 border-b-2 border-amber-600 pb-2">
              ~ Professional Experience ~
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 p-4 bg-amber-100/30 border-2 border-amber-600">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-serif font-bold text-amber-900">{exp.jobTitle}</h3>
                  <span className="text-sm font-serif italic text-amber-700 bg-amber-200 px-3 py-1 border border-amber-600">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-base font-serif italic text-amber-800 mb-2">{exp.company} • {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-amber-900 font-serif">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-serif font-bold mb-4 text-center text-amber-800 border-b-2 border-amber-600 pb-2">
              ~ Education ~
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 p-3 bg-amber-100/30 border-2 border-amber-600">
                <h3 className="font-serif font-bold text-amber-900">{edu.degree}</h3>
                <div className="text-sm font-serif italic text-amber-800">{edu.school}</div>
                <div className="text-sm font-serif text-amber-700">{edu.location} • {edu.graduationDate}</div>
                {edu.gpa && <div className="text-sm font-serif text-amber-700">Honours: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-serif font-bold mb-4 text-center text-amber-800 border-b-2 border-amber-600 pb-2">
              ~ Proficiencies ~
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-amber-100/30 border-2 border-amber-600 p-3">
                  <div className="flex justify-between">
                    <span className="font-serif font-medium text-amber-900">{skill.name}</span>
                    <span className="text-sm font-serif italic bg-amber-200 text-amber-800 px-2 py-1 border border-amber-600">
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
  );
};
