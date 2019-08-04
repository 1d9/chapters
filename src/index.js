// @flow strict
import { render, createElement as h } from 'preact';
import { Quarry } from './components/Chapter';
import { TitleScreen } from './components/TitleScreen';

const main = (body/*: HTMLBodyElement*/) => {
  const reactRoot = body.appendChild(document.createElement('div'));
  render(h(TitleScreen, {}, h(Quarry)), reactRoot);
};

if (document.body) {
  main(document.body);
} else {
  console.log('where the doc?');
}