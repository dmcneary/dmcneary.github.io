import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Grid,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Memory as MemoryIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  AccountTree as AccountTreeIcon,
  Science as ScienceIcon,
  Terminal as TerminalIcon,
  Language as LanguageIcon
} from '@mui/icons-material';

const TechWheel = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [rotation, setRotation] = useState(0);

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.2);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      id: 'react',
      name: 'React',
      icon: <MemoryIcon />,
      emoji: '⚛️',
      color: '#00FFFF',
      accent: '#61DAFB',
      description: 'Component-based UI library with virtual DOM for building interactive interfaces.',
      textLogo: 'REACT',
      status: 'EXPERT'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: <TerminalIcon />,
      emoji: '🟢',
      color: '#00FF41',
      accent: '#339933',
      description: 'Server-side JavaScript runtime for scalable network applications.',
      textLogo: 'NODE.JS',
      status: 'PROFICIENT'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: <CodeIcon />,
      emoji: '📘',
      color: '#0080FF',
      accent: '#3178C6',
      description: 'Strongly typed superset of JavaScript for enterprise-grade development.',
      textLogo: 'TYPESCRIPT',
      status: 'PROFICIENT'
    },
    {
      id: 'python',
      name: 'Python',
      icon: <ScienceIcon />,
      emoji: '🐍',
      color: '#FFD700',
      accent: '#3776AB',
      description: 'High-level programming language for AI, data science, and web development.',
      textLogo: 'PYTHON',
      status: 'EXPERT'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: <StorageIcon />,
      emoji: '🍃',
      color: '#00FF80',
      accent: '#47A248',
      description: 'NoSQL document database for modern cloud-based applications.',
      textLogo: 'MONGODB',
      status: 'PROFICIENT'
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: <AccountTreeIcon />,
      emoji: '🐳',
      color: '#00BFFF',
      accent: '#2496ED',
      description: 'Containerization platform for consistent deployment across environments.',
      textLogo: 'DOCKER',
      status: 'INTERMEDIATE'
    },
    {
      id: 'aws',
      name: 'AWS',
      icon: <CloudIcon />,
      emoji: '☁️',
      color: '#FF8C00',
      accent: '#FF9900',
      description: 'Cloud computing services for scalable infrastructure and deployment.',
      textLogo: 'AWS',
      status: 'PROFICIENT'
    },
    {
      id: 'git',
      name: 'Git',
      icon: <LanguageIcon />,
      emoji: '🔧',
      color: '#FF4500',
      accent: '#F05032',
      description: 'Distributed version control system for collaborative development.',
      textLogo: 'GIT',
      status: 'EXPERT'
    }
  ];

  const radius = 160;
  const centerX = 250;
  const centerY = 250;

  const getPosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'EXPERT': return '#00FF00';
      case 'PROFICIENT': return '#FFD700';
      case 'INTERMEDIATE': return '#FF8C00';
      default: return '#FFFFFF';
    }
  };

  // Circuit patterns
  const CircuitPattern = ({ opacity = 0.3 }) => (
    <Box
      component="svg"
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity
      }}
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M10 10h20v20h-20z" fill="none" stroke="#00FFFF" strokeWidth="0.5"/>
          <circle cx="10" cy="10" r="1" fill="#00FFFF"/>
          <circle cx="30" cy="10" r="1" fill="#00FFFF"/>
          <circle cx="10" cy="30" r="1" fill="#00FFFF"/>
          <circle cx="30" cy="30" r="1" fill="#00FFFF"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)"/>
    </Box>
  );

  // Hexagonal grid
  const HexGrid = () => (
    <Box
      component="svg"
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.2
      }}
    >
      <defs>
        <pattern id="hexgrid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
          <polygon points="30,1 52,15 52,37 30,51 8,37 8,15" fill="none" stroke="#00FFFF" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexgrid)"/>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'black',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, black 0%, #1a1a1a 50%, black 100%)'
        }}
      >
        <HexGrid />
        <CircuitPattern />
        
        {/* Animated background lines */}
        <Box sx={{ position: 'absolute', inset: 0 }}>
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #00FFFF, transparent)',
                opacity: 0.3,
                top: `${20 + i * 20}%`,
                left: '-100%',
                width: '200%',
                animation: `slide-right ${3 + i}s linear infinite`,
                '@keyframes slide-right': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' }
                }
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ position: 'relative', zIndex: 10 }}>
        {/* Main wheel container */}
        <Box sx={{ position: 'relative', width: 500, height: 500 }}>
          
          {/* Outer ring decorations */}
          <Box sx={{ position: 'absolute', inset: 4 }}>
            <Box
              component="svg"
              sx={{
                width: '100%',
                height: '100%',
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <circle 
                cx="50%" 
                cy="50%" 
                r="180" 
                fill="none" 
                stroke="url(#outerGradient)" 
                strokeWidth="2"
                strokeDasharray="5,10"
                opacity="0.6"
              />
              <circle 
                cx="50%" 
                cy="50%" 
                r="200" 
                fill="none" 
                stroke="#00FFFF" 
                strokeWidth="1"
                strokeDasharray="2,15"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FFFF" />
                  <stop offset="50%" stopColor="#FF00FF" />
                  <stop offset="100%" stopColor="#00FFFF" />
                </linearGradient>
              </defs>
            </Box>
          </Box>

          {/* Center hub using MUI Card */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Card
              sx={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                border: '4px solid #00FFFF',
                bgcolor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'visible',
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 8,
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 255, 255, 0.5)',
                  background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))'
                }
              }}
            >
              <CircuitPattern opacity={0.2} />
              
              <CardContent sx={{ textAlign: 'center', p: 0, zIndex: 10 }}>
                {selectedTech ? (
                  <Box sx={{ transition: 'all 0.5s ease-out' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: selectedTech.color,
                        mb: 1,
                        filter: 'drop-shadow(0 0 10px currentColor)',
                        textShadow: `0 0 10px ${selectedTech.color}`
                      }}
                    >
                      {selectedTech.emoji}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        letterSpacing: 1
                      }}
                    >
                      {selectedTech.textLogo}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        mt: 0.5,
                        color: '#00FFFF',
                        fontFamily: 'monospace',
                        fontSize: '0.7rem'
                      }}
                    >
                      ▼ ACTIVE ▼
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#00FFFF',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        mb: 0.5
                      }}
                    >
                      ◆ TECH STACK ◆
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontFamily: 'monospace',
                        opacity: 0.75
                      }}
                    >
                      HOVER TO SCAN
                    </Typography>
                  </Box>
                )}
              </CardContent>

              {/* Rotating inner ring */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 16,
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  transform: `rotate(${-rotation * 2}deg)`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 8,
                    height: 8,
                    bgcolor: '#00FFFF',
                    borderRadius: '50%'
                  }
                }}
              />

              {/* Pulsing outer glow */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 255, 255, 0.3)',
                  animation: 'ping 2s infinite',
                  '@keyframes ping': {
                    '0%': { transform: 'scale(1)', opacity: 1 },
                    '75%, 100%': { transform: 'scale(1.1)', opacity: 0 }
                  }
                }}
              />
            </Card>
          </Box>

          {/* Technology nodes using MUI components */}
          {technologies.map((tech, index) => {
            const position = getPosition(index, technologies.length);
            const isSelected = selectedTech?.id === tech.id;

            return (
              <Box
                key={tech.id}
                sx={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  left: position.x,
                  top: position.y,
                  zIndex: isSelected ? 20 : 10,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={() => setSelectedTech(tech)}
                onMouseLeave={() => setSelectedTech(null)}
              >
                <Box sx={{ position: 'relative' }}>
                  {/* Outer glow ring */}
                  {isSelected && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: -4,
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        border: '2px solid',
                        borderColor: tech.color,
                        boxShadow: `0 0 20px ${tech.color}`,
                        animation: 'pulse 1s infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 1 },
                          '50%': { opacity: 0.5 }
                        }
                      }}
                    />
                  )}
                  
                  {/* Main node using Tooltip and IconButton */}
                  <Tooltip title={tech.name} placement="top">
                    <IconButton
                      sx={{
                        width: 72,
                        height: 72,
                        border: '2px solid',
                        borderColor: isSelected ? tech.color : 'rgba(0, 255, 255, 0.5)',
                        bgcolor: isSelected ? `${tech.color}20` : 'rgba(0, 0, 0, 0.8)',
                        color: isSelected ? tech.color : '#00FFFF',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: isSelected 
                          ? `0 0 25px ${tech.color}80, inset 0 0 25px ${tech.color}20`
                          : '0 0 10px rgba(0, 255, 255, 0.3)',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          bgcolor: `${tech.color}30`
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          background: `conic-gradient(from 0deg, transparent, ${tech.color}40, transparent)`,
                          borderRadius: '50%',
                          opacity: isSelected ? 1 : 0,
                          animation: isSelected ? 'spin 2s linear infinite' : 'none',
                          '@keyframes spin': {
                            from: { transform: 'rotate(0deg)' },
                            to: { transform: 'rotate(360deg)' }
                          }
                        }
                      }}
                    >
                      {/* Hexagonal pattern overlay */}
                      <Box
                        component="svg"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          opacity: 0.3
                        }}
                      >
                        <polygon 
                          points="36,10 60,25 60,45 36,60 12,45 12,25" 
                          fill="none" 
                          stroke={tech.color} 
                          strokeWidth="1"
                          opacity="0.5"
                        />
                      </Box>
                      
                      {/* Icon */}
                      <Box sx={{ position: 'relative', zIndex: 10, fontSize: '1.5rem' }}>
                        {tech.icon}
                      </Box>
                    </IconButton>
                  </Tooltip>

                  {/* Node label using Chip */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      mt: 1
                    }}
                  >
                    <Chip
                      label={tech.name.toUpperCase()}
                      size="small"
                      sx={{
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        color: isSelected ? tech.color : '#00FFFF',
                        borderColor: isSelected ? tech.color : 'rgba(0, 255, 255, 0.5)',
                        bgcolor: 'rgba(0, 0, 0, 0.8)',
                        '& .MuiChip-label': {
                          px: 1
                        }
                      }}
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}

          {/* Connection lines and data streams */}
          <Box
            component="svg"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            {technologies.map((tech, index) => {
              const position = getPosition(index, technologies.length);
              const isSelected = selectedTech?.id === tech.id;
              
              return (
                <g key={tech.id}>
                  {/* Main connection line */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={position.x}
                    y2={position.y}
                    stroke={isSelected ? tech.color : 'rgba(0, 255, 255, 0.3)'}
                    strokeWidth={isSelected ? "3" : "1"}
                    strokeDasharray={isSelected ? "none" : "5,5"}
                    style={{
                      transition: 'all 0.3s ease',
                      filter: isSelected ? `drop-shadow(0 0 8px ${tech.color})` : undefined
                    }}
                  />
                  
                  {/* Data flow particles */}
                  {isSelected && (
                    <>
                      <circle
                        cx={centerX + (position.x - centerX) * 0.3}
                        cy={centerY + (position.y - centerY) * 0.3}
                        r="2"
                        fill={tech.color}
                        style={{ animation: 'pulse 1s infinite' }}
                      />
                      <circle
                        cx={centerX + (position.x - centerX) * 0.7}
                        cy={centerY + (position.y - centerY) * 0.7}
                        r="1.5"
                        fill={tech.color}
                        style={{ animation: 'pulse 1s infinite 0.5s' }}
                      />
                    </>
                  )}
                </g>
              );
            })}
          </Box>
        </Box>

        {/* Futuristic info panel using MUI Card */}
        {selectedTech && (
          <Box
            sx={{
              position: 'absolute',
              right: -384,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 320,
              animation: 'slideIn 0.5s ease-out',
              '@keyframes slideIn': {
                from: { transform: 'translateY(-50%) translateX(20px)', opacity: 0 },
                to: { transform: 'translateY(-50%) translateX(0)', opacity: 1 }
              }
            }}
          >
            <Card
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '2px solid',
                borderColor: selectedTech.color,
                borderRadius: 0,
                boxShadow: `0 0 30px ${selectedTech.color}40`,
                position: 'relative',
                overflow: 'hidden',
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  width: 16,
                  height: 16,
                  border: '2px solid',
                  borderColor: selectedTech.color
                },
                '&::before': {
                  top: 0,
                  left: 0,
                  borderRight: 'none',
                  borderBottom: 'none'
                },
                '&::after': {
                  bottom: 0,
                  right: 0,
                  borderLeft: 'none',
                  borderTop: 'none'
                }
              }}
            >
              {/* Scanning line */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${selectedTech.color}, transparent)`,
                  opacity: 0.6,
                  animation: 'slide-right 2s ease-in-out infinite'
                }}
              />

              <CardContent sx={{ p: 3, position: 'relative', zIndex: 10 }}>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'rgba(0, 0, 0, 0.5)',
                      border: '2px solid',
                      borderColor: selectedTech.color,
                      color: selectedTech.color,
                      mr: 2,
                      width: 48,
                      height: 48
                    }}
                  >
                    {selectedTech.icon}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        color: selectedTech.color
                      }}
                    >
                      {selectedTech.textLogo}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#00FFFF',
                        fontFamily: 'monospace'
                      }}
                    >
                      TECHNOLOGY_MODULE
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: `${selectedTech.color}40`, mb: 2 }} />

                {/* Description */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#00FFFF',
                      fontFamily: 'monospace',
                      display: 'block',
                      mb: 1
                    }}
                  >
                    ◆ DESCRIPTION:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#e0e0e0',
                      fontFamily: 'monospace',
                      lineHeight: 1.5
                    }}
                  >
                    {selectedTech.description}
                  </Typography>
                </Box>

                {/* Status indicators */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#00FFFF',
                        fontFamily: 'monospace',
                        display: 'block',
                        mb: 0.5
                      }}
                    >
                      STATUS:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: '#00FF00',
                          borderRadius: '50%',
                          mr: 1,
                          animation: 'pulse 1s infinite'
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#00FF00',
                          fontFamily: 'monospace'
                        }}
                      >
                        ACTIVE
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#00FFFF',
                        fontFamily: 'monospace',
                        display: 'block',
                        mb: 0.5
                      }}
                    >
                      LEVEL:
                    </Typography>
                    <Chip
                      label={selectedTech.status}
                      size="small"
                      sx={{
                        fontFamily: 'monospace',
                        fontSize: '0.65rem',
                        height: 20,
                        color: getStatusColor(selectedTech.status),
                        borderColor: getStatusColor(selectedTech.status),
                        bgcolor: 'transparent'
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>

              {/* Circuit pattern overlay */}
              <CircuitPattern opacity={0.1} />
            </Card>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TechWheel;