
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
  component: ComponentCreator('/docs','298'),
  
  routes: [
{
  path: '/docs/algemeen/gefeliciteerd',
  component: ComponentCreator('/docs/algemeen/gefeliciteerd','0c5'),
  exact: true,
},
{
  path: '/docs/algemeen/inloggen',
  component: ComponentCreator('/docs/algemeen/inloggen','25e'),
  exact: true,
},
{
  path: '/docs/algemeen/sla',
  component: ComponentCreator('/docs/algemeen/sla','5ac'),
  exact: true,
},
{
  path: '/docs/algemeen/spoed',
  component: ComponentCreator('/docs/algemeen/spoed','a33'),
  exact: true,
},
{
  path: '/docs/bureau/aanleveren',
  component: ComponentCreator('/docs/bureau/aanleveren','801'),
  exact: true,
},
{
  path: '/docs/bureau/artboard',
  component: ComponentCreator('/docs/bureau/artboard','bf5'),
  exact: true,
},
{
  path: '/docs/bureau/dodont',
  component: ComponentCreator('/docs/bureau/dodont','a40'),
  exact: true,
},
{
  path: '/docs/bureau/json',
  component: ComponentCreator('/docs/bureau/json','188'),
  exact: true,
},
{
  path: '/docs/bureau/svg',
  component: ComponentCreator('/docs/bureau/svg','386'),
  exact: true,
},
{
  path: '/docs/bureau/voorkeuren',
  component: ComponentCreator('/docs/bureau/voorkeuren','d08'),
  exact: true,
},
{
  path: '/docs/content vullen/afbeelding',
  component: ComponentCreator('/docs/content vullen/afbeelding','954'),
  exact: true,
},
{
  path: '/docs/content vullen/caching',
  component: ComponentCreator('/docs/content vullen/caching','3c7'),
  exact: true,
},
{
  path: '/docs/content vullen/concept',
  component: ComponentCreator('/docs/content vullen/concept','ece'),
  exact: true,
},
{
  path: '/docs/content vullen/dupliceren',
  component: ComponentCreator('/docs/content vullen/dupliceren','f9b'),
  exact: true,
},
{
  path: '/docs/content vullen/pagina_templates',
  component: ComponentCreator('/docs/content vullen/pagina_templates','ebd'),
  exact: true,
},
{
  path: '/docs/content vullen/pdfinbutton',
  component: ComponentCreator('/docs/content vullen/pdfinbutton','91b'),
  exact: true,
},
{
  path: '/docs/content vullen/permalinks',
  component: ComponentCreator('/docs/content vullen/permalinks','c53'),
  exact: true,
},
{
  path: '/docs/content vullen/posttypes',
  component: ComponentCreator('/docs/content vullen/posttypes','fe7'),
  exact: true,
},
{
  path: '/docs/content vullen/uitgelichte_afbeelding',
  component: ComponentCreator('/docs/content vullen/uitgelichte_afbeelding','166'),
  exact: true,
},
{
  path: '/docs/content vullen/uitleg',
  component: ComponentCreator('/docs/content vullen/uitleg','c9e'),
  exact: true,
},
{
  path: '/docs/content vullen/wysiwyg',
  component: ComponentCreator('/docs/content vullen/wysiwyg','4db'),
  exact: true,
},
{
  path: '/docs/formulieren/aanmaken',
  component: ComponentCreator('/docs/formulieren/aanmaken','597'),
  exact: true,
},
{
  path: '/docs/formulieren/beveiligingen',
  component: ComponentCreator('/docs/formulieren/beveiligingen','844'),
  exact: true,
},
{
  path: '/docs/formulieren/bevestigingen',
  component: ComponentCreator('/docs/formulieren/bevestigingen','631'),
  exact: true,
},
{
  path: '/docs/formulieren/conditioneel',
  component: ComponentCreator('/docs/formulieren/conditioneel','fcf'),
  exact: true,
},
{
  path: '/docs/formulieren/gebruiken',
  component: ComponentCreator('/docs/formulieren/gebruiken','1a3'),
  exact: true,
},
{
  path: '/docs/formulieren/inzendingen',
  component: ComponentCreator('/docs/formulieren/inzendingen','879'),
  exact: true,
},
{
  path: '/docs/formulieren/mailchimp',
  component: ComponentCreator('/docs/formulieren/mailchimp','561'),
  exact: true,
},
{
  path: '/docs/formulieren/mails',
  component: ComponentCreator('/docs/formulieren/mails','84a'),
  exact: true,
},
{
  path: '/docs/formulieren/meldingen',
  component: ComponentCreator('/docs/formulieren/meldingen','7f8'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/leadinfo/dashboard',
  component: ComponentCreator('/docs/leadinfo/dashboard','32a'),
  exact: true,
},
{
  path: '/docs/leadinfo/exporteren',
  component: ComponentCreator('/docs/leadinfo/exporteren','177'),
  exact: true,
},
{
  path: '/docs/leadinfo/inbox',
  component: ComponentCreator('/docs/leadinfo/inbox','a05'),
  exact: true,
},
{
  path: '/docs/leadinfo/triggers',
  component: ComponentCreator('/docs/leadinfo/triggers','edd'),
  exact: true,
},
{
  path: '/docs/livegang/livegang',
  component: ComponentCreator('/docs/livegang/livegang','0e0'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/filebird',
  component: ComponentCreator('/docs/mediabibliotheek/filebird','0dd'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/groot',
  component: ComponentCreator('/docs/mediabibliotheek/groot','324'),
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
{
  path: '/docs/mediabibliotheek/svg',
  component: ComponentCreator('/docs/mediabibliotheek/svg','726'),
  exact: true,
},
{
  path: '/docs/mediabibliotheek/vervangen',
  component: ComponentCreator('/docs/mediabibliotheek/vervangen','181'),
  exact: true,
},
{
  path: '/docs/seo/analytics',
  component: ComponentCreator('/docs/seo/analytics','e04'),
  exact: true,
},
{
  path: '/docs/seo/rankmath',
  component: ComponentCreator('/docs/seo/rankmath','7b7'),
  exact: true,
},
{
  path: '/docs/seo/yoast',
  component: ComponentCreator('/docs/seo/yoast','c4b'),
  exact: true,
},
{
  path: '/docs/thatsit',
  component: ComponentCreator('/docs/thatsit','ec6'),
  exact: true,
},
{
  path: '/docs/tools/comprimerenafbeelding',
  component: ComponentCreator('/docs/tools/comprimerenafbeelding','32c'),
  exact: true,
},
{
  path: '/docs/tools/leadinfo',
  component: ComponentCreator('/docs/tools/leadinfo','8b8'),
  exact: true,
},
{
  path: '/docs/tools/partners_documenten',
  component: ComponentCreator('/docs/tools/partners_documenten','c1e'),
  exact: true,
},
{
  path: '/docs/tools/privacypolicy',
  component: ComponentCreator('/docs/tools/privacypolicy','906'),
  exact: true,
},
{
  path: '/docs/tools/unsplash',
  component: ComponentCreator('/docs/tools/unsplash','804'),
  exact: true,
},
{
  path: '/docs/woocommerce/aanmaken',
  component: ComponentCreator('/docs/woocommerce/aanmaken','b09'),
  exact: true,
},
{
  path: '/docs/woocommerce/pdf',
  component: ComponentCreator('/docs/woocommerce/pdf','c07'),
  exact: true,
},
{
  path: '/docs/woocommerce/settings/belasting',
  component: ComponentCreator('/docs/woocommerce/settings/belasting','41e'),
  exact: true,
},
{
  path: '/docs/woocommerce/settings/mailinstellingen',
  component: ComponentCreator('/docs/woocommerce/settings/mailinstellingen','531'),
  exact: true,
},
{
  path: '/docs/woocommerce/settings/mailtemplates',
  component: ComponentCreator('/docs/woocommerce/settings/mailtemplates','338'),
  exact: true,
},
{
  path: '/docs/woocommerce/settings/verzendkosten',
  component: ComponentCreator('/docs/woocommerce/settings/verzendkosten','3f5'),
  exact: true,
},
{
  path: '/docs/woocommerce/variaties',
  component: ComponentCreator('/docs/woocommerce/variaties','5b5'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
