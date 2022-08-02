import Icon from '@mdi/react';
import { mdiTwitter } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
const Footer = () => {

    return (
        <footer>
            <div className="social-media-links">
                <Icon path={mdiTwitter}
                    title="twitter icon"
                    size={1}
                    color="grey" />
                <Icon path={mdiInstagram}
                    title="instagram icon"
                    size={1}
                    color="grey" />
                <Icon path={mdiFacebook}
                    title="facebook icon"
                    size={1}
                    color="grey" />
            </div>
            <p>© Copyright 2022</p>
        </footer>
    );
}

export default Footer;