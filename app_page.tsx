import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Github, Book, Briefcase } from 'lucide-react'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/placeholder.svg?height=400&width=400"
              alt="Profile picture"
              width={400}
              height={400}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Your Name</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Web Developer</h1>
            <p className="mt-2 text-gray-500">Passionate web developer with expertise in modern technologies.</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                youremail@example.com
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                +1 234 567 890
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                City, Country
              </div>
              <div className="flex items-center text-gray-600">
                <Linkedin className="h-5 w-5 mr-2" />
                linkedin.com/in/yourprofile
              </div>
              <div className="flex items-center text-gray-600">
                <Github className="h-5 w-5 mr-2" />
                github.com/yourusername
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Book className="h-6 w-6 mr-2 text-indigo-500" />
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg p-3 text-center">JavaScript</div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">React</div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">Node.js</div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">HTML/CSS</div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">Git</div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">Responsive Design</div>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
            <Briefcase className="h-6 w-6 mr-2 text-indigo-500" />
            Experience
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Senior Web Developer</h3>
            <p className="text-gray-600">Tech Company Inc. | 2018 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Led development of company's main product using React and Node.js</li>
              <li>Improved site performance by 40% through code optimization</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Web Developer</h3>
            <p className="text-gray-600">Digital Agency XYZ | 2015 - 2018</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed responsive websites for various clients</li>
              <li>Collaborated with designers to implement pixel-perfect UIs</li>
              <li>Worked on both front-end and back-end development</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center">
            <Book className="h-6 w-6 mr-2 text-indigo-500" />
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University of Technology | 2011 - 2015</p>
          </div>
        </div>
      </div>
    </div>
  )
}

