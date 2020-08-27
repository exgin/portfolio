import blmwebsite from '../../../assets/images/fulls/blmwebsite.gif'
import skatewebsite from '../../../assets/images/fulls/websitedemo.gif'
import hackernews from '../../../assets/images/fulls/hackernews.gif'
import jobly from '../../../assets/images/fulls/jobly.gif'
import microblog from '../../../assets/images/fulls/microblog.gif'
import warb from '../../../assets/images/fulls/warb.gif'

import thumb02 from '../../../assets/images/thumbs/02j.jpg'
import thumb01 from '../../../assets/images/thumbs/01j.jpg'
import thumb03 from '../../../assets/images/thumbs/03j.jpg'
import thumb04 from '../../../assets/images/thumbs/04j.jpg'
import thumb05 from '../../../assets/images/thumbs/05j.jpg'
import thumb06 from '../../../assets/images/thumbs/06j.jpg'

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: skatewebsite,
    thumbnail: thumb02,
    caption: 'One Stop Shop Skate Spot | Project',
    description: 'Stack Used: JavaScript & jQuery | Python /w Flask | Postgres',
    link: 'https://one-stop-skate-spot-exgin.herokuapp.com/',
  },
  {
    id: '2',
    source: blmwebsite,
    thumbnail: thumb01,
    caption: 'Black Lives Matter | Project',
    description: 'Stack Used: React & Redux | NodeJS /w ExpressJS | Postgres',
    link: 'https://blm-sammy.netlify.app/',
  },
  {
    id: '3',
    source: warb,
    thumbnail: thumb03,
    caption: 'Twitter Clone | Course Work',
    description: 'Fullstack assignment using Python, Jinja templates & Flask',
    link: '',
  },
  {
    id: '4',
    source: hackernews,
    thumbnail: thumb04,
    caption: 'Hacker News Clone | Course Work',
    description: 'Frontend assignment using vanilla HTML/CSS & JavaScript',
    link: 'https://exgin.github.io/hacker-news-clone/',
  },
  {
    id: '5',
    source: jobly,
    thumbnail: thumb05,
    caption: 'Apply To Jobs | Course Work',
    description: 'Fullstack assignment using React /w Redux, NodeJS /w Express',
    link: 'https://jobly-fullstack.herokuapp.com/',
  },
  {
    id: '6',
    source: microblog,
    thumbnail: thumb06,
    caption: 'Blog Website | Course Work',
    description: 'Fullstack assignment using React /w Redux, NodeJS /w Express',
    link: 'https://microblog-front.netlify.app/',
  },
]
