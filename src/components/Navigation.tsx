import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem
{
    label: string;
    path?: string;
    subItems?: MenuItem[];
}

const menuOptions: MenuItem[] = [
    {
        label: 'Properties',
        subItems: [
            { label: 'Registration', path: '/properties/registration' },
            { label: 'Search and listing', path: '/properties/search' },
        ],
    },
    {
        label: 'Customers',
        subItems: [
            { label: 'Registration', path: '/customers/registration' },
        ],
    },
];

const Navigation: React.FC = () =>
{
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuToggle = (menuLabel: string) =>
    {
        setOpenMenu(openMenu === menuLabel ? null : menuLabel);
    };

    return (
        <nav className='menu'>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                {menuOptions.map((menu) => (
                    <li key={menu.label} style={{ marginBottom: '0.5rem' }}>
                        <div
                            onClick={() => menu.subItems && handleMenuToggle(menu.label)}
                            style={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                padding: '0.5rem',
                                background: '#eaeaea',
                                borderRadius: '5px',
                            }}
                        >
                            {menu.label}
                        </div>
                        {menu.subItems && openMenu === menu.label && (
                            <ul style={{ listStyleType: 'none', margin: 0, paddingLeft: '1rem' }}>
                                {menu.subItems.map((subItem) => (
                                    <li key={subItem.label} style={{ marginTop: '0.3rem' }}>
                                        <Link
                                            to={subItem.path || '#'}
                                            style={{ textDecoration: 'none', color: '#007bff' }}
                                        >
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;

