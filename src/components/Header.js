const Header = () => {
    return (
        <header
            className={'header'}>
            <div className={'header__logo--wrapper'}>
                <h1 className={'header__logo'}>Shopee</h1>
            </div>
            <div className={'header__search--wrapper'}>
                <div className={'header__search'}>
                    <input
                        className={'header__search--input'}
                        placeholder={'Buscar..'}
                        type={'text'} />
                    <div className={'header__search--icon'}>

                    </div>
                </div>
            </div>
            <div className={'header__cart--wrapper'}>
                <div className={'header__cart--icon'}>

                </div>
            </div>
        </header>
    );
}

export default Header;