import { Button } from "@/components/ui/button";
import { FaCode, FaUsers, FaGraduationCap, FaHandshake } from "react-icons/fa";

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering"
    },
    {
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Hybrid (NYC)",
      department: "Design"
    },
    {
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      department: "Engineering"
    },
  ];

  const benefits = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Cutting-edge Tech",
      description: "Work with the latest technologies and frameworks"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Team Culture",
      description: "Collaborative and inclusive work environment"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Learning Budget",
      description: "$1,000 annual budget for professional development"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote options and flexible hours"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Help us build the future of digital experiences
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
        <div className="space-y-6">
          {openings.map((job, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-gray-600 dark:text-gray-400">{job.type}</span>
                    <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                    <span className="text-gray-600 dark:text-gray-400">{job.department}</span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0">Apply Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Why Join Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Role?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          We&apos;re always looking for talented people. Send us your resume!
        </p>
        <Button size="lg">Submit General Application</Button>
      </div>
    </div>
  );
}