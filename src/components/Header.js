const Header = () => {
    return (
        <header
            className={'header'}>
            <div className={'header__logo'}>
                <span>SHOPEE</span>
            </div>
            <div className={'header__search'}>
                <div className={'search'}>
                    <input
                        className={'search__input'}
                        type={'text'} />
                </div>
            </div>
            <div className={'header__cart'}>

            </div>
        </header>
    );
}

export default Header;