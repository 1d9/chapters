// @flow strict
import { createElement as h } from 'preact';
import { useState } from 'preact/hooks';

const chapterPages = [
  {
    background: { bottom: 'rgb(230, 169, 131)', top: 'rgb(59, 184, 255)' },
    pageTitle: 'Little Brother',
    text: [
      'Zemira and Veil pass overland, soon passing out of sight of Vermatrix and Rairlyrth. ' +
      'Valkyrie\'s GEAR box helps push the pair up and over the dangerous cliff faces, towards the Expeditionary Force Chapel.',
      'The Chapel comes into view, as does the Observatory. It looks like the damage that they took from the Storm Drow hasnt been repaired yet. ' +
      'Chunks of wall are missing, and scorch marks from lightning strikes and spot fires decorate the outside of the buildings',
      'While there doesnt look like there is much activity, you do see a couple of horses stationed inside the Chapel\'s stables.'
    ],
    promptText: 'Approach the Chapel',
  },
  {
    background: { bottom: 'rgb(219, 97, 35)', top: 'rgb(59, 110, 255)' },
    pageTitle: 'Expeditionary Force Chapel',
    text: [
      'You approach the chapel.',
      'Spotting you as you pull up, a guard makes herself known by exiting the entrance. She has the armor of one of the members ' +
      'of the Expeditionary Force, and the iconage of a Paladin of Helm. She looks tired.',
      '"Hail Zemira, Heil Veil!"',
      '"I haven\'t seen you two since the attacks. Did you spot any dragons down the cliffside? It sounded like they\'re going at it again."',
      'You offer your greetings, and catch up on some recent news.',
      '"Captin Merrew has been flat out handling the repairs and getting the guild into some sort of shape. ' +
      'Those fat cats down at Hemm\'s Port aren\'t helping much, but they\'re a little more co-operative since the Dragons started breathing down their neck."'
    ],
    promptText: 'Enter the Chapel',
  },
  {
    pageTitle: 'Chapel Entrance',
    background: { bottom: 'rgb(219, 97, 35)', top: 'rgb(59, 110, 255)' },
    text: [
      'You enter the chapel.',
      'Inside, you can see maps, charts, schedules and provisions scatterd about.',
      'There are several doors that branch off, but you can hear the voice of Captain Merrew through the main door that leads to the Chapel Hall.',
    ],
    promptText: 'Speak with Captain Merrew',
  },
  {
    pageTitle: 'Chapel Headquarters',
    background: { bottom: 'rgb(219, 97, 35)', top: 'rgb(59, 110, 255)' },
    text: [
      'You knock against the door. You hear a curt response. "Come in."',
    ],
    promptText: 'Inquire about the passageway in the Altar Room',
  },
  {
    pageTitle: 'The Main Hall',
    background: { bottom: 'rgb(219, 97, 35)', top: 'rgb(59, 110, 255)' },
    text: [
    ],
    promptText: 'Open the passageway and enter',
  },
  {
    pageTitle: 'The Secret Passage',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
    ],
    promptText: 'Open the caged door',
  },
  {
    pageTitle: 'The Weave, The Loom, The Scope, and the Dying Sun',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
    ],
    promptText: 'Try to speak with the Dwarf',
  },
  {
    pageTitle: 'Cast From Iron, Carved from Oak, Hewn from Stone',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
    ],
    promptText: 'Inspect the rest of the Room',
  },
  {
    pageTitle: 'Tarzeus The Many and Only',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
    ],
    promptText: 'Ignore Tarzeus and leave',
  },
  {
    pageTitle: 'The Duke of the Tenth Plane of Hell',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
    ],
    promptText: 'Ignore The Duke and leave',
  },
  {
    pageTitle: 'The Aboleth That Knows of Fate',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
    ],
    promptText: 'Ignore The Aboleth and leave',
  },
];

const getBackgroundStyle = ({ top, bottom }) => ({
  backgroundImage: `linear-gradient(0deg, ${bottom} 0%, ${top} 100%)`,
});

export const Quarry = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = chapterPages[pageIndex];

  const onPromptClick = (event) => {
    if (pageIndex < chapterPages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const onPageRef = (index) => (ref) => {
    if (index === pageIndex && ref) {
      ref.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return h('div', { className: 'quarry-background', style: getBackgroundStyle(currentPage.background) },
    h('div', { className: 'quarry-content' },
      h('h1', { className: 'quarry-title' }, 'The Quarry of the Protectors Guild'),
      h('audio', { autoplay: 'true', loop: 'true', src: './audio/quarry.mp3' }),
      h('div', { className: 'chapter-page-container' },
        chapterPages.map((page, index) => 
          index <= pageIndex && h('div', { key: index, className: 'chapter-page', ref: onPageRef(index) },
            page.pageTitle && h('h2', { className: 'chapter-page-title' }, page.pageTitle),
            ...page.text.map((para, index) => h('p', { key: index, className: 'chapter-event-text' }, para)),
            index === pageIndex && page.promptText &&
              h('button', { className: 'chapter-page-prompt-button', onClick: onPromptClick }, page.promptText)
          )
        ),
      ),
    ),
  )
};
