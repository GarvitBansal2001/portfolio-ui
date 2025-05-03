import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import './../style.css'
import {
  CodeIcon,
  BookOpenIcon,
  TerminalIcon,
  FileIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GithubIcon,
  DownloadIcon,
  Brain,
  Bot
} from 'lucide-react';

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const projectCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.1 } },
};

const Card = ({ className, children, ...props }) => (
  <div className={cn('rounded-md bg-gray-900 border border-white/10 shadow-lg', className)} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className, children, ...props }) => (
  <div className={cn('p-6', className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);

const Button = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  asChild = false,
  ...props
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variant === 'default' && 'bg-blue-500 text-white hover:bg-blue-600',
    variant === 'secondary' && 'bg-gray-800 text-white hover:bg-gray-700',
    variant === 'outline' && 'border border-white-700 text-white hover:bg-gray-800',
    variant === 'ghost' && 'text-white hover:bg-gray-800',
    variant === 'link' && 'text-blue-400 underline-offset-4 hover:underline',
    size === 'default' && 'px-4 py-2',
    size === 'sm' && 'px-3 py-1.5 text-sm',
    size === 'lg' && 'px-6 py-3 text-lg',
    size === 'icon' && 'h-9 w-9 p-0',
    className
  );

  const Comp = asChild ? React.Fragment : 'button';

  if (asChild) {
    return <>{children}</>;
  }

  return (
    <Comp className={baseClasses} {...props}>
      {children}
    </Comp>
  );
};

const Badge = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseClasses = cn(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    variant === 'secondary' && 'bg-white/10 text-gray-300 border-white/20',
    variant === 'destructive' && 'bg-red-500 text-white',
    variant === 'outline' && 'text-white border border-gray-700',
    className
  );

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case 'app':
        return <CodeIcon className="w-5 h-5 mr-2 text-blue-400" />;
      case 'library':
        return <BookOpenIcon className="w-5 h-5 mr-2 text-red-400" />;
      case 'website':
        return <TerminalIcon className="w-5 h-5 mr-2 text-purple-400" />;
      case 'documentation':
        return <FileIcon className="w-5 h-5 mr-2 text-yellow-400" />;
      case 'android':
        return <Bot className="w-5 h-5 mr-2 text-green-500" />;
      case 'predictor':
        return <Brain className="w-5 h-5 mr-2 text-orange-500" />;
      default:
        return <FileIcon className="w-5 h-5 mr-2" />;
    }
  };

  return (
    <motion.div
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Card className="bg-gray-900 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {getIcon(project.type)}
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="text-gray-400 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/10 text-gray-300 border-white/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
          {project.links && (
            <div className="flex gap-4 mt-4">
              {project.links.github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600"
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <GithubIcon className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.links.download && (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300 border-green-500/30"
                >
                  <a
                    href={project.links.download}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardHeader>
        <AnimatePresence>
          {isOpen && (
            <CardContent>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4 space-y-4"
              >
                {project.content}
              </motion.div>
            </CardContent>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
