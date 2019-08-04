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
      'There are several doors that branch off, but you can hear the voice of Captain Merrew mutter to herself through the main door that leads to the Chapel Hall.',
    ],
    promptText: 'Speak with Captain Merrew',
  },
  {
    pageTitle: 'Chapel Headquarters',
    background: { bottom: 'rgb(219, 97, 35)', top: 'rgb(59, 110, 255)' },
    text: [
      'You knock against the door. You hear a curt response. "Come in."',
      '"I\'d say, youre a sight for sore eyes. Here to help with the repairs?"',
      'Merrew is sitting behind a large stack of paperwork, with forms ' +
      'and maps strewn about her desk. Veil notices that some of the paperwork is regarding shipments that Scratch forged; informing the recipient that ' +
      'the goods are on the way.',
      'You reply with your own investiation, regarding the mysterious door in the main hall.',
      'Merrew is surprised and confused, but after some thinking she rationalizes out your claim.',
      '"This building out-dates me, and probably the Expedition Force itself. I don\'t fully know the history of these rooms, ' +
      'so I guess it shouldn\'t surprise me too much they they\'ve still got history in them."',
      '"Go ahead. I\'m as curious as your are."'
    ],
    promptText: 'Enter the Main Hall',
  },
  {
    pageTitle: 'The Main Hall',
    background: { bottom: 'rgb(219, 97, 35)', top: 'rgb(59, 110, 255)' },
    text: [
      'The room is lit by a stained glass window leading outside, casting a orange-blue hue on the room.',
      'In the other end, behind a small podium is a large, engraved wall, filled with figures and plaques from the Protectors Guild.',
      'Right where you expect, inset inside a small carving, is the impression of a Protectors Guild Badge.',
      'Merrew looks at you curiously, noting that she has not (nor anybody that she knows of) ever noticed the spot.',
    ],
    promptText: 'Place your badge in the Impression and open the passageway',
  },
  {
    pageTitle: 'The Secret Passage',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
      'Just as Veil described, the stone doors slowly swung open, revealing a dim passageway, lit dramatically from underneath by pulsing red lights.',
      'Merrew draws her sword, but is otherwise silent as she and Zemira follow Veil into the Quarry',
      'Pipes hiss and something mechanical whirrs in the shadows, the iron grating that the trio step on echoes loudly.',
      'Turning a corner and then another, you arrive at the Caged Door. A catwalk extends to your left, over the caged room.',
      'Inside the room, transparent cylinders and a glass window leading into a large tank. Wiring and blinking lights. A control panel with a large lever and a countdown.',
      'Just as Veil remembered.',
      'But there is one other thing. Standing, back turned towards the group, appears to be a familiar looking dwarf.',
    ],
    promptText: 'Open the caged door',
  },
  {
    pageTitle: 'The Fated, The Loom, The Scope, and the Dying Sun',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
      'Entering through the caged airlock-like door, you step into the room.',
      'A gaggle of idential wizards stare up at you, somewhat interested. ' +
      'A large fiend shifts his seat to lean in to watch the exchange. ' +
      'Something in the water tank moves.',
      'Then the Dwarf begins speaking without turning, in the same voice that Hewn has.',
      '"Greetings, protectors."',
      'A short pause',
      '"Or, I should hope I am greeting protectors. While I am sure to try by best, I really have no garuntee that you\'ll recieve this message at all."',
      '"Although I hope to do a better job than my companion Tarzeus, in the event that you are hearing this with little or no context, I will present some assuptions"',
      '"You probably know of me as a fellow member of this little \'Protectors Guild\'. I probably went by the name Hewn, if I\'m at all consistent."',
      'You hear him chuckle to himself, before becoming a little sombre',
      '"You probably think I died (recently, hopefully). It should be fairly mysterious, with my body vanishing into thin air. Alas, if I gave you hope here, I am sorry"',
      '"That Hewn you knew did in fact perish. That is one of the conditions of this message being spoken out loud, after all."',
      '"I am however, as you can see, more than just singular. The dwarf that you see before you, like the dwarf you knew before, is a Golem."',
      'Hewn turns around, and in the dim light, you can see his face. Shiny, grey, and reflective, the Dwarf is entirely made out of iron.',
      '"I am constructed, and will be constructed again (given time). However, as is the case when someone like me is killed, time might not be as plentiful as usual."',
      '"So, to keep it short: I was constructed for a purpose, and that purpose was to find those Fated by Lolth."',
      'Not-Hewn grins.',
      '"Now, I\'m sure you\'ve probably seen some of our fancy tricks with the Compasses of Longing, or the Circles of Fated Teleportation. While impressive, ' +
      'the real secret to all those tricks is you."',
      '"As someone who is Fated (or otherwise known Aligned with Fate), your pasts, presents and future are all tied together in an knot, entangled and captured."',
      '"A long time ago, we, the Protectors Guild, became aware of threats that would exist far past our lifetimes."',
      '"We has a long time to prepare against them, but the core problem was that we were simply not going to survive long enough for our plans to come to fruition"',
      '"Many plans were tried; I discarded my identity and self and became a template, a set of motivations planted upon a material shell"',
      '"My colleges tried clones, simulacrums, chrono-spheres. I\'d bet Yorii is probably still stuck in her Sequester. But none of that mattered once we found Lolth"',
      '"Really, she\'s not as bad as the books make her out to be. Well, not in this sphere at least. Regardless, a number of our guild threw their souls to the wind to ' +
      'give creation to the Fated. With our Spider-Queen weaving their souls through the fates of many mortals throughout time and space, we conspired to tug the strings of it in just the right directions. ' +
      'The kind of directions that pulls random, but brilliant people together. That brings them here, and connects them with others."',
      '"And no, before you ask, its not \'just\' you. Its all of those that came before you, that are walking now, and will come after you. You\'re just going to be ' +
      'at the right place, at the right time, regardless of whether you want to be or not."',
      '"I\'ve perished, but succeeded. You, a Fated (and with any luck, more than one) stands before me, and can carry on my task while another Hewn bubbles together."',
      '"The threats that we predicted are more than one. In this very room, you can see many dangerous creatures too powerful to destroy that we\'ve locked away. But we didn\'t get all of them."',
      '"This message, in particular, is delivered when a Magnetronic Sequence Harmonizer surfaces. Long, meaningless words, but basically short for the Lock against one of our larger enemies."',
      '"The Sultan of Storms\'s influence couldnt be stopped in our time, only slowed. But, with the destruction of all four Magnetrons, he would be free to reign unchecked across this sphere."',
      'Hewn shakes his head. "The Sultan is nasty, but far from the worst. A lot has probably changes in the years it takes for the Loom to really get going."',
      '"But with change comes opportunity! If Lolth did what she claimed she could do, right about now a whole lot of interesting artefacts should be popping up."',
      '"Swords, Wands. But most imporantly, the Lenses."',
      '"If you come across an Astral Lens, take it to Baraxika The Remembrancer. The Dragon Council should be long lived enough to tell you where he currently resides.' +
      ' He knows the location of the Astral Scope, and how to assemble it again. Now, if you do happen to assemble it, I have one other request."',
      '"This last request is of the upmost importance."',
      '"If you assemble the Scope, broadcast to anybody listening, and I mean anybody, that the sun is dying. We\'re not sure why, we\'re not sure how, but somebody out there needs to know. ' +
      'Truth be told, my colleges and I are shadows of our past selves. Without the Fated, its likley that all our efforts would be in vain. ' +
      'The Scope can call for help, can call for those that thought us lost. The lenses are scattered in our time (for good reason), but once the danger passes, ' +
      'the Astral Scope is by far the most important magic that we need."',
      '"Hopefully, I\'ll be able to reform in a century or two, and nothing of particular importance happened while I was gone"',
      '"But, until then, you are the only living mortals entrusted with this knowlege. I leave the responsability of both the Protectors Guild, and the Material Plane, in your hands."',
      'Hewn stares off, not quite making eye contact.',
      '"I trust that whatever part of my friends that lives in you will make the right descisions. I\'m sorry you dont have much of a choice in this. Were there another path, we would have taken it gladly."',
      'Hewn shrugs. "Ah well. I bid you luck, Fated of Lolth and of the Protectors Guild. Farewell"',
      'And then the golem stops moving.',
      '...',
      '...',
    ],
    promptText: 'Take a moment to digest this information',
  },
  {
    pageTitle: 'A moment passed',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
      '"Psst" whispers one of the trapped wizards that are labeled Tarzeus.',
      '"About time one of you showed up; listen, ignoring whatever you think of me, there\'s something you should know."'
    ],
    promptText: 'Speak to A Tarzeus',
  },
  {
    pageTitle: 'Tarzeus The Many',
    background: { bottom: 'rgb(37, 5, 60)', top: 'rgb(0, 0, 0)' },
    text: [
      '"All that stuff about the "Fated" was all well and good, but \'ol Hewn here forgot about the most important part."',
      '"The part where it all only Works as long as Lolths fancy magic is tapped into the center of all the Ley Lines of this world"',
      '"And that it continues working, as long as nobody disturbs the very, very, very intricate spellwork at the top of Yorii\'s Hammer"',
      '"Where, if I\'m not mistaken, a Dragon has taken roost?"',
      '"Now, I\'m all for the downfall of the Protectors Guild and all that, but unfortunatley I\'m still stuck on the material plane"',
      '"And if all your little plans go south and I\'m still stuck in this cylinder, then I get toasted with the rest of you fools."',
      '"So please, before you turn off the lights, can you at least ask your new dragon overlord to not smudge the spellwork? Thank you."',
      'The Tarzaus sits down in a haughty huff, refusing to let you get even a word in edgewise.',
      'Merrew still has her sword drawn, and is slowly walking up to the now-forzen iron golem that was Hewn.',
      '"Oh, and in case it wasn\'t obvious," One of the Tarzeus snarks casually "You press the compass button to summon other Fated."',
    ],
    promptText: 'Much Later',
  },
  {
    pageTitle: 'Much Ado about a Dragon or Two',
    background: { bottom: 'rgb(230, 169, 131)', top: 'rgb(59, 184, 255)' },
    text: [
      'You have much to dwell on, and much to decide.',
      'Merrew has called together when men she has spare to hunt down Dijigin, and determine what exactly he did with the Magnetron.',
      'Outside, you can hear the back-and-forths of the dragons dueling it out somewhere on the island.',
      'You know you have allies that will heed the call for aid if you ask them to, but how to best put their talents to use, and in what little time you ' +
      'have while the dragonic struggle wrecks larger and larger portions of the island is up to you.',
    ],
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
