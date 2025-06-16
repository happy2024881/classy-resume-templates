
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const CreativeTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-purple-600 to-pink-600 text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">{data.personalInfo.fullName}</h1>
          <div className="text-sm space-y-1 opacity-90">
            <div>{data.personalInfo.email}</div>
            <div>{data.personalInfo.phone}</div>
            <div>{data.personalInfo.location}</div>
            {data.personalInfo.linkedIn && <div className="break-all">{data.personalInfo.linkedIn}</div>}
            {data.personalInfo.website && <div className="break-all">{data.personalInfo.website}</div>}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b border-white/30 pb-2">Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full" 
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
          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-white/30 pb-2">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-semibold text-sm">{edu.degree}</h3>
                <div className="text-xs opacity-90">{edu.school}</div>
                <div className="text-xs opacity-75">{edu.location}</div>
                <div className="text-xs opacity-75">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-xs opacity-75">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">About Me</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mb-6 relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-1 mr-4 relative z-10"></div>
                  <div className="flex-1">
                    <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                        <span className="text-sm text-gray-500 bg-purple-100 px-2 py-1 rounded">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-purple-600 font-semibold mb-2">{exp.company} • {exp.location}</div>
                      {exp.description && (
                        <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                      )}
                    </div>
                  </div>
                </div>
                {index < data.experience.length - 1 && (
                  <div className="absolute left-2 top-6 w-0.5 h-full bg-purple-200 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
