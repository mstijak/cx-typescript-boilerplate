import { HtmlElement, Link, Button } from 'cx/widgets';

import * as JSCX from '../../jsx/converter';

export default <cx>
    <h3>Success</h3>
    <p>Your app is now running.</p>
    <p>Checklist:</p>
    <ul>
        <li><Link href="~/about">Routing</Link></li>
        <li class="green-item">CSS</li>
        <li>HMR</li>
    </ul>
</cx>
