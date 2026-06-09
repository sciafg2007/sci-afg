
// components/SkeletonLoader.tsx
import React from 'react';
import styles from "../../styles/ReUsables/skeleton.module.scss";

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  mobileHeight?: string | number;  // Height for screens < 768px
  tabletHeight?: string | number;  // Height for screens < 1024px
  borderRadius?: string | number;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '20px',
  mobileHeight,
  tabletHeight,
  borderRadius = '4px',
  className = '',
  variant = 'rectangular',
  animation = 'pulse',
}) => {
  const formatValue = (value: string | number) => {
    return typeof value === 'number' ? `${value}px` : value;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return {
          borderRadius: '50%',
          width: width,
          height: width, // Make it square for circular
        };
      case 'text':
        return {
          borderRadius: '4px',
          width: width,
          height: height || '16px',
        };
      case 'rectangular':
      default:
        return {
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        };
    }
  };

  const animationClass = animation !== 'none' ? styles[animation] : '';

  // Create CSS variables for responsive heights
  const responsiveStyles = {
    ...getVariantStyles(),
    ...(mobileHeight && { '--mobile-height': formatValue(mobileHeight) } as React.CSSProperties),
    ...(tabletHeight && { '--tablet-height': formatValue(tabletHeight) } as React.CSSProperties),
  };

  const responsiveClass = (mobileHeight || tabletHeight) ? styles.responsive : '';

  return (
    <div
      className={`${styles.skeleton} ${animationClass} ${responsiveClass} ${className}`}
      style={responsiveStyles}
    />
  );
};

export default SkeletonLoader;
