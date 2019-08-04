// @flow strict
/*::
import type { Node } from 'react';
*/
import { createElement as h } from 'preact';
import { useState } from 'preact/hooks';

/*::
type Props = {
  children: Array<Node>,
};
*/

export const TitleScreen = ({ children }/*: Props*/) => {
  const [start, setStart] = useState(false);

  if (start) {
    return children;
  }

  const promptOnClick = () => {
    setStart(true);
  }

  return h('div', { className: 'title-screen-background' },
    h('div', { className: 'title-screen-content' },
      h('p', { className: 'title-screen-warning' }, 'Warning, the following page includes some audio.'),
      h('button', { className: 'title-screen-prompt', onClick: promptOnClick }, 'Enter Chaper: The Quarry of the Protectors Guild')
    )
  );
};