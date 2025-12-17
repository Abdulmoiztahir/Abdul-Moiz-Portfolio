import Image from 'next/image'
import { GithubOutlined } from '@ant-design/icons'  // Import GitHub icon from Ant Design
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-6 ">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Project 1 */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 hover:border-blue-500/50">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl bg-gray-900">
              <Image
                src="/images/shinesbudget.png"
                alt="Shine's Budget"
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="mb-3">
              <span className="inline-block bg-green-500 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                Full-Stack
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Shine&apos;s Budget</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Full-stack finance platform with budgeting&#44; portfolio tracking&#44; AI stock analysis&#44; and MFA authentication. Supports 7 languages.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Next.js 14</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">NestJS</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">MongoDB</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Docker</span>
            </div>
          </div>

          {/* Additional projects... */}

          {/* Project 2 */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 hover:border-blue-500/50">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl bg-gray-900">
              <Image
                src="/images/qrcards.avif"
                alt="QR Cards"
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="mb-3">
              <span className="inline-block bg-cyan-400 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                Mobile Development
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">QR CARDS</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              QRCARDS is a mobile application designed to transform the traditional business card into a digital.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">React Native</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Firebase</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">NFC</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Bubble.io</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 hover:border-blue-500/50">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl bg-gray-900">
              <Image
                src="/images/ecommerce.png"
                alt="Furniro Ecommerce"
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="mb-3">
              <span className="inline-block bg-purple-500 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                E-Commerce
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Furniro</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Modern furniture e-commerce platform with real-time cart management&#44; Firebase authentication&#44; and dynamic product catalog powered by DummyJson API.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">React.js</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Firebase</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Tailwind CSS</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">API Integration</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 hover:border-blue-500/50">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-xl bg-gray-900">
              <Image
                src="/images/caseintelligence.png"
                alt="Case Intelligence Investigation"
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="mb-3">
              <span className="inline-block bg-cyan-400 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                Web Development
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">CASE INTELLIGENCE Investigation</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Professional Case Management System to securely manage cases&#44; track relationships&#44; and collaborate with your team. Perfect for investigators and analysts.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Next.js</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">Node.js</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">MongoDB</span>
              <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg">AWS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
