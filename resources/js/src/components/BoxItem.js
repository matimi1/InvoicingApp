import Icon from '@mdi/react'
import { mdiFileDocument } from '@mdi/js';
import { mdiHome } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';
import { mdiMenu } from '@mdi/js';



const BoxItem = ({ className, name, color }) => {

    return (
        <div className={className}>
            <Icon path={name === 'mdiHome' ? mdiHome
                : name === 'mdiFileDocument' ? mdiFileDocument
                    : name === 'mdiAccountMultiple' ? mdiAccountMultiple
                        : mdiMenu
            }
                color={color} size={1} alt="menu icon" />
        </div>
    );
}

export default BoxItem;