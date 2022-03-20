import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/rodneybarnes/ai-timeline.git',
  user: {
   name: 'Rodney Barnes',
   email: 'rodney@barnes.codes'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);