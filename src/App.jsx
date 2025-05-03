import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Container, Grid, Avatar, Box, Typography } from '@mui/material';
import { Code, BarChart, Android, Web } from '@mui/icons-material';

function App() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px'
        }}
      >
        <Avatar src="files/profile.jpeg" sx={{ width: 150, height: 150 }}></Avatar>
      </Box>
      <Typography variant="h3" align="center" sx={{ color: '#fff'}}>
        Garvit Bansal
      </Typography>
      <Typography align="center" sx={{ color: '#fff', marginBottom: 4 }}>
        Software Engineer | Ex-DUite | Ex-Tytlarian
      </Typography>
      <Typography variant="h4" align="center" sx={{ color: '#fff', marginBottom: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="2FA and Oauth 2.0 System"
            description="A full-stack e-commerce application built with React and Node.js."
            tech={['Python', 'Docker', 'Redis', 'MySQL', 'Kong', 'Lua']}
            icon={<Code sx={{ color: '#CFCAA8' }} />}
            color="#CFCAA8"
            links={{ github: 'https://github.com/GarvitBansal2001/2FA-Backend', download: 'files/2fa.pdf' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Heart Disease Predictor"
            description="Heart disease prediction using various models and comparing their accuracies."
            tech={['R']}
            icon={<BarChart sx={{ color: '#ff9800' }} />}
            color="#ff9800"
            links={{ github: 'https://github.com/GarvitBansal2001/Heart-Disease-Predictor', download: 'files/heart_disease_predictor.pdf' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="E-Library Web App"
            description="A full-stack e-commerce application built with React and Node.js."
            tech={['JavaScript', 'HTML', 'CSS',]}
            icon={<Web sx={{ color: '#C0C0C0' }} />}
            color="#C0C0C0"
            links={{ github: 'https://github.com/GarvitBansal2001/E-Lib-Webapp'}}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Tranced"
            description="A full-stack e-commerce application built with React and Node.js."
            tech={['Java', 'xml', 'Firebase', 'Android', 'Spotify.API', 'Youtube.API']}
            icon={<Android sx={{ color: '#4caf50' }} />}
            color="#4caf50"
            links={{ github: 'https://github.com/GarvitBansal2001/Tranced', download: 'files/tranced.pdf' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title="Bookie"
            description="A full-stack e-commerce application built with React and Node.js."
            tech={['Java', 'xml', 'Android', 'Google.API', 'Youtube.API']}
            icon={<Android sx={{ color: '#4caf50' }} />}
            color="#4caf50"
            links={{ github: 'https://github.com/GarvitBansal2001/Bookie'}}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
