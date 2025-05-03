import React from 'react';
import { Card, CardContent, Typography, Chip, Button, CardActions } from '@mui/material';
import { GitHub, OpenInNew, FileDownload } from '@mui/icons-material';

const ProjectCard = ({ title, description, tech, links, icon, color }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#121212', color: '#fff', marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: color, fontSize: 20 }}>
          {icon}
          <span style={{ marginLeft: 10 }}>{title}</span>
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray', marginTop: 2 }}>
          {description}
        </Typography>
        <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {tech.map((tag, i) => (
            <Chip key={i} label={tag} sx={{ backgroundColor: '#333', color: 'white' }} size="small" />
          ))}
        </div>
      </CardContent>
      <CardActions>
        {links.github && (
          <Button
            size="small"
            startIcon={<GitHub />}
            href={links.github}
            target="_blank"
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            GitHub
          </Button>
        )}
        {links.website && (
          <Button
            size="small"
            startIcon={<OpenInNew />}
            href={links.website}
            target="_blank"
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            Website
          </Button>
        )}
        {links.download && (
          <Button
            size="small"
            startIcon={<FileDownload />}
            href={links.download}
            download={links.download.substring(links.download.lastIndexOf('/') + 1)}
            sx={{ color: '#fff', '&:hover': { backgroundColor: '#333' } }}
          >
            Download
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
