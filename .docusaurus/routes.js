
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','0f9'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page','41b'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page','494'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','ad0'),
    routes: [
      {
        path: '/docs/algemeen/gefeliciteerd',
        component: ComponentCreator('/docs/algemeen/gefeliciteerd','31d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algemeen/inloggen',
        component: ComponentCreator('/docs/algemeen/inloggen','bd7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algemeen/sla',
        component: ComponentCreator('/docs/algemeen/sla','103'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/algemeen/spoed',
        component: ComponentCreator('/docs/algemeen/spoed','ee3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bureau/aanleveren',
        component: ComponentCreator('/docs/bureau/aanleveren','2c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bureau/artboard',
        component: ComponentCreator('/docs/bureau/artboard','51e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bureau/dodont',
        component: ComponentCreator('/docs/bureau/dodont','ae7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bureau/json',
        component: ComponentCreator('/docs/bureau/json','749'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bureau/svg',
        component: ComponentCreator('/docs/bureau/svg','8ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bureau/voorkeuren',
        component: ComponentCreator('/docs/bureau/voorkeuren','65f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/afbeelding',
        component: ComponentCreator('/docs/content vullen/afbeelding','e0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/caching',
        component: ComponentCreator('/docs/content vullen/caching','a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/concept',
        component: ComponentCreator('/docs/content vullen/concept','58a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/dupliceren',
        component: ComponentCreator('/docs/content vullen/dupliceren','368'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/pagina_templates',
        component: ComponentCreator('/docs/content vullen/pagina_templates','5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/pdfinbutton',
        component: ComponentCreator('/docs/content vullen/pdfinbutton','bbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/permalinks',
        component: ComponentCreator('/docs/content vullen/permalinks','a27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/posttypes',
        component: ComponentCreator('/docs/content vullen/posttypes','922'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/uitgelichte_afbeelding',
        component: ComponentCreator('/docs/content vullen/uitgelichte_afbeelding','cb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/uitleg',
        component: ComponentCreator('/docs/content vullen/uitleg','95c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/content vullen/wysiwyg',
        component: ComponentCreator('/docs/content vullen/wysiwyg','c44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/aanmaken',
        component: ComponentCreator('/docs/formulieren/aanmaken','325'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/beveiligingen',
        component: ComponentCreator('/docs/formulieren/beveiligingen','0fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/bevestigingen',
        component: ComponentCreator('/docs/formulieren/bevestigingen','421'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/conditioneel',
        component: ComponentCreator('/docs/formulieren/conditioneel','8ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/gebruiken',
        component: ComponentCreator('/docs/formulieren/gebruiken','f23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/inzendingen',
        component: ComponentCreator('/docs/formulieren/inzendingen','f10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/mailchimp',
        component: ComponentCreator('/docs/formulieren/mailchimp','20b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/mails',
        component: ComponentCreator('/docs/formulieren/mails','3fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/formulieren/meldingen',
        component: ComponentCreator('/docs/formulieren/meldingen','9fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/leadinfo/dashboard',
        component: ComponentCreator('/docs/leadinfo/dashboard','628'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/leadinfo/exporteren',
        component: ComponentCreator('/docs/leadinfo/exporteren','286'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/leadinfo/inbox',
        component: ComponentCreator('/docs/leadinfo/inbox','630'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/leadinfo/triggers',
        component: ComponentCreator('/docs/leadinfo/triggers','72f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/livegang/',
        component: ComponentCreator('/docs/livegang/','eca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/filebird',
        component: ComponentCreator('/docs/mediabibliotheek/filebird','2ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/groot',
        component: ComponentCreator('/docs/mediabibliotheek/groot','d1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/media-aanpassen',
        component: ComponentCreator('/docs/mediabibliotheek/media-aanpassen','913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/media-tags',
        component: ComponentCreator('/docs/mediabibliotheek/media-tags','40c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/media-uploaden',
        component: ComponentCreator('/docs/mediabibliotheek/media-uploaden','583'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/svg',
        component: ComponentCreator('/docs/mediabibliotheek/svg','9c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mediabibliotheek/vervangen',
        component: ComponentCreator('/docs/mediabibliotheek/vervangen','3e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/seo/analytics',
        component: ComponentCreator('/docs/seo/analytics','f7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/seo/rankmath',
        component: ComponentCreator('/docs/seo/rankmath','850'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/seo/yoast',
        component: ComponentCreator('/docs/seo/yoast','828'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thatsit',
        component: ComponentCreator('/docs/thatsit','426'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/comprimerenafbeelding',
        component: ComponentCreator('/docs/tools/comprimerenafbeelding','130'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/leadinfo',
        component: ComponentCreator('/docs/tools/leadinfo','758'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/partners_documenten',
        component: ComponentCreator('/docs/tools/partners_documenten','00c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/privacypolicy',
        component: ComponentCreator('/docs/tools/privacypolicy','564'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/unsplash',
        component: ComponentCreator('/docs/tools/unsplash','b79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/aanmaken',
        component: ComponentCreator('/docs/woocommerce/aanmaken','19a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/pdf',
        component: ComponentCreator('/docs/woocommerce/pdf','24d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/settings/belasting',
        component: ComponentCreator('/docs/woocommerce/settings/belasting','869'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/settings/mailinstellingen',
        component: ComponentCreator('/docs/woocommerce/settings/mailinstellingen','f2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/settings/mailtemplates',
        component: ComponentCreator('/docs/woocommerce/settings/mailtemplates','755'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/settings/verzendkosten',
        component: ComponentCreator('/docs/woocommerce/settings/verzendkosten','092'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/woocommerce/variaties',
        component: ComponentCreator('/docs/woocommerce/variaties','0fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','85b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
