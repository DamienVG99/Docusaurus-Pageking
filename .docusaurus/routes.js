
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/my-markdown-page',
  component: ComponentCreator('/my-markdown-page','81e'),
  exact: true,
},
{
  path: '/my-react-page',
  component: ComponentCreator('/my-react-page','86f'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','705'),
  
  routes: [
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/je-eerste-login/formulieren',
  component: ComponentCreator('/docs/je-eerste-login/formulieren','ac4'),
  exact: true,
},
{
  path: '/docs/je-eerste-login/gefeliciteerd',
  component: ComponentCreator('/docs/je-eerste-login/gefeliciteerd','bd0'),
  exact: true,
},
{
  path: '/docs/je-eerste-login/inloggen',
  component: ComponentCreator('/docs/je-eerste-login/inloggen','d39'),
  exact: true,
},
{
  path: '/docs/je-eerste-login/mediabibliotheek',
  component: ComponentCreator('/docs/je-eerste-login/mediabibliotheek','869'),
  exact: true,
},
{
  path: '/docs/je-eerste-login/paginas',
  component: ComponentCreator('/docs/je-eerste-login/paginas','a81'),
  exact: true,
},
{
  path: '/docs/je-eerste-login/thatsit',
  component: ComponentCreator('/docs/je-eerste-login/thatsit','c70'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/filebird',
  component: ComponentCreator('/docs/mediabibliotheek/filebird','0dd'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/media-aanpassen',
  component: ComponentCreator('/docs/mediabibliotheek/media-aanpassen','aa4'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/media-tags',
  component: ComponentCreator('/docs/mediabibliotheek/media-tags','f8b'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/media-uploaden',
  component: ComponentCreator('/docs/mediabibliotheek/media-uploaden','b72'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
