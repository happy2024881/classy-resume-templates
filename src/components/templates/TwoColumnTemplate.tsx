
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const TwoColumnTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white min-h-[11in] w-[8.5in] mx-auto shadow-lg text-black flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-800 text-white p-6">
        <div className="mb-8">
          {data.personalInfo.photo ? (
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src={data.personalInfo.photo}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-gray-600"
              />
            </div>
          ) : (
            <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">
                {data.personalInfo.fullName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
          <h1 className="text-xl font-bold text-center mb-4">{data.personalInfo.fullName}</h1>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wide mb-4 border-b border-gray-600 pb-2">Contact</h2>
          <div className="space-y-3 text-sm">
            <div>
              <div className="text-gray-400 text-xs">Email</div>
              <div className="break-all">{data.personalInfo.email}</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs">Phone</div>
              <div>{data.personalInfo.phone}</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs">Location</div>
              <div>{data.personalInfo.location}</div>
            </div>
            {data.personalInfo.linkedIn && (
              <div>
                <div className="text-gray-400 text-xs">LinkedIn</div>
                <div className="break-all text-xs">{data.personalInfo.linkedIn}</div>
              </div>
            )}
            {data.personalInfo.website && (
              <div>
                <div className="text-gray-400 text-xs">Website</div>
                <div className="break-all text-xs">{data.personalInfo.website}</div>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wide mb-4 border-b border-gray-600 pb-2">Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-white h-1 rounded-full" 
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
            <h2 className="text-sm font-bold uppercase tracking-wide mb-4 border-b border-gray-600 pb-2">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <h3 className="font-semibold text-sm">{edu.degree}</h3>
                <div className="text-xs text-gray-400">{edu.school}</div>
                <div className="text-xs text-gray-400">{edu.location}</div>
                <div className="text-xs text-gray-400">{edu.graduationDate}</div>
                {edu.gpa && <div className="text-xs text-gray-400">GPA: {edu.gpa}</div>}
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{exp.jobTitle}</h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="text-gray-700 font-semibold mb-3">{exp.company} | {exp.location}</div>
                {exp.description && (
                  <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
