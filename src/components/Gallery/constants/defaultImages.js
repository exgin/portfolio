import blmwebsite from '../../../assets/images/fulls/blmwebsite.gif'
import skatewebsite from '../../../assets/images/fulls/websitedemo.gif'
import hackernews from '../../../assets/images/fulls/hackernews.gif'
import jobly from '../../../assets/images/fulls/jobly.gif'
import microblog from '../../../assets/images/fulls/microblog.gif'
import warb from '../../../assets/images/fulls/warb.gif'

import thumb02 from '../../../assets/images/thumbs/02.png'
import thumb01 from '../../../assets/images/thumbs/01.png'
import thumb03 from '../../../assets/images/thumbs/03.png'
import thumb04 from '../../../assets/images/thumbs/04.png'
import thumb05 from '../../../assets/images/thumbs/05.png'
import thumb06 from '../../../assets/images/thumbs/06.png'

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: skatewebsite,
    thumbnail: thumb02,
    caption: 'One Stop Shop Skate Spot | project',
    description: 'Stack Used: JavaScript & jQuery | Python /w Flask | Postgres',
  },
  {
    id: '2',
    source: blmwebsite,
    thumbnail: thumb01,
    caption: 'Black Lives Matter | project',
    description: 'Stack Used: React & Redux | NodeJS /w ExpressJS | Postgres',
  },
  {
    id: '3',
    source: warb,
    thumbnail: thumb03,
    caption: 'Twitter Clone | course work',
    description:
      'Fullstack assignment using Python, Jinja templates & Flask, and authentication/authorization',
  },
  {
    id: '4',
    source: hackernews,
    thumbnail: thumb04,
    caption: 'Hacker News Clone | course work',
    description: 'Frontend assignment using vanilla HTML/CSS & JavaScript',
  },
  {
    id: '5',
    source: jobly,
    thumbnail: thumb05,
    caption: 'Apply To Jobs | course work',
    description:
      'Fullstack assignment using React /w Redux, NodeJS /w Express, and authentication/authorization',
  },
  {
    id: '6',
    source: microblog,
    thumbnail: thumb06,
    caption: 'Blog Website | course work',
    description: 'Fullstack assignment using React /w Redux, NodeJS /w Express',
  },
]
