/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {'app'|'library'|'website'|'documentation'|'android'|'predictor'} type
 * @property {JSX.Element} content
 * @property {string[]} technologies
 * @property {{github?: string, download?: string}} [links]
 */

// Sample data
const projectList = [
    {
      id: '1',
      title: '2FA and Oauth 2.0 System',
      description: '2FA/OAuth 2.0 system with a Python demo-service, Kong API gateway (token handling), and Redis caching, deployed using Docker',
      type: 'app',
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <li>
              <span className="font-semibold text-green-400">Backend:</span > <span className="text-white">Python, Redis, MySQL</span>
          </li>
          <li>
              <span className="font-semibold text-purple-400">Other:</span> <span className="text-white">Git, Kong API Gateway, Docker</span>
          </li>
        </div>
      ),
      technologies: ['Python', 'Docker', 'Redis', 'MySQL', 'Kong', 'Lua'],
      links: {
        github: 'https://github.com/GarvitBansal2001/2FA-Backend',
        download: 'files/2fa.pdf'
      }
    },
    {
      id: '2',
      title: 'Heart Disease Predictor',
      description: 'Heart disease prediction using various models and comparing their accuracies.',
      type: 'predictor',
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <li>
              <span className="font-semibold text-purple-400">Other:</span> <span className="text-white">R, R Studio, Kagle (Dataset)</span>
          </li>
        </div>
      ),
      technologies: ['R'],
      links: {
        github: 'https://github.com/GarvitBansal2001/Heart-Disease-Predictor',
        download: 'files/heart_disease_predictor.pdf'
      }
    },
    {
        id: '3',
        title: 'E-Library Web App',
        description: 'Web application for an online library with features like e-books, newsroom and youtube videos',
        type: 'website',
        content: (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
            <li>
                <span className="font-semibold text-blue-400">Frontend:</span > <span className="text-white">JavaScript, HTML, CSS</span>
            </li>
            <li>
                <span className="font-semibold text-purple-400">Other:</span> <span className="text-white">Google APIs, News APIs</span>
            </li>
          </div>
        ),
        technologies: ['JavaScript', 'HTML', 'CSS'],
        links: {
          github: 'https://github.com/GarvitBansal2001/E-Lib-Webapp'
        }
      },
      {
        id: '4',
        title: 'Tranced',
        description: 'An android music and video streaming application with online/offline capabilities and integrated chat',
        type: 'android',
        content: (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
            <li>
                <span className="font-semibold text-green-400">Backend:</span > <span className="text-white">Java, Firebase, SQLite</span>
            </li>
            <li>
                <span className="font-semibold text-blue-400">Frontend:</span > <span className="text-white">xml</span>
            </li>
            <li>
                <span className="font-semibold text-purple-400">Other:</span> <span className="text-white">Android Studio, Spotify APIs, Youtube APIs</span>
            </li>
          </div>
        ),
        technologies: ['Java', 'xml', 'Firebase', 'Android', 'Spotify.API', 'Youtube.API'],
        links: {
          github: 'https://github.com/GarvitBansal2001/Tranced',
          download: 'files/tranced.pdf'
        }
      },
      {
        id: '5',
        title: 'Bookie',
        description: 'An android e-books application',
        type: 'android',
        content: (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
            <li>
                <span className="font-semibold text-green-400">Backend:</span > <span className="text-white">Java</span>
            </li>
            <li>
                <span className="font-semibold text-blue-400">Frontend:</span > <span className="text-white">xml</span>
            </li>
            <li>
                <span className="font-semibold text-purple-400">Other:</span> <span className="text-white">Android Studio, Google APIs</span>
            </li>
          </div>
        ),
        technologies: ['Java', 'xml', 'Android', 'Google.API'],
        links: {
          github: 'https://github.com/GarvitBansal2001/Bookie'
        }
      }
  ];
  
  export default projectList;
  