import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectList from './projectModel';
import { Avatar, Box, Typography } from '@mui/material';

const ProjectShowcaseApp = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects(projectList);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
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
                <Typography variant="h3" align="center" sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif'}}>
                    Garvit Bansal
                </Typography>
                <Typography align="center" sx={{ color: '#fff', marginBottom: 4 }}>
                    Software Engineer | Ex-DUite | Ex-Tytlarian
                </Typography>
                <h1 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    Projects
                </h1>
                {loading ? (
                    <div className="text-gray-400 text-center">Loading projects...</div> // Simple loading indicator
                ) : (
                    <AnimatePresence>
                        <div className="space-y-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
};

export default ProjectShowcaseApp;