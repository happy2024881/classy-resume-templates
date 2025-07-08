
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const ElegantTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-4xl font-serif mb-2">{data.personalInfo.fullName}</h1>
            <div className="text-sm opacity-90 space-y-1">
              <div className="flex items-center space-x-4">
                <span>{data.personalInfo.email}</span>
                <span>•</span>
                <span>{data.personalInfo.phone}</span>
              </div>
              <div>{data.personalInfo.location}</div>
              {(data.personalInfo.linkedIn || data.personalInfo.website) && (
                <div className="flex items-center space-x-4">
                  {data.personalInfo.linkedIn && <span>{data.personalInfo.linkedIn}</span>}
                  {data.personalInfo.website && data.personalInfo.linkedIn && <span>•</span>}
                  {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
                </div>
              )}
            </div>
          </div>
          {data.personalInfo.photo ? (
            <div className="w-20 h-20">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
          ) : (
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-2xl font-serif">{data.personalInfo.fullName.split(' ').map(n => n[0]).join('')}</div>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif text-indigo-900 mb-4">Professional Summary</h2>
              <div className="w-16 h-0.5 bg-indigo-900 mx-auto mb-4"></div>
              <p className="text-sm leading-relaxed text-gray-700 max-w-3xl mx-auto italic">
                "{data.personalInfo.summary}"
              </p>
            </div>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-serif text-indigo-900 mb-6 text-center">Professional Experience</h2>
            <div className="w-16 h-0.5 bg-indigo-900 mx-auto mb-6"></div>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-indigo-900">{exp.jobTitle}</h3>
                      <div className="text-purple-700 font-medium">{exp.company} • {exp.location}</div>
                    </div>
                    <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-xl font-serif text-indigo-900 mb-4 text-center">Education</h2>
              <div className="w-12 h-0.5 bg-indigo-900 mx-auto mb-4"></div>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 text-center">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                    <h3 className="font-serif font-semibold text-indigo-900">{edu.degree}</h3>
                    <div className="text-purple-700 text-sm">{edu.school}</div>
                    <div className="text-gray-600 text-sm">{edu.location}</div>
                    <div className="text-gray-600 text-sm">{edu.graduationDate}</div>
                    {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-serif text-indigo-900 mb-4 text-center">Core Skills</h2>
              <div className="w-12 h-0.5 bg-indigo-900 mx-auto mb-4"></div>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="text-center">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg">
                      <div className="font-medium text-indigo-900">{skill.name}</div>
                      <div className="text-sm text-purple-700">{skill.level}</div>
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
