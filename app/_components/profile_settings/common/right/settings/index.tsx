"use client"

import { useState } from 'react';

import dynamic from 'next/dynamic';

import { SettingsENUM } from './constants';

const Security = dynamic(() => import('./security'));
const Account = dynamic(() => import('./account'));
const Password = dynamic(() => import('./password'));

export default function Settings() {
    const [selectCategory, setSelectCategory] = useState(SettingsENUM.PASSWORD);

    const categoryHandler = () => {
        switch (selectCategory) {
            case SettingsENUM.PASSWORD:
                return <Password />;
            case SettingsENUM.ACCOUNT:
                return <Account />;
            case SettingsENUM.SECURITY:
                return <Security />;
        }
    };

    return (
        <div>
            {/* <Tab
                isLoading={false}
                list={Object.values(SettingsENUM)}
                type={TabCategory.UNDERLINE}
                clickHandler={(value) =>
                    setSelectCategory(value as SettingsENUM)
                }
                styles={`padding: 12px 20px 0px 26px; text-transform: capitalize;`}
            /> */}
            <div>{categoryHandler()}</div>
        </div>
    );
}
