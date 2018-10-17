import React from 'react';
import { Link } from 'react-router-dom';
import { Intent, Button } from '@blueprintjs/core';

import s from './styles.scss';

const Drafts = () => (
  <div>
    <div className={s.topbar}>
      <h3 className="bp3-heading">Contracts drafts</h3>
      <Link className={s.link} to="/wizard"><Button minimal intent={Intent.PRIMARY}>Create new contract</Button></Link>
    </div>

    <div className={s.drafts}>
      map saved contracts here
    </div>
  </div>
);

export default Drafts;
