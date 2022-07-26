import { useState } from 'react';
import { siteOptionContext } from '../helpers/Context';
import SubHeader from '../components/SubHeader';
import NewSiteOption from '../components/homeoptions/NewSiteOption';
import UpgradeSiteOption from '../components/homeoptions/UpgradeSiteOption';

function HomePage() {
    const [displayOption, setDisplayOption] = useState({
        menu: true,
        newsite: false,
        upgradesite: false,
    });

    return (
        <>
            <siteOptionContext.Provider
                value={{ displayOption, setDisplayOption }}
            >
                <SubHeader />
                {displayOption.newsite ? <NewSiteOption /> : ''}
                {displayOption.upgradesite ? <UpgradeSiteOption /> : ''}
            </siteOptionContext.Provider>
        </>
    );
}

export default HomePage;
