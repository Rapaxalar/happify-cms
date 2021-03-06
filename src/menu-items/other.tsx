// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

// constant
const icons = {
    IconBrandChrome,
    IconHelp,
    IconSitemap
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'happifier-list',
            title: <FormattedMessage id="happifier-list" />,
            type: 'item',
            url: '/happifier/list',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
