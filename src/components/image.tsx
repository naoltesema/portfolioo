import { type ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
}

export default function Image({ src, alt, fill, className, style, ...props }: ImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, width: '100%', height: '100%', objectFit: 'cover' }}
        {...props}
      />
    );
  }
  return <img src={src} alt={alt} className={className} style={style} {...props} />;
}

