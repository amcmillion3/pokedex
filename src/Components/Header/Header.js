function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

function Header() {
    return(
        <header className="flex justify-center items-center mt-10">
            <div className="w-12 h-12">
                <img src={`${images[0]}`} alt="pokeball" />
            </div>
            <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-center ml-2">Pokedex</h1>
        </header>
    )
}

export default Header;