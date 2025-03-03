'use client';
import React from 'react';
import Image from 'next/image';
import { digismileLogoImage } from '@/assets/images';
import { Box } from '@chakra-ui/react';

interface LogoProps {
  width?: string;
  height?: string;
  className?: string;
}

const DigiSmileLogo: React.FC<LogoProps> = ({
  width = '100px',
  height = '100px',
  className = '',
}) => {
  return (
    <Box
      className={`flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <Image
        src={digismileLogoImage}
        alt={'digismile logo'}
        className="object-contain"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </Box>
  );
};

export default DigiSmileLogo;
