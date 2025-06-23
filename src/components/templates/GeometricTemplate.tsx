
import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
  data: ResumeData;
}

export const GeometricTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 min-h-[11in] w-[8.5in] mx-auto shadow-lg text-gray-900 relative">
      {/* Geometric Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 transform rotate-45 opacity-20"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-400 transform rotate-12 opacity-25"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-green-400 transform -rotate-45 opacity-20"></div>
      
      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="bg-gray-900 text-white p-6 transform -skew-y-1">
          <div className="flex items-center justify-between transform skew-y-1">
            <div>
              <h1 className="text-4xl font-bold mb-2">{data.personalInfo.fullName}</h1>
              <div className="text-sm space-y-1 opacity-90">
                <div>{data.personalInfo.email}</div>
                <div>{data.personalInfo.phone}</div>
                <div>{data.personalInfo.location}</div>
                {data.personalInfo.linkedIn && <div>{data.personalInfo.linkedIn}</div>}
                {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
              </div>
            </div>
            {data.personalInfo.photo && (
              <div className="ml-6">
                <img
                  src={data.personalInfo.photo}
                  alt="Profile"
                  className="w-24 h-24 object-cover clip-polygon border-4 border-white"
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8 relative z-10">
          <div className="relative">
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            <h2 className="text-2xl font-bold mb-4 pl-6 text-gray-800">Profile</h2>
            <p className="text-sm leading-relaxed text-gray-700 pl-6">{data.personalInfo.summary}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 relative z-10">
        {/* Experience */}
        <div className="col-span-2">
          {data.experience.length > 0 && (
            <div className="mb-8">
              <div className="relative">
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500"></div>
                <h2 className="text-2xl font-bold mb-6 pl-6 text-gray-800">Experience</h2>
                {data.experience.map((exp, index) => (
                  <div key={exp.id} className="mb-6 pl-6">
                    <div className="bg-gray-50 p-4 transform hover:scale-105 transition-transform">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{exp.jobTitle}</h3>
                        <span className="text-sm bg-blue-500 text-white px-3 py-1 transform -skew-x-12">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      <div className="text-red-600 font-semibold mb-2">{exp.company} • {exp.location}</div>
                      {exp.description && (
                        <p className="text-sm leading-relaxed text-gray-700">{exp.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <div className="relative">
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-teal-500"></div>
                <h2 className="text-xl font-bold mb-4 pl-6 text-gray-800">Education</h2>
                {data.education.map((edu) => (
                  <div key={edu.id} className="mb-4 pl-6">
                    <div className="bg-green-50 p-3 transform hover:scale-105 transition-transform">
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <div className="text-sm text-green-600">{edu.school}</div>
                      <div className="text-sm text-gray-600">{edu.location}</div>
                      <div className="text-sm text-gray-600">{edu.graduationDate}</div>
                      {edu.gpa && <div className="text-sm text-gray-600">GPA: {edu.gpa}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <div className="relative">
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                <h2 className="text-xl font-bold mb-4 pl-6 text-gray-800">Skills</h2>
                <div className="space-y-2 pl-6">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="bg-purple-50 p-3 transform hover:scale-105 transition-transform">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm bg-purple-500 text-white px-2 py-1 transform -skew-x-12">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
