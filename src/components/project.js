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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/ecommerce.png"  // Replace with your image path in the public folder
                alt="Ecommerce Website"
                layout="fill"  // Ensures the image fills the container
                objectFit="contain"  // Display the whole image without cropping
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ecommerce Website</h3>
            <p className="text-gray-400 mb-4">
              Ecommerce website using Reactjs&#44; Firebase&#44; Tailwind Css&#44; DummyJson API
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="https://github.com/Abdulmoiztahir/Furniro.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://furniro-hhqa.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Additional projects... */}

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/bulb.png"
                alt="Blog App"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Bulb</h3>
            <p className="text-gray-400 mb-4">
              Blog App using HTML&#44; CSS&#44; Firebase&#44; JavaScript. Full responsive with public and private routes.
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="https://github.com/Abdulmoiztahir/JS_ASSIGHNMENTS/tree/main/BULB" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://splendid-belekoy-e083bf.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/weatherApp.png"
                alt="Project 3"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Weather App</h3>
            <p className="text-gray-400 mb-4">
            Weather App using Reactjs&#44; Firebase&#44; Tailwind Css&#44; One Weather API
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="https://github.com/mustafaaly7/Weather-App-React-js" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://weather-app-react-js-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </Link>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/stopwatch.png"
                alt="Virtual Assistant"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Stop Watch</h3>
            <p className="text-gray-400 mb-4">
              Used Html&#44; css&#44; Javascript&#44; and Speech synthesis functions to recognize voice and act accordingly.
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="https://github.com/Abdulmoiztahir/JS_ASSIGHNMENTS/tree/main/STOP%20WATCH" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://abdulmoiztahir.github.io/JS_ASSIGHNMENTS/STOP%20WATCH/index.html" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
