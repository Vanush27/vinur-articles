import React from 'react';
import {SvgXml} from 'react-native-svg';

interface IRenderSocialSite {
  icon: string;
  width?: number;
  height?: number;
  fill?: string;
}
const RenderIcon = ({
  icon,
  width = 24,
  height = 24,
  fill = '#DFF9',
}: IRenderSocialSite) => {
  return <SvgXml xml={icon} width={width} height={height} fill={fill} />;
};

export default RenderIcon;
