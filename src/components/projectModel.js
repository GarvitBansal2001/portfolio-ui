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
        <div>
          <h3>Weather App Preview</h3>
          <p>Shows current weather and forecast.</p>
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
        <div>
          <p>This is a preview of the component library.</p>
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
          <div>
            <p>This is a preview of the component library.</p>
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
          <div>
            <p>This is a preview of the component library.</p>
          </div>
        ),
        technologies: ['JJava', 'xml', 'Firebase', 'Android', 'Spotify.API', 'Youtube.API'],
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
          <div>
            <p>This is a preview of the component library.</p>
          </div>
        ),
        technologies: ['Java', 'xml', 'Android', 'Google.API'],
        links: {
          github: 'https://github.com/GarvitBansal2001/Bookie'
        }
      }
  ];
  
  export default projectList;
  