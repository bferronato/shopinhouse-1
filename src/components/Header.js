import React from 'react'

const Header = () => {
    return (
        <header
            className={'header'}>
            <div className={'header__logo'}>
                <span>S h o p e e</span>
            </div>
            <div className={'header__search'}>
                <div className={'search'}>
                    <input
                        className={'search__input'}
                        type={'search'}
                        placeholder={'Buscar....'}
                        results='0' />
                </div>
            </div>
            <div className={'header__cart'}>

            </div>
        </header>
    );
}

export default Header;