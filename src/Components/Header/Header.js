function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

function Header() {
    return(
        <header>
            <div className="flex justify-center items-center pt-10 pb-5">
                <div className="w-12 h-12 mr-4">
                    <img src={`${images[0]}`} alt="pokeball" />
                </div>
                <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-center ml-4">Pokédex</h1>
            </div>
        </header>
    )
}

export default Header;