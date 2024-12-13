import React from 'react';

export type SidebarItemType = {
  link: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
  authOnly?: boolean
}